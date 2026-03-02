import { useRef, useState, useEffect, useCallback, type ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface CarouselProps {
  children: ReactNode[];
  gapSize?: "md" | "none";
  className?: string;
}

export default function Carousel({ children, gapSize = "md", className = "" }: CarouselProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const isMouseDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const updateScrollState = useCallback(() => {
    const el = sliderRef.current;
    if (!el) return;
    setIsAtStart(el.scrollLeft === 0);
    setIsAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  }, []);

  // Scroll state listener
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  // Mouse drag-to-scroll
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const onMouseDown = (e: MouseEvent) => {
      isMouseDown.current = true;
      startX.current = e.clientX;
      scrollLeftStart.current = el.scrollLeft;
    };

    const onMouseLeave = () => {
      setIsDragging(false);
      isMouseDown.current = false;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isMouseDown.current) return;
      setIsDragging(true);
      e.preventDefault();
      el.scrollLeft = scrollLeftStart.current - (e.clientX - startX.current);
    };

    const onMouseUp = () => {
      setIsDragging(false);
      isMouseDown.current = false;
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const moveSlider = (direction: -1 | 1) => {
    const el = sliderRef.current;
    if (!el || el.children.length === 0) return;

    const firstItem = el.children[0] as HTMLElement;
    const gap = parseInt(getComputedStyle(el).gap, 10) || 0;
    const scrollAmount = el.scrollLeft + (firstItem.clientWidth + gap) * direction;

    el.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div
        ref={sliderRef}
        className={[
          "flex overflow-x-auto",
          gapSize === "md" ? "gap-6" : "gap-0",
          isDragging ? "cursor-grabbing select-none" : "cursor-grab",
        ].join(" ")}
        style={{ scrollbarWidth: "none" }}
      >
        {children}
      </div>

      
        <div className="flex justify-center gap-4">
          <button
            onClick={() => moveSlider(-1)}
            disabled={isAtStart}
            className="bg-white/80 hover:bg-white disabled:opacity-30 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition cursor-pointer"
            aria-label="Previous"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={() => moveSlider(1)}
            disabled={isAtEnd}
            className="bg-white/80 hover:bg-white disabled:opacity-30 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition cursor-pointer"
            aria-label="Next"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
 
    </div>
  );
}
