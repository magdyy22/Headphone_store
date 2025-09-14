import React, { useState } from "react";

const AudioPlayerPage = () => {
  const [currentTrack, setCurrentTrack] = useState(null);

  const surahs = [
    {
      name: "الفاتحة",
      src: "https://download.quranicaudio.com/quran/abdullaah_basfar/001.mp3",
    },
    {
      name: "البقرة (أول 5 آيات)",
      src: "https://download.quranicaudio.com/quran/abdullaah_basfar/002.mp3",
    },
    {
      name: "الإخلاص",
      src: "https://download.quranicaudio.com/quran/abdullaah_basfar/112.mp3",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50 text-center">
      <h1 className="text-3xl font-bold text-brandDark mb-6">
        القرآن الكريم 🎧
      </h1>

      <div className="max-w-lg mx-auto space-y-4">
        {surahs.map((surah, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-white shadow flex items-center justify-between"
          >
            <span className="font-medium">{surah.name}</span>
            <button
              onClick={() => setCurrentTrack(surah.src)}
              className="px-4 py-2 rounded-lg bg-brandDark text-white"
            >
              تشغيل
            </button>
          </div>
        ))}
      </div>

      {currentTrack && (
        <div className="mt-8">
          <audio controls autoPlay className="w-full max-w-lg mx-auto">
            <source src={currentTrack} type="audio/mp3" />
            متصفحك لا يدعم تشغيل الصوت
          </audio>
        </div>
      )}
    </div>
  );
};

export default AudioPlayerPage;

