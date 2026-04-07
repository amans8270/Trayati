"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function MotionEnhancer() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    const pointerTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    const handlePointerMove = (event: PointerEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX / innerWidth) * 100;
      const y = (event.clientY / innerHeight) * 100;

      root.style.setProperty("--pointer-x", `${x}%`);
      root.style.setProperty("--pointer-y", `${y}%`);
      root.style.setProperty("--pointer-px", `${event.clientX}px`);
      root.style.setProperty("--pointer-py", `${event.clientY}px`);
    };

    const cleanupFns = pointerTargets.map((element) => {
      const handleMove = (event: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const offsetX = event.clientX - rect.left - rect.width / 2;
        const offsetY = event.clientY - rect.top - rect.height / 2;

        element.style.setProperty("--magnetic-x", `${offsetX * 0.12}px`);
        element.style.setProperty("--magnetic-y", `${offsetY * 0.12}px`);
      };

      const handleLeave = () => {
        element.style.setProperty("--magnetic-x", "0px");
        element.style.setProperty("--magnetic-y", "0px");
      };

      element.addEventListener("mousemove", handleMove);
      element.addEventListener("mouseleave", handleLeave);

      return () => {
        element.removeEventListener("mousemove", handleMove);
        element.removeEventListener("mouseleave", handleLeave);
      };
    });

    const revealImmediatelyIfVisible = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        element.classList.add("is-visible");
        return true;
      }

      return false;
    };

    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("is-visible");
                  observer?.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
          )
        : null;

    revealTargets.forEach((element) => {
      element.classList.remove("is-visible");

      if (revealImmediatelyIfVisible(element)) {
        return;
      }

      if (observer) {
        observer.observe(element);
      } else {
        element.classList.add("is-visible");
      }
    });

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    const rafId = window.requestAnimationFrame(() => {
      revealTargets.forEach((element) => {
        revealImmediatelyIfVisible(element);
      });
    });

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", handlePointerMove);
      cleanupFns.forEach((cleanup) => cleanup());
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
