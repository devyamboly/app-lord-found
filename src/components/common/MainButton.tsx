import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function MainButton({
  icon = null,
  children,
  onClick,
  disabled = false,
  className,
}: {
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <Button
      size="lg"
      className={cn(
        "h-14 w-full rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-400 transition-all duration-200 shadow-lg shadow-amber-500/50 hover:shadow-xl hover:shadow-amber-400/60 border-0 hover:cursor-pointer",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {children}
    </Button>
  );
}
