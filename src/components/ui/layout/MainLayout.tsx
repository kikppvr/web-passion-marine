import React from "react";
import { Header, Footer } from "../layout";
import { Banner, BannerProps } from "./Banner";

interface MainLayoutProps {
    children: React.ReactNode;
    bannerType?: "full" | "half" | "large";
    bannerProps?: BannerProps;
    headerTheme?: "white" | "transparent";
    className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
    children,
    bannerType = "full",
    bannerProps,
    headerTheme = "transparent",
    className = "",
}) => {
    return (
        <div className={`main-layout ${className}`}>
            <Header theme={headerTheme} />

            {/* Banner Section */}
            {bannerProps && (
                <div>
                    <Banner {...bannerProps} className={`banner banner--${bannerType}`} />
                </div>
            )}

            {/* Main Content */}
            <main>{children}</main>

            <Footer />
        </div>
    );
};

export default MainLayout;
