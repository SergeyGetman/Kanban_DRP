import React, { useEffect, useRef } from 'react';

function Played(play: boolean) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.1;
      audio.play().catch((e) => console.log('stopped', e));
    }
  };

  useEffect(() => {
    play && playMusic();
  }, [play]);

  return (
    <>
      <div>
        <button onClick={playMusic}>▶️ Play</button>

        <audio ref={audioRef} loop>
          <source src="../public/musik/musofon.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </>
  );
}

export default Played;
