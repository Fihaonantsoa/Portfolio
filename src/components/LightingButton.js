'use client';
import React from 'react';
import '../styles/lighting-button.css';

const LightningButton = ({
  children,
  onClick,
  fromColor = 'from-blue-600',
  viaColor = 'via-blue-400',
  toColor = 'to-blue-500',
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden px-6 py-2 bg-gradient-to-r ${fromColor} ${viaColor} ${toColor} font-semibold text-md cursor-pointer rounded-[10px] shadow-lg group`}
    >
      <span className="relative z-10">{children}</span>
      <span className="shine-effect absolute top-0 left-[-75%] w-[200%] h-full pointer-events-none" />
    </button>
  );
};

export default LightningButton;
