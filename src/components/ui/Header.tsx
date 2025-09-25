'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Image from 'next/image';

export interface HeaderProps {
    className?: string;
    theme?: 'white' | 'transparent';
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

const Header = ({ className, theme = 'white' }: HeaderProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

    // Navigation items
    const navItems: NavItem[] = [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'About Us',
            href: '/about',
        },
        {
            label: 'Our Services',
            href: '/services',
            hasDropdown: true,
            dropdownItems: [
                { label: 'Marine Services', href: '/services/marine' },
                { label: 'Boat Maintenance', href: '/services/maintenance' },
                { label: 'Emergency Services', href: '/services/emergency' },
            ],
        },
        {
            label: 'Charter',
            href: '/charter',
        },
        {
            label: 'Portfolio',
            href: '/portfolio',
        },
        {
            label: 'News and Activities',
            href: '/news',
        },
        {
            label: 'Contact Us',
            href: '/contact',
        },
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle mobile menu toggle
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setActiveMobileDropdown(null);
    };

    // Handle dropdown toggle
    const toggleDropdown = (itemLabel: string) => {
        setActiveDropdown(activeDropdown === itemLabel ? null : itemLabel);
    };

    // Handle mobile dropdown toggle
    const toggleMobileDropdown = (itemLabel: string) => {
        setActiveMobileDropdown(activeMobileDropdown === itemLabel ? null : itemLabel);
    };

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (isMobileMenuOpen && !target.closest('.header__mobile-content')) {
                setIsMobileMenuOpen(false);
                setActiveMobileDropdown(null);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobileMenuOpen]);

    return (
        <header
            className={cn(
                'header',
                `header--${theme}`,
                isScrolled && 'header--scrolled',
                className
            )}>
            <div className='header__container'>
                {/* Language Switcher & Action Buttons */}
                <div className='header__actions'>
                    <button className='header__language'>
                        <span className='header__language-text'>EN</span>
                        <i className='ph ph-caret-down header__language-arrow'></i>
                    </button>
                </div>

                {/* Logo */}
                <Link href='/' className='header__logo'>
                    <Image
                        src='/images/logo/logo-passion-marine.svg'
                        alt='Logo'
                        width={158}
                        height={44}
                    />
                     
                </Link>

                {/* Hamburger Menu Button */}
                <button
                    className={cn(
                        'header__hamburger',
                        isMobileMenuOpen && 'header__hamburger--active'
                    )}
                    onClick={toggleMobileMenu}
                    aria-label='Toggle mobile menu'>
                    <span className='header__hamburger-line'></span>
                    <span className='header__hamburger-line'></span>
                    <span className='header__hamburger-line'></span>
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
                                                'header__dropdown',
                                                activeDropdown === item.label &&
                                                    'header__dropdown--show'
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
        </header>
    );
};

export { Header };
