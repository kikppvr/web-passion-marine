import { cn } from "@/lib/utils";

export type SkeletonTone = "dark" | "light";

interface SkeletonBlockProps {
    className?: string;
    tone?: SkeletonTone;
}

export function SkeletonBlock({ className, tone = "light" }: SkeletonBlockProps) {
    return (
        <div
            className={cn(
                "skeleton-shimmer",
                tone === "dark" ? "skeleton-shimmer--dark" : "skeleton-shimmer--light",
                className
            )}
            aria-hidden='true'
        />
    );
}
