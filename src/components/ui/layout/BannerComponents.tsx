import React from "react";

interface BannerFullProps {
    children: React.ReactNode;
    className?: string;
    backgroundImage?: string;
    overlay?: boolean;
}

export const BannerFull: React.FC<BannerFullProps> = ({
    children,
    className = "",
    backgroundImage,
    overlay = true,
}) => {
    const style = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {};

    return (
        <div className={`banner-full ${className}`} style={style}>
            {overlay && <div className='banner-full__overlay' />}
            <div className='banner-full__content'>{children}</div>
        </div>
    );
};

interface BannerHalfProps {
    children: React.ReactNode;
    className?: string;
    backgroundImage?: string;
    overlay?: boolean;
}

export const BannerHalf: React.FC<BannerHalfProps> = ({
    children,
    className = "",
    backgroundImage,
    overlay = true,
}) => {
    const style = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {};

    return (
        <div className={`banner-half ${className}`} style={style}>
            {overlay && <div className='banner-half__overlay' />}
            <div className='banner-half__content'>{children}</div>
        </div>
    );
};
