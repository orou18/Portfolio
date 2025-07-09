"use client";
import React, { useEffect } from "react";

export default function AboutPopover({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.id === "overlay") onClose();
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [onClose]);

  return (
    <div
      id="overlay"
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div className="relative max-w-xl w-full bg-gray-900 text-white p-6 rounded-lg shadow-2xl border border-amber-500">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white text-2xl hover:text-amber-500"
        >
          &times;
        </button>
        <div className="text-sm sm:text-base space-y-4 max-h-[70vh] overflow-y-auto px-1">
          {children}
        </div>
      </div>
    </div>
  );
}
