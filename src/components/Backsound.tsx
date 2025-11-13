// src/components/Backsound.tsx
import { useEffect } from "react";

// 🧩 Tambahkan deklarasi agar TypeScript kenal "SC"
declare global {
  interface Window {
    SC?: any;
  }
}

interface BacksoundProps {
  play: boolean;
}

export default function Backsound({ play }: BacksoundProps) {
  useEffect(() => {
    // Fungsi untuk memuat SoundCloud API jika belum ada
    const loadSoundCloudAPI = () => {
      return new Promise<void>((resolve) => {
        if (window.SC && window.SC.Widget) {
          resolve();
        } else {
          const script = document.createElement("script");
          script.src = "https://w.soundcloud.com/player/api.js";
          script.onload = () => resolve();
          document.body.appendChild(script);
        }
      });
    };

    const initWidget = async () => {
      await loadSoundCloudAPI();

      const iframe = document.getElementById("sc-player") as HTMLIFrameElement | null;
      if (!iframe) return;

      const widget = window.SC.Widget(iframe);

      // Tunggu widget siap dulu
      widget.bind(window.SC.Widget.Events.READY, function () {
        widget.setVolume(30); // 🔉 atur volume 20%
        if (play) widget.play();
        else widget.pause();
      });

      // Kalau state play berubah setelah ready
      if (play) widget.play();
      else widget.pause();
    };

    initWidget();
  }, [play]);

  return (
    <iframe
      id="sc-player"
      width="0"
      height="0"
      style={{ display: "none" }}
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/wavebeatsmusic/soft-uplifting-corporate-background-music-for-video-royalty-free&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
    ></iframe>
  );
}
