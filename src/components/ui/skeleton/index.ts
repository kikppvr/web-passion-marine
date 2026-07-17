export { SkeletonBlock, type SkeletonTone } from "./SkeletonBlock";
export { CardSkeleton, type CardSkeletonVariant } from "./CardSkeleton";
export { CardGridSkeleton } from "./CardGridSkeleton";
export { SwiperSectionSkeleton } from "./SwiperSectionSkeleton";
export { DetailPageSkeleton } from "./DetailPageSkeleton";
export { PageIntroSkeleton } from "./PageIntroSkeleton";
export { ServiceSectionSkeleton } from "./ServiceSectionSkeleton";
export { StatsGridSkeleton } from "./StatsGridSkeleton";
export { FeatureGridSkeleton } from "./FeatureGridSkeleton";
export { MissionCardGridSkeleton } from "./MissionCardGridSkeleton";
export { MilestoneListSkeleton } from "./MilestoneListSkeleton";

export function isCmsLoading<T>(data: T | null): data is null {
    return data === null;
}
