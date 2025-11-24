"use client";

import { useEffect, useRef, useState } from "react";

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    lineDelay?: number;
    duration?: number;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span";
}

export const TextReveal = ({
    text,
    className = "",
    delay = 0,
    lineDelay = 0.15,
    duration = 0.9,
    as: Component = "div",
}: TextRevealProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setIsVisible(true);
                        }, delay);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [delay]);

    // Split text by newline only (not by comma)
    const lines = text
        .split(/\n/)
        .map(line => line.trim())
        .filter(line => line !== "");

    // Create component with ref support
    const ComponentWithRef = Component as any;

    return (
        <ComponentWithRef ref={elementRef} className={`text-reveal-wrapper ${className}`}>
            {lines.map((line, index) => (
                <div
                    key={index}
                    className={`text-reveal-line ${isVisible ? "text-reveal-line--visible" : ""}`}
                    style={{
                        transitionDelay: `${index * lineDelay}s`,
                        transitionDuration: `${duration}s`,
                    }}>
                    {line}
                </div>
            ))}
        </ComponentWithRef>
    );
};
