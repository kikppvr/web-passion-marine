"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

import Image from "next/image";

export interface HeaderProps {
    className?: string;
    theme?: "white" | "transparent";
}

interface NavItem {
    label: string;
    href: string;
    hasDropdown?: boolean;
    dropdownItems?: Array<{
        label: string;
        href: string;
    }>;
}

const Header = ({ className, theme = "white" }: HeaderProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState<"EN" | "TH">("EN");
    const [isHovered, setIsHovered] = useState(false);

    // Navigation items
    const navItems: NavItem[] = [
        {
            label: "About Us",
            href: "/about-us",
        },
        {
            label: "Our Services",
            href: "/services",
            hasDropdown: true,
            dropdownItems: [
                { label: "Overview Services", href: "/services/overview-services" },
                { label: "Engineering Solutions", href: "/services/engineering-solutions" },
                { label: "Aesthetic Solutions", href: "/services/aesthetic-solutions" },
            ],
        },
        // {
        //     label: "Charter",
        //     href: "/charter",
        // },
        {
            label: "Portfolio",
            href: "/portfolio",
        },
        {
            label: "News and Activities",
            href: "/news",
        },
        {
            label: "Contact Us",
            href: "/contact-us",
        },
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Check if scrolled for background change
            setIsScrolled(currentScrollY > 20);

            // Handle header visibility based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down - hide header
                setIsHeaderVisible(false);
            } else {
                // Scrolling up - show header
                setIsHeaderVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Close menu when header is hidden
    useEffect(() => {
        if (!isHeaderVisible) {
            setIsHamburgerOpen(false);
            setActiveDropdown(null);
            setIsLanguageDropdownOpen(false);
        }
    }, [isHeaderVisible]);

    // Handle dropdown toggle
    const toggleDropdown = (itemLabel: string) => {
        setActiveDropdown(activeDropdown === itemLabel ? null : itemLabel);
    };

    // Handle hamburger menu toggle
    const toggleHamburger = () => {
        setIsHamburgerOpen(!isHamburgerOpen);
    };

    // Add/remove header-enable class to html element
    useEffect(() => {
        if (isHamburgerOpen) {
            document.documentElement.classList.add("header-enable");
        } else {
            document.documentElement.classList.remove("header-enable");
        }

        // Cleanup on unmount
        return () => {
            document.documentElement.classList.remove("header-enable");
        };
    }, [isHamburgerOpen]);

    // Handle language dropdown toggle
    const toggleLanguageDropdown = () => {
        setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    };

    // Handle language change
    const handleLanguageChange = (language: "EN" | "TH") => {
        setCurrentLanguage(language);
        setIsLanguageDropdownOpen(false);
        // Here you can add logic to change the actual language
    };

    // Close language dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element;
            if (isLanguageDropdownOpen && !target.closest(".header__language-container")) {
                setIsLanguageDropdownOpen(false);
            }
        };

        if (isLanguageDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isLanguageDropdownOpen]);

    // Close hamburger menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element;
            if (isHamburgerOpen && !target.closest(".header")) {
                setIsHamburgerOpen(false);
            }
        };

        if (isHamburgerOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isHamburgerOpen]);

    return (
        <header
            className={cn(
                "header",
                `header--${isHamburgerOpen || isScrolled || isHovered ? "white" : theme}`,
                {
                    "header--hidden": !isHeaderVisible,
                    "header--scrolled": isScrolled && theme === "white",
                },
                className
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className='header__container'>
                {/* Language Switcher & Action Buttons */}
                <div className='header__actions'>
                    <div className='header__language-container'>
                        <button
                            className='header__language'
                            onClick={toggleLanguageDropdown}
                            aria-label='Change language'
                            aria-expanded={isLanguageDropdownOpen}
                            aria-haspopup='listbox'>
                            <span className='header__language-text'>{currentLanguage}</span>
                            <i
                                className={cn(
                                    "ph ph-caret-down header__language-arrow",
                                    isLanguageDropdownOpen && "header__language-arrow--open"
                                )}></i>
                        </button>

                        {/* Language Dropdown */}
                        <div
                            className={cn(
                                "header__language-dropdown",
                                isLanguageDropdownOpen && "header__language-dropdown--open"
                            )}>
                            <button
                                className={cn(
                                    "header__language-option",
                                    currentLanguage === "EN" && "header__language-option--active"
                                )}
                                onClick={() => handleLanguageChange("EN")}
                                aria-label='English'>
                                <span>EN</span>
                            </button>
                            <button
                                className={cn(
                                    "header__language-option",
                                    currentLanguage === "TH" && "header__language-option--active"
                                )}
                                onClick={() => handleLanguageChange("TH")}
                                aria-label='ไทย'>
                                <span>TH</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Logo */}
                <Link href='/' className='header__logo'>
                    <Image
                        src={
                            isHamburgerOpen || isScrolled || isHovered || theme === "white"
                                ? "/images/logo/logo-passion-marine.svg"
                                : "/images/logo/logo-passion-marine-white.svg"
                        }
                        alt='Logo'
                        width={158}
                        height={44}
                        priority={true}
                        className='header__logo-responsive'
                    />
                </Link>

                {/* Hamburger Menu Button */}
                <button
                    className={cn(
                        "header__hamburger",
                        isHamburgerOpen && "header__hamburger--active"
                    )}
                    onClick={toggleHamburger}
                    aria-label='Toggle menu'>
                    <span className='header__hamburger-text'>Menu</span>
                    <div className='header__hamburger-lines'>
                        <span className='header__hamburger-line'></span>
                        <span className='header__hamburger-line'></span>
                    </div>
                </button>

                {/* Desktop Navigation */}
                <nav className='header__nav'>
                    <ul className='header__nav-list'>
                        {navItems.map(item => (
                            <li key={item.label} className='header__nav-item'>
                                {item.hasDropdown ? (
                                    <>
                                        <button
                                            className='header__nav-link'
                                            onClick={() => toggleDropdown(item.label)}
                                            onMouseEnter={() => setActiveDropdown(item.label)}
                                            aria-expanded={activeDropdown === item.label}
                                            aria-haspopup='true'
                                            aria-label={`${item.label} menu`}>
                                            {item.label}
                                            <i className='ph ph-caret-down header__nav-arrow'></i>
                                        </button>
                                        <div
                                            className={cn(
                                                "header__dropdown",
                                                activeDropdown === item.label &&
                                                    "header__dropdown--show"
                                            )}
                                            onMouseLeave={() => setActiveDropdown(null)}>
                                            {item.dropdownItems?.map(dropdownItem => (
                                                <div
                                                    key={dropdownItem.label}
                                                    className='header__dropdown-item'>
                                                    <Link
                                                        href={dropdownItem.href}
                                                        className='header__dropdown-link'>
                                                        {dropdownItem.label}
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link href={item.href} className='header__nav-link'>
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            {isHamburgerOpen && (
                <div className='header__menu-overlay' onClick={() => setIsHamburgerOpen(false)} />
            )}

            {/* Mobile Menu */}
            <div className={cn("header__menu", isHamburgerOpen && "header__menu--open")}>
                <div className='header__menu-content'>
                    {/* Menu Navigation */}
                    <nav className='header__menu-nav'>
                        <ul className='header__menu-nav-list'>
                            {navItems.map(item => (
                                <li key={item.label} className='header__menu-nav-item'>
                                    {item.hasDropdown ? (
                                        <>
                                            <button
                                                className='header__menu-nav-link'
                                                onClick={() => toggleDropdown(item.label)}
                                                aria-expanded={activeDropdown === item.label}
                                                aria-label={`${item.label} submenu`}>
                                                <span className='header__menu-nav-text'>
                                                    {item.label}
                                                </span>
                                                <i
                                                    className={cn(
                                                        "ph-light ph-caret-down header__menu-nav-arrow",
                                                        activeDropdown === item.label &&
                                                            "header__menu-nav-arrow--open"
                                                    )}></i>
                                            </button>
                                            <div
                                                className={cn(
                                                    "header__menu-dropdown",
                                                    activeDropdown === item.label &&
                                                        "header__menu-dropdown--open"
                                                )}>
                                                {item.dropdownItems?.map(dropdownItem => (
                                                    <Link
                                                        key={dropdownItem.label}
                                                        href={dropdownItem.href}
                                                        className='header__menu-dropdown-link'
                                                        onClick={() => setIsHamburgerOpen(false)}>
                                                        {dropdownItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className='header__menu-nav-link'
                                            onClick={() => setIsHamburgerOpen(false)}>
                                            <span className='header__menu-nav-text'>
                                                {item.label}
                                            </span>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export { Header };
