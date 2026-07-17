import { SkeletonBlock } from "./SkeletonBlock";

const NEWS_PARAGRAPH_WIDTHS = ["w-full", "w-[98%]", "w-full", "w-[94%]", "w-full", "w-[88%]"];

export function NewsContentSkeleton() {
    return (
        <>
            {NEWS_PARAGRAPH_WIDTHS.map((width, index) => (
                <div key={index} className='detail-content-skeleton__paragraph'>
                    <SkeletonBlock tone='light' className={`h-5 ${width}`} />
                </div>
            ))}
        </>
    );
}

const PORTFOLIO_PARAGRAPH_WIDTHS = ["w-full", "w-[96%]", "w-full", "w-[90%]"];

export function PortfolioContentSkeleton() {
    return (
        <>
            {PORTFOLIO_PARAGRAPH_WIDTHS.map((width, index) => (
                <div key={`p-${index}`} className='detail-content-skeleton__paragraph'>
                    <SkeletonBlock tone='light' className={`h-5 ${width}`} />
                </div>
            ))}

            <ul className='detail-content-skeleton__list'>
                {Array.from({ length: 5 }).map((_, index) => (
                    <li key={`li-${index}`}>
                        <SkeletonBlock tone='light' className='h-5 w-full max-w-2xl' />
                    </li>
                ))}
            </ul>
        </>
    );
}
