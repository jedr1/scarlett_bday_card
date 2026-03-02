import type { ReactNode } from "react";

export default function Card({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className={`rounded-lg bg-white p-4 min-w-[300px] min-h-[300px] shadow-md ${className}`}>
      {children}
    </div>
  )
}