import { ReactNode, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

interface PageProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "gradient";
}

/**
 * Page component renders a fixed-layout canvas that scales down on small screens
 * to ensure the mobile view matches desktop without cutting any content.
 */
export function Page({ children, className, background = "white" }: PageProps) {
  // Base desktop page size (closely matching a landscape slide)
  const BASE_WIDTH = 1200;
  const BASE_HEIGHT = 800;

  const [vw, setVw] = useState<number>(typeof window !== "undefined" ? window.innerWidth : BASE_WIDTH);
  const [printing, setPrinting] = useState(false);

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", onResize);
    const before = () => setPrinting(true);
    const after = () => setPrinting(false);
    window.addEventListener("beforeprint", before);
    window.addEventListener("afterprint", after);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("beforeprint", before);
      window.removeEventListener("afterprint", after);
    };
  }, []);

  const scale = useMemo(() => {
    if (printing) return 1;
    const maxWidth = Math.min(vw - 24, BASE_WIDTH);
    return Math.min(1, maxWidth / BASE_WIDTH);
  }, [vw, printing]);

  const scaledHeight = Math.round(BASE_HEIGHT * scale);

  return (
    <div className="w-full flex justify-center print:block">
      <div
        className="relative page-root print:mx-auto print:block"
        style={{ height: printing ? BASE_HEIGHT : scaledHeight, width: printing ? BASE_WIDTH : Math.round(BASE_WIDTH * scale) }}
      >
        <div
          className={cn(
            "origin-top-left rounded-[28px] shadow-lg ring-1 ring-black/5 overflow-hidden print:rounded-none print:shadow-none",
            background === "gradient"
              ? "bg-[radial-gradient(120%_140%_at_10%_10%,_rgba(255,255,255,0.9)_0%,_rgba(198,223,255,0.9)_45%,_rgba(156,196,255,0.9)_80%)]"
              : "bg-white",
          )}
          style={{ transform: printing ? "none" : `scale(${scale})`, width: BASE_WIDTH, height: BASE_HEIGHT, pageBreakAfter: "always" }}
        >
          <div className={cn("w-full h-full", className)}>{children}</div>
        </div>
      </div>
    </div>
  );
}

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("rounded-2xl border border-black/10 bg-white/90 p-6 shadow-sm", className)}>
      {children}
    </div>
  );
}
