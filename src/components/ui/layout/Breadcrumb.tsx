import React from "react";
import Link from "next/link";

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = "" }) => {
    return (
        <nav className={`breadcrumb ${className}`} aria-label='Breadcrumb'>
            <ol className='breadcrumb__list'>
                {items.map((item, index) => (
                    <li key={index} className='breadcrumb__item'>
                        {index > 0 && <span className='breadcrumb__separator'>/</span>}
                        {item.href ? (
                            <Link href={item.href} className='breadcrumb__link'>
                                {item.label}
                            </Link>
                        ) : (
                            <span className='breadcrumb__current'>{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};
