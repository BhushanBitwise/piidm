import React, { useRef, useEffect } from 'react';
import { X } from 'lucide-react';

export default function VideoModal({ videoId, isOpen, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && videoId) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen, videoId]);

  if (!isOpen || !videoId) return null;

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="p-0 rounded-3xl shadow-2xl backdrop:bg-slate-950/85 max-w-3xl w-[95%] border border-slate-700 open:animate-in open:fade-in open:zoom-in-95 duration-200 overflow-hidden bg-black"
    >
      <div className="relative aspect-video w-full bg-black">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Close video player"
        >
          <X className="w-5 h-5" />
        </button>

        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title="PIIDM Student Video Testimonial"
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </dialog>
  );
}
