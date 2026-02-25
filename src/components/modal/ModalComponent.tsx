"use client";

import React, { ReactNode, MouseEvent } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="relative bg-[#14224B] p-6 rounded-3xl max-w-sm w-full flex flex-col items-center"
          onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>
  );
}
