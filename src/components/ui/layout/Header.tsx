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
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState<"EN" | "TH">("EN");

    // Navigation items
    const navItems: NavItem[] = [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "About Us",
            href: "/about",
        },
        {
            label: "Our Services",
            href: "/services",
            hasDropdown: true,
            dropdownItems: [
                { label: "Marine Services", href: "/services/marine" },
                { label: "Boat Maintenance", href: "/services/maintenance" },
                { label: "Emergency Services", href: "/services/emergency" },
            ],
        },
        {
            label: "Charter",
            href: "/charter",
        },
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
            href: "/contact",
        },
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle dropdown toggle
    const toggleDropdown = (itemLabel: string) => {
        setActiveDropdown(activeDropdown === itemLabel ? null : itemLabel);
    };

    // Handle hamburger menu toggle
    const toggleHamburger = () => {
        setIsHamburgerOpen(!isHamburgerOpen);
    };

    // Handle language dropdown toggle
    const toggleLanguageDropdown = () => {
        setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    };

    // Handle language change
    const handleLanguageChange = (language: "EN" | "TH") => {
        setCurrentLanguage(language);
        setIsLanguageDropdownOpen(false);
        // Here you can add logic to change the actual language
        console.log("Language changed to:", language);
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
                `header--${isHamburgerOpen ? "white" : theme}`,
                isScrolled && "header--scrolled",
                className
            )}>
            <div className='header__container'>
                {/* Language Switcher & Action Buttons */}
                <div className='header__actions'>
                    <div className='header__language-container'>
                        <button className='header__language' onClick={toggleLanguageDropdown}>
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
                                onClick={() => handleLanguageChange("EN")}>
                                <span>EN</span>
                            </button>
                            <button
                                className={cn(
                                    "header__language-option",
                                    currentLanguage === "TH" && "header__language-option--active"
                                )}
                                onClick={() => handleLanguageChange("TH")}>
                                <span>TH</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Logo */}
                <Link href='/' className='header__logo'>
                    <Image
                        src={
                            isHamburgerOpen || theme === "white"
                                ? "/images/logo/logo-passion-marine.svg"
                                : "/images/logo/logo-passion-marine-white.svg"
                        }
                        alt='Logo'
                        width={158}
                        height={44}
                        className='logo-responsive'
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
                                            onMouseEnter={() => setActiveDropdown(item.label)}>
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
                                                onClick={() => toggleDropdown(item.label)}>
                                                <span className='header__menu-nav-text'>
                                                    {item.label}
                                                </span>
                                                <i
                                                    className={cn(
                                                        "ph ph-caret-down header__menu-nav-arrow",
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
