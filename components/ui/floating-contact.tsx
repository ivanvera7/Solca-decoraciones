"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: SITE.whatsapp, label: "WhatsApp", icon: MessageCircle },
  { href: SITE.instagram, label: "Instagram", icon: Instagram },
];

export function FloatingContact() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > window.innerHeight * 0.6;
    if (next !== visible) setVisible(next);
  });

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <AnimatePresence>
        {visible &&
          LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Escríbenos por ${link.label}`}
              initial={{ opacity: 0, y: 16, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.8 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 380, damping: 26, delay: i * 0.05 }}
              className={cn(
                "group relative flex h-12 w-12 items-center justify-center rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]",
                i === 0 ? "bg-rose text-night" : "border border-line bg-night-2/90 text-bone backdrop-blur-md"
              )}
            >
              <link.icon size={19} strokeWidth={1.6} />
              <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-night-3 px-3 py-1.5 text-xs text-bone opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {link.label}
              </span>
            </motion.a>
          ))}
      </AnimatePresence>
    </div>
  );
}
