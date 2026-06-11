import type { ReactNode } from "react";

type InfoRowProps = {
  label: string;
  children: ReactNode;
  stacked?: boolean;
};

export function InfoRow({ label, children, stacked = false }: InfoRowProps) {
  if (stacked) {
    return (
      <section className="border-t border-[#d8d8d8] py-12">
        <h2 className="font-serif text-[24px] leading-[24px] font-normal text-foreground mb-8">
          {label}
        </h2>
        <div className="font-sans text-[18px] leading-[30px] font-normal text-foreground">
          {children}
        </div>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-3 border-t border-[#d8d8d8] py-12 md:grid-cols-[1fr_1.6fr] md:items-center md:gap-10">
      <h2 className="font-serif text-[24px] leading-[24px] font-normal text-foreground">
        {label}
      </h2>
      <div className="font-sans text-[18px] leading-[30px] font-normal text-foreground">
        {children}
      </div>
    </section>
  );
}
