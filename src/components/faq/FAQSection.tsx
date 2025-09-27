"use client";
import React, { useState } from "react";
import FAQItem from "@/components/faq/FAQItem";
import { FAQ_DATA } from "@/mocks/faqs"; 


export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (itemId: string) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <section className="py-16 px-4 sm:py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-8 sm:mb-12">
          Todo lo que <span className="text-amber-500">necesitas saber</span>
        </h2>

        <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          {FAQ_DATA.map((faq) => (
            <FAQItem
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItem === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}