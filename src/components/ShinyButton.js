'use client';
import React from 'react';

const ShinyButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative overflow-hidden px-6 py-3 bg-gradient-to-r from-[#1E40AF] via-[#1E90FF] to-[#63B3ED] text-white font-bold text-lg rounded-[10px] shadow-md transition duration-300 group"
    >
      {/* Éclat */}
      <span className="absolute top-0 left-[-75%] w-[50%] h-full transform skew-x-[-20deg] bg-white/30 opacity-0 group-hover:opacity-100 animate-shine" />

      {/* Texte devant */}
      <span className="relative z-10 tracking-wide drop-shadow-md">
        {children}
      </span>
    </button>
  );
};

export default ShinyButton;
