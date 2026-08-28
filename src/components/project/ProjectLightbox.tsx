import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { ProjectScreenshot } from '../../types/project';
import { smoothEase } from '../motion/MotionUtils';

interface ProjectLightboxProps {
  isOpen: boolean;
  currentIndex: number;
  screenshots: ProjectScreenshot[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const ProjectLightbox: React.FC<ProjectLightboxProps> = ({
  isOpen,
  currentIndex,
  screenshots,
  onClose,
  onPrev,
  onNext,
}) => {
  const current = screenshots[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!current) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="project-lightbox-modal"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: smoothEase }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 md:p-8"
          onClick={onClose}
        >
          {/* Top Control Bar */}
          <div
            className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-10 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-semibold text-slate-300">
                {current.category || 'Screen'} • {currentIndex + 1} of {screenshots.length}
              </span>
            </div>

            <button
              id="lightbox-close-btn"
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Previous Button */}
          {screenshots.length > 1 && (
            <button
              id="lightbox-prev-btn"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Previous screenshot"
              className="hidden sm:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-200 z-10 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E]"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next Button */}
          {screenshots.length > 1 && (
            <button
              id="lightbox-next-btn"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Next screenshot"
              className="hidden sm:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-200 z-10 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E]"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Main Visual Display */}
          <motion.div
            key={current.id}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: smoothEase }}
            className="w-full max-w-5xl max-h-[85vh] overflow-y-auto rounded-2xl md:rounded-3xl shadow-2xl bg-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            {/* The Rendered Component */}
            <div className="w-full">
              {current.renderVisual}
            </div>

            {/* Bottom Caption */}
            <div className="bg-[#0A0E1A] p-4 sm:p-5 rounded-b-2xl md:rounded-b-3xl border-t border-white/10 text-white mt-1">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {current.title}
              </h3>
              {current.caption && (
                <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                  {current.caption}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
