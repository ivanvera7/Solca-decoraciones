import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  showWordmark?: boolean;
};

export function Logo({ variant = "light", className, showWordmark = true }: LogoProps) {
  const src = showWordmark
    ? variant === "dark"
      ? "/logo/logo-dark.png"
      : "/logo/logo-light.png"
    : variant === "dark"
      ? "/logo/icon-dark.png"
      : "/logo/icon-light.png";

  return (
    <Link
      href="#inicio"
      aria-label="SOLCA Decoraciones, ir al inicio"
      className={cn("relative inline-flex items-center", className)}
    >
      <Image
        src={src}
        alt="SOLCA Decoraciones"
        width={showWordmark ? 96 : 40}
        height={showWordmark ? 99 : 49}
        priority
        className="h-auto w-full object-contain"
      />
    </Link>
  );
}
