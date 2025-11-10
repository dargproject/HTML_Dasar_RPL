import { ChevronLeft, ChevronRight, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}

interface QuizQuestionProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  userAnswer: string | null;
  feedback: { isCorrect: boolean; shown: boolean } | null;
  onSelectAnswer: (answer: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoPrevious: boolean;
  onSubmit: () => void;
  isLastQuestion: boolean;
}

export function QuizQuestion({
  question,
  currentIndex,
  totalQuestions,
  userAnswer,
  feedback,
  onSelectAnswer,
  onNext,
  onPrevious,
  canGoPrevious,
  onSubmit,
  isLastQuestion
}: QuizQuestionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-amber-100 to-red-200 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 animate-fadeIn">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-gray-600">
                Soal {currentIndex + 1} dari {totalQuestions}
              </span>
              <span className="text-sm font-semibold text-blue-600">
                {Math.round(((currentIndex + 1) / totalQuestions) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed">
              {question.question}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option, idx) => (
                <label
                  key={idx}
                  className="flex items-start gap-4 p-4 border-2 rounded-lg cursor-pointer transition-all duration-300"
                  style={{
                    borderColor: userAnswer === option ? '#3b82f6' : '#e5e7eb',
                    backgroundColor: userAnswer === option ? '#eff6ff' : '#ffffff'
                  }}
                  onMouseEnter={(e) => {
                    if (!userAnswer) {
                      e.currentTarget.style.borderColor = '#bfdbfe';
                      e.currentTarget.style.backgroundColor = '#f0f9ff';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = userAnswer === option ? '#3b82f6' : '#e5e7eb';
                    e.currentTarget.style.backgroundColor = userAnswer === option ? '#eff6ff' : '#ffffff';
                  }}
                >
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={userAnswer === option}
                    onChange={() => onSelectAnswer(option)}
                    disabled={feedback?.shown}
                    className="mt-1 w-5 h-5 cursor-pointer"
                  />
                  <span className="text-gray-800 font-medium flex-1">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Feedback */}
          {feedback?.shown && (
            <div
              className={`mb-8 p-6 rounded-lg animate-slideDown transition-all duration-300 ${
                feedback.isCorrect
                  ? 'bg-green-100 border-2 border-green-400'
                  : 'bg-red-100 border-2 border-red-400'
              }`}
            >
              <div className="flex items-start gap-4">
                {feedback.isCorrect ? (
                  <CheckCircle className="text-green-600 flex-shrink-0" size={28} />
                ) : (
                  <XCircle className="text-red-600 flex-shrink-0" size={28} />
                )}
                <div>
                  <p
                    className={`font-bold mb-2 ${
                      feedback.isCorrect ? 'text-green-700' : 'text-red-700'
                    }`}
                  >
                    {feedback.isCorrect ? '✅ Jawaban Anda benar!' : '❌ Jawaban kurang tepat.'}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">📝 Penjelasan:</span> {question.explanation}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col lg:flex-row gap-4 justify-between pt-8 border-t-2 border-gray-200">
            <button
              onClick={onPrevious}
              disabled={!canGoPrevious || feedback?.shown === false}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                !canGoPrevious || feedback?.shown === false
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105'
              }`}
            >
              <ChevronLeft size={20} />
              Sebelumnya
            </button>

            <div className="flex gap-4 flex-1 lg:flex-initial">
              {!feedback?.shown && userAnswer && (
                <button
                  onClick={() => {
                    const isCorrect = userAnswer === question.correct;
                    feedback;
                  }}
                  className="flex-1 px-6 py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition-all duration-300 hover:scale-105"
                  style={{
                    cursor: 'default'
                  }}
                >
                  Lihat Penjelasan
                </button>
              )}

              {isLastQuestion ? (
                <button
                  onClick={onSubmit}
                  disabled={feedback?.shown === false}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                    feedback?.shown === false
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg hover:scale-105'
                  }`}
                >
                  Selesai & Lihat Hasil
                  <ChevronRight size={20} />
                </button>
              ) : (
                <button
                  onClick={onNext}
                  disabled={feedback?.shown === false}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                    feedback?.shown === false
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:scale-105'
                  }`}
                >
                  Selanjutnya
                  <ChevronRight size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease;
        }
      `}</style>
    </div>
  );
}
