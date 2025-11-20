"use client";
import { useMemo, useState, useCallback } from "react";
interface SocialIconsProps {
    className?: string;
    showLabel?: boolean;
    labelText?: string;
    shareUrl?: string;
    shareText?: string;
    showIcons?: {
        facebook?: boolean;
        instagram?: boolean;
        line?: boolean;
        link?: boolean;
    };
}

// SVG Icons Components
const FacebookIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' width='8' height='14' viewBox='0 0 8 14' fill='none'>
        <g clip-path='url(#clip0_0_2503)'>
            <path
                d='M2.13785 13.8719V7.56577H0V5.07552H2.13785C2.19155 3.75881 1.89621 2.33581 2.71175 1.19585C3.47582 0.1286 4.72989 -0.0548675 5.96942 0.0122549L7.2 0.0950393V2.31455H5.75239C5.64723 2.31455 5.37874 2.36601 5.27247 2.40293C4.94245 2.51704 4.68291 2.8672 4.68291 3.22071V5.07441H7.11945L6.79503 7.56465H4.68403V13.8708H2.14009L2.13785 13.8719Z'
                fill='white'
            />
        </g>
        <defs>
            <clipPath id='clip0_0_2503'>
                <rect width='7.2' height='13.872' fill='white' />
            </clipPath>
        </defs>
    </svg>
);

const InstagramIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10' fill='none'>
        <g clip-path='url(#clip0_0_2472)'>
            <path
                d='M3.60162 0.028405C4.86575 -0.00871448 6.2433 -0.018613 7.5 0.055626C9.06892 0.148425 9.85214 0.937833 9.94824 2.50469C10.0208 3.68715 10.0192 5.02304 9.98948 6.21293C9.9404 8.18191 9.90452 9.79043 7.5 9.93808C6.30516 10.0115 4.95484 10.0107 3.75217 9.97932C1.79927 9.92859 0.211375 9.87374 0.0699084 7.4886C-0.0233028 5.9168 -0.0233028 4.07608 0.0699084 2.50428C0.208488 0.173171 1.671 0.0844968 3.60162 0.028405ZM8.08401 1.05538C7.32719 1.17664 7.33791 2.38467 8.11907 2.48242C9.24379 2.62347 9.20956 0.87473 8.08401 1.05538ZM4.589 1.92191C3.40943 2.04235 2.34039 3.00374 2.02652 4.133C1.30104 6.74085 3.97406 8.97503 6.40291 7.77071C9.42444 6.27232 8.18465 1.55484 4.589 1.92191Z'
                fill='white'
            />
            <path
                d='M4.7113 2.99039C7.47423 2.63569 7.84914 6.75596 5.23056 7.00878C2.54558 7.26779 2.21192 3.31085 4.7113 2.99039Z'
                fill='white'
            />
        </g>
        <defs>
            <clipPath id='clip0_0_2472'>
                <rect width='10.0087' height='10' fill='white' />
            </clipPath>
        </defs>
    </svg>
);

const LineIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' width='12' height='11' viewBox='0 0 12 11' fill='none'>
        <g clip-path='url(#clip0_0_2483)'>
            <path
                d='M11.4852 4.35869V5.00893C11.341 7.00131 9.36774 8.554 7.85832 9.62327C7.28836 10.027 6.42682 10.6428 5.79572 10.9022C5.61113 10.978 5.25213 11.119 5.22665 10.8043C5.20808 10.5763 5.32764 10.225 5.34023 9.9761C5.36061 9.56816 5.28689 9.45015 4.89522 9.34232C4.22457 9.15782 3.68427 9.11918 3.01362 8.82416C-0.560793 7.2532 -1.14634 3.06448 2.29023 0.941517C4.43494 -0.383539 7.46186 -0.308361 9.51817 1.15687C10.5433 1.88739 11.3875 3.06897 11.4852 4.35869ZM2.64713 5.61426V3.54041C2.64713 3.51675 2.56352 3.40503 2.53416 3.38436C2.36245 3.26396 2.12631 3.34393 2.06908 3.5455L2.07387 6.04136C2.12511 6.13092 2.19553 6.2025 2.30132 6.21748C2.48711 6.24384 3.40289 6.24893 3.5728 6.21448C3.81313 6.16566 3.86977 5.82272 3.66779 5.68135C3.63303 5.65709 3.52216 5.61426 3.48829 5.61426H2.64713ZM4.32406 3.33225C4.1952 3.35082 4.09781 3.45595 4.08223 3.58474C4.13827 4.33982 4.00971 5.19793 4.08163 5.94043C4.11609 6.29625 4.57968 6.31991 4.66448 5.98266C4.61174 5.22159 4.7397 4.35479 4.66718 3.6066C4.6492 3.4224 4.51105 3.30529 4.32406 3.33225ZM5.69773 6.00662V4.51563L6.90808 6.1423C7.15351 6.32321 7.39953 6.19202 7.4259 5.8955C7.49153 5.16498 7.37945 4.33173 7.41961 3.59073C7.36387 3.32566 7.04083 3.21993 6.87691 3.46344C6.86673 3.47871 6.81938 3.55718 6.81938 3.56287V5.0314L5.62251 3.4251C5.44151 3.24539 5.15324 3.32955 5.11428 3.58474L5.11638 5.98266C5.16522 6.29985 5.64289 6.28247 5.69803 6.00662H5.69773ZM8.43428 3.93278H9.32039C9.35485 3.93278 9.46063 3.86539 9.4888 3.83214C9.63744 3.65752 9.54784 3.37208 9.315 3.33285C9.1319 3.302 8.24879 3.3002 8.06929 3.33285C7.93503 3.35711 7.83944 3.47572 7.82865 3.6078C7.8781 4.353 7.76273 5.18295 7.82775 5.91796C7.84184 6.07761 7.91735 6.19981 8.08607 6.22017C8.34947 6.25192 9.00604 6.24593 9.27634 6.22047C9.4885 6.20041 9.59908 6.04376 9.55113 5.832C9.52446 5.71489 9.36564 5.61426 9.25296 5.61426H8.43428V5.07633H9.34286C9.36864 5.07633 9.47592 4.99306 9.49839 4.96281C9.5805 4.85289 9.5826 4.67527 9.4888 4.57164C9.46693 4.54738 9.34376 4.47101 9.32039 4.47101H8.43428V3.93308V3.93278Z'
                fill='white'
            />
        </g>
        <defs>
            <clipPath id='clip0_0_2483'>
                <rect width='11.4853' height='11' fill='white' />
            </clipPath>
        </defs>
    </svg>
);

const LinkIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'>
        <g clip-path='url(#clip0_0_2492)'>
            <path
                d='M11.9992 2.57818V3.02348C11.9288 3.60998 11.7178 4.14833 11.3424 4.60479C10.3657 5.48747 9.48235 6.5953 8.49656 7.45391C7.4462 8.36917 5.70559 8.38473 4.71099 7.37172C3.98816 6.63552 4.86595 5.56702 5.72701 6.14471C5.8444 6.22338 5.94272 6.33933 6.07331 6.40773C6.56342 6.66399 7.08288 6.56213 7.48905 6.21164C8.38621 5.43786 9.18711 4.41692 10.0784 3.62172C11.0073 2.5224 9.70862 1.05851 8.51006 1.81849L6.77531 3.50489C6.62622 3.55274 6.47127 3.44178 6.33392 3.40479C6.06392 3.33229 5.7992 3.28473 5.52011 3.25773C5.37601 3.24393 5.19376 3.30792 5.09955 3.16291C5.02237 3.04432 5.08018 2.96536 5.15649 2.87025C5.9119 2.1819 6.61243 1.32974 7.38281 0.667512C9.10992 -0.816931 11.8184 0.329938 11.9992 2.57788V2.57818Z'
                fill='white'
            />
            <path
                d='M3.04898 12.0003H2.58029C0.338126 11.8051 -0.822871 9.12387 0.670343 7.38287C1.52377 6.38776 2.66129 5.49921 3.54085 4.51173C4.57271 3.64608 6.13548 3.64138 7.1606 4.52436C8.02459 5.26848 7.27476 6.32847 6.41399 5.95068C6.24495 5.87641 6.12756 5.71438 5.97025 5.62132C5.50069 5.34363 4.94367 5.42083 4.53632 5.76516C3.61187 6.54657 2.78162 7.6268 1.86773 8.43962C0.994048 9.627 2.44735 11.0266 3.59895 10.1011L5.22687 8.49481C5.35366 8.454 5.58462 8.57847 5.72021 8.6134C5.96262 8.67592 6.20885 8.7179 6.4586 8.74226C6.6024 8.75606 6.81224 8.68972 6.90175 8.83796C6.95634 8.92896 6.94929 9.01261 6.86917 9.08277C5.70407 10.0438 4.68159 11.8664 3.04927 12.0003H3.04898Z'
                fill='white'
            />
        </g>
        <defs>
            <clipPath id='clip0_0_2492'>
                <rect width='12' height='12' fill='white' />
            </clipPath>
        </defs>
    </svg>
);

