import type { ComponentPropsWithoutRef } from "react";

type AccentLinkProps = ComponentPropsWithoutRef<"a">;

export function AccentLink({ children, className = "", ...props }: AccentLinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={`text-accent-link underline underline-offset-2 hover:opacity-80 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
