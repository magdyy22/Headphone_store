import React, { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

const tracks = [
  {
    id: 1,
    title: "Calm Waves",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 2,
    title: "Gentle Piano",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: 3,
    title: "Soft Guitar",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
];

export default function MusicGallery() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const audioRefs = useRef({});
  const togglePlay = (id) => {
    const audio = audioRefs.current[id];
    if (!audio) return;
    if (currentTrack === id) {
      audio.pause();
      setCurrentTrack(null);
    } else {
      Object.values(audioRefs.current).forEach((a) => a.pause());
      audio.play();
      setCurrentTrack(id);
    }
  };

  return <>
    <div className="mb-5 text-center font-bold text-3xl pt-5"><h1>Music</h1></div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6" id="Music">
      {tracks.map((track) => (
        <div
          key={track.id}
          className="rounded-2xl shadow-md overflow-hidden bg-white p-5"
        >
          <img
            src={track.image}
            alt={track.title}
            className="h-40 w-full object-cover"
          />
          <div className="p-4 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">{track.title}</h3>
            <button
              onClick={() => togglePlay(track.id)}
              className="rounded-full border p-3 hover:bg-gray-100"
            >
              {currentTrack === track.id ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
            </button>
            <audio
              ref={(el) => (audioRefs.current[track.id] = el)}
              src={track.src}
            />
          </div>
        </div>
      )
      )}
    </div>
</>
  ;
}