export default function SocialIcons({
    className = "",
    showLabel = true,
    labelText = "Share",
    shareUrl = typeof window !== "undefined" ? window.location.href : "",
    shareText = "",
    showIcons = {
        facebook: true,
        instagram: true,
        line: true,
        link: true,
    },
}: SocialIconsProps) {
    const [copied, setCopied] = useState(false);

    const handleInstagramClick = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        // Open Instagram in new tab (you can customize this to your Instagram account URL)
        window.open("https://www.instagram.com/passionmarine/", "_blank", "noopener,noreferrer");
    }, []);

    const handleLineClick = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        const url = encodeURIComponent(shareUrl);
        const text = shareText ? encodeURIComponent(shareText) : "";
        const lineShareUrl = `https://social-plugins.line.me/lineit/share?url=${url}${text ? `&text=${text}` : ""}`;
        window.open(lineShareUrl, "_blank", "width=600,height=600");
    }, [shareUrl, shareText]);

    const handleLinkClick = useCallback(async (e: React.MouseEvent) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement("textarea");
            textArea.value = shareUrl;
            textArea.style.position = "fixed";
            textArea.style.opacity = "0";
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand("copy");
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (fallbackErr) {
                console.error("Failed to copy URL", fallbackErr);
            }
            document.body.removeChild(textArea);
        }
    }, [shareUrl]);

    const socialLinks = useMemo(() => {
        const allSocialLinks = [
            {
                name: "Facebook",
                href: "#",
                icon: <FacebookIcon />,
                alt: "Facebook",
                key: "facebook",
                onClick: undefined,
            },
            {
                name: "Instagram",
                href: "#",
                icon: <InstagramIcon />,
                alt: "Instagram",
                key: "instagram",
                onClick: handleInstagramClick,
            },
            {
                name: "Line",
                href: "#",
                icon: <LineIcon />,
                alt: "Line",
                key: "line",
                onClick: handleLineClick,
            },
            {
                name: "Link",
                href: "#",
                icon: <LinkIcon />,
                alt: copied ? "Copied!" : "Copy Link",
                key: "link",
                onClick: handleLinkClick,
            },
        ];

        return allSocialLinks.filter(social => {
            switch (social.key) {
                case "facebook":
                    return showIcons.facebook;
                case "instagram":
                    return showIcons.instagram;
                case "line":
                    return showIcons.line;
                case "link":
                    return showIcons.link;
                default:
                    return true;
            }
        });
    }, [showIcons, handleInstagramClick, handleLineClick, handleLinkClick, copied]);

    return (
        <div className={`social-icons ${className}`}>
            {showLabel && <span className='social-icons__label'>{labelText}</span>}
            <div className='social-icons__container'>
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        className='social-icons__item'
                        aria-label={social.alt}
                        onClick={social.onClick}>
                        {social.icon}
                    </a>
                ))}
            </div>
        </div>
    );
}
