"use client";

import { forwardRef, type AnchorHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";

type ButtonProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
> & {
  variant?: "primary" | "ghost";
};

const EASE = [0.16, 1, 0.3, 1] as const;

export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const variants = {
      primary: "bg-rose text-night hover:bg-rose-deep",
      ghost: "border border-line text-bone hover:border-bone/60",
    };

    return (
      <Magnetic className="inline-block" strength={0.2}>
        <motion.a
          ref={ref}
          className={cn(
            "group relative inline-flex items-center gap-3 overflow-hidden whitespace-nowrap rounded-full py-2 pl-6 pr-2 text-[15px] font-medium transition-colors duration-300 ease-premium",
            variants[variant],
            className
          )}
          initial="rest"
          animate="rest"
          whileHover="hover"
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 420, damping: 28 }}
          {...props}
        >
          <span className="relative z-10">{children}</span>
          <span
            className={cn(
              "relative z-10 flex h-9 w-9 items-center justify-center overflow-hidden rounded-full",
              variant === "primary" ? "bg-night text-rose" : "bg-bone text-night"
            )}
          >
            {/* Arrow exits top-right while a twin enters bottom-left: reads as "go". */}
            <motion.span
              variants={{ rest: { x: 0, y: 0 }, hover: { x: 18, y: -18 } }}
              transition={{ duration: 0.45, ease: EASE }}
              className="absolute"
            >
              <ArrowUpRight size={17} strokeWidth={1.8} />
            </motion.span>
            <motion.span
              variants={{ rest: { x: -18, y: 18 }, hover: { x: 0, y: 0 } }}
              transition={{ duration: 0.45, ease: EASE }}
              className="absolute"
            >
              <ArrowUpRight size={17} strokeWidth={1.8} />
            </motion.span>
          </span>
        </motion.a>
      </Magnetic>
    );
  }
);

Button.displayName = "Button";
