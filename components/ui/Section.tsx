import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Section({ className, ...props }: BadgeProps) {
  return (
    <section
      className="flex min-h-0 flex-col gap-y-3 mb-5"
      {...props}
    />
  );
}
