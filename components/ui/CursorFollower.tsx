import React from 'react';

interface CursorFollowerProps {
  x: number;
  y: number;
  isVisible: boolean;
}

const CursorFollower: React.FC<CursorFollowerProps> = ({ x, y, isVisible }) => {
  const style: React.CSSProperties = {
    top: 0,
    left: 0,
    transform: `translate(${x}px, ${y}px)`,
    transition: 'transform 0.1s ease-out, opacity 0.3s ease-out',
    opacity: isVisible ? 1 : 0,
  };

  return (
    <div
      style={style}
      className="fixed w-6 h-6 rounded-full border-2 border-sky-400 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 shadow-[0_0_15px_rgba(99,102,241,0.6),_0_0_25px_rgba(129,140,248,0.4)]"
    />
  );
};

export default CursorFollower;
