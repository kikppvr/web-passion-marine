import React, { useState } from "react";

export interface TabItem {
    id: string;
    label: string;
    content: React.ReactNode;
    disabled?: boolean;
}

export interface TabsProps {
    items: TabItem[];
    defaultActiveTab?: string;
    className?: string;
    variant?: "default" | "underline" | "pills";
    size?: "sm" | "md" | "lg";
    onTabChange?: (tabId: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({
    items,
    defaultActiveTab,
    className = "",
    variant = "default",
    size = "md",
    onTabChange,
}) => {
    const [activeTab, setActiveTab] = useState(defaultActiveTab || items[0]?.id || "");

    const handleTabClick = (tabId: string) => {
        if (onTabChange) {
            onTabChange(tabId);
        }
        setActiveTab(tabId);
    };

    const activeTabContent = items.find(item => item.id === activeTab)?.content;

    return (
        <div className={`tabs tabs--${variant} tabs--${size} ${className}`}>
            {/* Tab Navigation */}
            <div className='tabs__nav'>
                <ul className='tabs__nav-list' role='tablist'>
                    {items.map(item => (
                        <li key={item.id} className='tabs__nav-item'>
                            <button
                                className={`tabs__nav-button ${
                                    activeTab === item.id ? "tabs__nav-button--active" : ""
                                } ${item.disabled ? "tabs__nav-button--disabled" : ""}`}
                                onClick={() => !item.disabled && handleTabClick(item.id)}
                                role='tab'
                                aria-selected={activeTab === item.id}
                                aria-controls={`tab-panel-${item.id}`}
                                id={`tab-${item.id}`}
                                disabled={item.disabled}>
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tab Content */}
            <div className='tabs__content'>
                {items.map(item => (
                    <div
                        key={item.id}
                        className={`tabs__panel ${
                            activeTab === item.id ? "tabs__panel--active" : ""
                        }`}
                        role='tabpanel'
                        aria-labelledby={`tab-${item.id}`}
                        id={`tab-panel-${item.id}`}
                        hidden={activeTab !== item.id}>
                        {item.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
