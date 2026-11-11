"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type EventGalleryProps = {
  title: string;
  folder: string;
};

export default function EventGallery({
  title,
  folder,
}: EventGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const [media, setMedia] = useState<string[]>([]);
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  // Load images and videos from the gallery folder
  useEffect(() => {
    const loadMedia = async () => {
      try {
        const response = await fetch(`/api/gallery/${folder}`);

        if (!response.ok) {
          setMedia([]);
          return;
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setMedia(data);
        } else {
          setMedia([]);
        }
      } catch (error) {
        console.error("Unable to load gallery:", error);
        setMedia([]);
      }
    };

    loadMedia();
  }, [folder]);

  // Check whether a media file is a video
  const isVideo = (file: string) => {
    const extension = file.split(".").pop()?.toLowerCase();

    return (
      extension === "mp4" ||
      extension === "webm" ||
      extension === "ogg"
    );
  };

  // Automatic slow scrolling
  useEffect(() => {
    const gallery = galleryRef.current;

    if (!gallery || media.length < 2) {
      return;
    }

    let lastTime = 0;

    const scroll = (time: number) => {
      if (time - lastTime > 30) {
        if (
          gallery.scrollLeft + gallery.clientWidth >=
          gallery.scrollWidth - 1
        ) {
          gallery.scrollLeft = 0;
        } else {
          gallery.scrollLeft += 0.5;
        }

        lastTime = time;
      }

      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [media]);

  // Close lightbox with Escape key
  useEffect(() => {
    if (!selectedMedia) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedMedia(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMedia]);

  // No photos or videos yet
  if (media.length === 0) {
    return (
      <div className="flex min-h-[260px] items-center justify-center border border-white/10 bg-white/[0.03]">
        <div className="text-center">
          <div className="mb-5 text-4xl text-[#d9b36c]">
            ✦
          </div>

          <h3 className="font-serif text-2xl text-[#f5eee5]">
            Photos & Videos Coming Soon
          </h3>

          <p className="mt-3 text-sm text-[#f5eee5]/50">
            Gallery photos and videos will be added here soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* AUTO-SCROLLING GALLERY */}
      <div
        ref={galleryRef}
        className="flex gap-5 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {media.map((item, index) => {
          const video = isVideo(item);

          return (
            <button
              key={`${item}-${index}`}
              type="button"
              onClick={() => setSelectedMedia(item)}
              className="group relative h-[260px] w-[210px] flex-none overflow-hidden border border-white/10 bg-white/5 sm:h-[340px] sm:w-[280px]"
            >
              {video ? (
                <>
                  {/* VIDEO PREVIEW */}
                  <video
                    src={item}
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* PLAY ICON */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/60 text-2xl text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      ▶
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/30" />
                </>
              ) : (
                <>
                  {/* IMAGE */}
                  <Image
                    src={item}
                    alt={`${title} photo ${index + 1}`}
                    fill
                    sizes="280px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                </>
              )}

              {/* HOVER TEXT */}
              <div className="absolute bottom-4 left-4 right-4 text-left opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-xs uppercase tracking-[0.15em] text-white">
                  {video ? "Click to play" : "Click to enlarge"}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* LARGE IMAGE / VIDEO LIGHTBOX */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedMedia(null)}
        >
          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={() => setSelectedMedia(null)}
            className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center border border-white/20 bg-black/40 text-2xl text-white transition-colors hover:bg-white hover:text-black"
            aria-label="Close media"
          >
            ×
          </button>

          {/* LARGE MEDIA */}
          <div
            className="relative flex h-[85vh] w-full max-w-6xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            {isVideo(selectedMedia) ? (
              <video
                src={selectedMedia}
                controls
                autoPlay
                playsInline
                className="max-h-[85vh] max-w-full object-contain"
              />
            ) : (
              <div className="relative h-full w-full">
                <Image
                  src={selectedMedia}
                  alt={title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}