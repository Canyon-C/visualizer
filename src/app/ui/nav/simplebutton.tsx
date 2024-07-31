"use client";
import React from "react";
import { cn } from "@/app/utils/cn";
import { Toaster } from "sonner";

export const SimpleCard = ({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "w-full bg-white rounded-xl border-neutral-100 dark:bg-black dark:border-white/[0.2] hover:border-neutral-200 group/btn overflow-hidden relative flex items-center justify-center",
        className
      )}
    >
      <div className="absolute inset-0 dark:bg-dot-white/[0.1] bg-dot-black/[0.1]" />
      <div className="relative z-40">{children}</div>
    </div>
  );
};

export function SimpleButton_1() {
  return (
    <div className="pb-40 px-4 w-full">
      <Toaster position="top-center" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  max-w-7xl mx-auto gap-10">
        {buttons.map((button, idx) => (
          <SimpleCard key={idx}>{button.component}</SimpleCard>
        ))}
      </div>
    </div>
  );
}
export const buttons = [
  {
    name: "Simple",
    description: "Elegant button for your website",
    component: (
      <button className="px-4 py-2 rounded-md border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
        Logarithmic
      </button>
    ),
  },
];

export function SimpleButton_2() {
  return (
    <div className="pb-40 px-4 w-full">
      <Toaster position="top-center" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  max-w-7xl mx-auto gap-10">
        {buttons_2.map((button, idx) => (
          <SimpleCard key={idx}>{button.component}</SimpleCard>
        ))}
      </div>
    </div>
  );
}
export const buttons_2 = [
  {
    name: "Simple",
    description: "Elegant button for your website",
    component: (
      <button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
        Quadratic
      </button>
    ),
  },
];
