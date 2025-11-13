import { useState, useEffect } from 'react';
import { HomePage } from './components/HomePage';
import { MateriPage } from './components/MateriPage';
import { QuizIdentity } from './components/QuizIdentity';
import { QuizQuestion } from './components/QuizQuestion';
import { QuizResult } from './components/QuizResult';
import { AboutModal } from './components/AboutModal';
import { quizQuestions, materiSections } from './data/quizData';

import Backsound from "./components/Backsound";


type Page = 'home' | 'materi' | 'quiz-identity' | 'quiz-question' | 'quiz-result';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentMateriSection, setCurrentMateriSection] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [studentName, setStudentName] = useState('');
  const [studentNISN, setStudentNISN] = useState('');
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>(new Array(10).fill(null));
  const [showAbout, setShowAbout] = useState(false);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; shown: boolean } | null>(null);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, currentMateriSection, currentQuestionIndex]);

  // Sound effect function
  const playClickSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = 800;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
      // Fallback if audio context fails
    }
  };

  const handleStartLearning = () => {
    playClickSound();
    setCurrentMateriSection(0);
    setCurrentPage('materi');
  };

  const handleStartQuiz = () => {
    playClickSound();
    setCurrentPage('quiz-identity');
  };

  const handleQuizIdentitySubmit = (nama: string, nisn: string) => {
    playClickSound();
    setStudentName(nama);
    setStudentNISN(nisn);
    setCurrentQuestionIndex(0);
    setUserAnswers(new Array(10).fill(null));
    setFeedback(null);
    setCurrentPage('quiz-question');
  };

  const handleSelectAnswer = (answer: string) => {
    playClickSound();
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newAnswers);

    // Auto-show feedback when answer is selected
    setTimeout(() => {
      const isCorrect = answer === quizQuestions[currentQuestionIndex].correct;
      setFeedback({ isCorrect, shown: true });
    }, 300);
  };

  const handleNextQuestion = () => {
    playClickSound();
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setFeedback(null);
    }
  };

  const handlePreviousQuestion = () => {
    playClickSound();
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setFeedback({ isCorrect: userAnswers[currentQuestionIndex - 1] === quizQuestions[currentQuestionIndex - 1].correct, shown: true });
    }
  };

  const handleSubmitQuiz = () => {
    playClickSound();
    setCurrentPage('quiz-result');
  };

  const handleRetakeQuiz = () => {
    playClickSound();
    setCurrentQuestionIndex(0);
    setUserAnswers(new Array(10).fill(null));
    setFeedback(null);
    setCurrentPage('quiz-identity');
  };

  const handleNextMateri = () => {
    playClickSound();
    if (currentMateriSection < materiSections.length - 1) {
      setCurrentMateriSection(currentMateriSection + 1);
      setFeedback(null);
    } else {
      setCurrentPage('quiz-identity');
    }
  };

  const handlePreviousMateri = () => {
    playClickSound();
    if (currentMateriSection > 0) {
      setCurrentMateriSection(currentMateriSection - 1);
    }
  };

  const handleGoHome = () => {
    playClickSound();
    setCurrentPage('home');
    setCurrentMateriSection(0);
    setCurrentQuestionIndex(0);
    setFeedback(null);
  };

  const calculateScore = () => {
    let correct = 0;
    userAnswers.forEach((answer, idx) => {
      if (answer === quizQuestions[idx].correct) {
        correct++;
      }
    });
    return correct * 10;
  };

  return (
     <div className="min-h-screen bg-gray-50">
      {/* 🎵 Backsound hanya aktif di halaman Materi */}
      <Backsound play={currentPage === 'materi' && !isVideoPlaying} />


      {currentPage === 'home' && (
        <HomePage
          onStartLearning={handleStartLearning}
          onStartQuiz={handleStartQuiz}
          onShowAbout={() => setShowAbout(true)}
        />
      )}

      {currentPage === 'materi' && (
        <MateriPage
          currentSection={currentMateriSection + 1}
          section={materiSections[currentMateriSection]}
          onNext={handleNextMateri}
          onPrevious={handlePreviousMateri}
          onHome={handleGoHome}
          canGoNext={currentMateriSection < materiSections.length - 1}
          canGoPrev={currentMateriSection > 0}
          onVideoStateChange={(isPlaying) => setIsVideoPlaying(isPlaying)}
        />
      )}

      {currentPage === 'quiz-identity' && (
        <QuizIdentity
          onSubmit={handleQuizIdentitySubmit}
          onHome={handleGoHome}
        />
      )}

      {currentPage === 'quiz-question' && (
        <QuizQuestion
          question={quizQuestions[currentQuestionIndex]}
          currentIndex={currentQuestionIndex}
          totalQuestions={quizQuestions.length}
          userAnswer={userAnswers[currentQuestionIndex]}
          feedback={feedback}
          onSelectAnswer={handleSelectAnswer}
          onNext={handleNextQuestion}
          onPrevious={handlePreviousQuestion}
          canGoPrevious={currentQuestionIndex > 0}
          onSubmit={handleSubmitQuiz}
          isLastQuestion={currentQuestionIndex === quizQuestions.length - 1}
        />
      )}

      {currentPage === 'quiz-result' && (
        <QuizResult
          nama={studentName}
          nisn={studentNISN}
          score={calculateScore()}
          onRetakeQuiz={handleRetakeQuiz}
          onHome={handleGoHome}
        />
      )}

      <AboutModal
        isOpen={showAbout}
        onClose={() => setShowAbout(false)}
      />
    </div>
  );
}

export default App;
