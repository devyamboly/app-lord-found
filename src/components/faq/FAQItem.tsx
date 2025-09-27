"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({ id, question, answer, isOpen, onToggle }: FAQItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [answer, isOpen]);

  return (
    <div className="border border-amber-500/30 rounded-xl bg-gradient-to-br from-zinc-900/60 to-zinc-900/30 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex items-center justify-between hover:bg-amber-500/5 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        id={`${id}-trigger`}
      >
        <span className="text-white font-medium text-base sm:text-lg pr-4">{question}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 sm:w-6 sm:h-6 text-amber-500 transition-transform duration-300 ease-in-out flex-shrink-0",
            isOpen && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: isOpen ? `${contentHeight}px` : "0px" }}
        id={`${id}-content`}
        role="region"
        aria-labelledby={`${id}-trigger`}
      >
        <div ref={contentRef} className="px-6 sm:px-8 pt-2 pb-5 sm:pb-6">
          <div className="border-t border-amber-500/20 pt-3 sm:pt-4">
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}