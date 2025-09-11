import { useState, useEffect } from 'react';
import { RippleDot } from '@/components/StyledComponent/Cursor.style';

const CursorRipple: React.FC = () => {
  const [ripples, setRipples] = useState<
    Array<{ x: number; y: number; id: number }>
  >([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newRipple = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now() + Math.random(),
      };

      setRipples(prev => {
        const next = [...prev, newRipple];
        return next.length > 8 ? next.slice(-8) : next;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {ripples.map(dot => (
        <RippleDot key={dot.id} x={dot.x} y={dot.y} />
      ))}
    </>
  );
};

export default CursorRipple;
