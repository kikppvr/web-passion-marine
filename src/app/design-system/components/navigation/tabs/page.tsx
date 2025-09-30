'use client';

import React from 'react';
import { Tabs, TabItem } from '@/components/ui/navigation/Tabs';
import { PrimaryButton } from '@/components/ui/button/PrimaryButton';

const TabsPage: React.FC = () => {
    // Sample tab content
    const sampleContent1 = (
        <div style={{ padding: '20px' }}>
            <h3>Tab Content 1</h3>
            <p>This is the content for the first tab. You can put any React component here.</p>
            <PrimaryButton>Action Button</PrimaryButton>
        </div>
    );

    const sampleContent2 = (
        <div style={{ padding: '20px' }}>
            <h3>Tab Content 2</h3>
            <p>This is the content for the second tab. It can contain forms, lists, or any other content.</p>
            <ul>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
            </ul>
        </div>
    );

    const sampleContent3 = (
        <div style={{ padding: '20px' }}>
            <h3>Tab Content 3</h3>
            <p>This is the content for the third tab. It's currently disabled.</p>
        </div>
    );

    const sampleContent4 = (
        <div style={{ padding: '20px' }}>
            <h3>Tab Content 4</h3>
            <p>This is the content for the fourth tab.</p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <PrimaryButton>Save</PrimaryButton>
                <PrimaryButton theme="secondary">Cancel</PrimaryButton>
            </div>
        </div>
    );

    const tabItems: TabItem[] = [
        {
            id: 'tab1',
            label: 'Overview',
            content: sampleContent1,
        },
        {
            id: 'tab2',
            label: 'Details',
            content: sampleContent2,
        },
        {
            id: 'tab3',
            label: 'Settings',
            content: sampleContent3,
            disabled: true,
        },
        {
            id: 'tab4',
            label: 'Advanced',
            content: sampleContent4,
        },
    ];

    const handleTabChange = (tabId: string) => {
        console.log('Tab changed to:', tabId);
    };

    return (
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Tabs Component</h1>
            <p>Interactive tabs component with multiple variants and sizes.</p>

            {/* Default Tabs */}
            <section style={{ marginBottom: '40px' }}>
                <h2>Default Tabs</h2>
                <Tabs
                    items={tabItems}
                    defaultActiveTab="tab1"
                    onTabChange={handleTabChange}
                />
            </section>

            {/* Underline Variant */}
            <section style={{ marginBottom: '40px' }}>
                <h2>Underline Variant</h2>
                <Tabs
                    items={tabItems}
                    variant="underline"
                    defaultActiveTab="tab2"
                />
            </section>

            {/* Pills Variant */}
            <section style={{ marginBottom: '40px' }}>
                <h2>Pills Variant</h2>
                <Tabs
                    items={tabItems}
                    variant="pills"
                    defaultActiveTab="tab1"
                />
            </section>

            {/* Small Size */}
            <section style={{ marginBottom: '40px' }}>
                <h2>Small Size</h2>
                <Tabs
                    items={tabItems.slice(0, 3)}
                    size="sm"
                    defaultActiveTab="tab1"
                />
            </section>

            {/* Large Size */}
            <section style={{ marginBottom: '40px' }}>
                <h2>Large Size</h2>
                <Tabs
                    items={tabItems.slice(0, 3)}
                    size="lg"
                    defaultActiveTab="tab1"
                />
            </section>

            {/* Props Documentation */}
            <section style={{ marginTop: '60px' }}>
                <h2>Props</h2>
                <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
                    <h3>TabsProps</h3>
                    <ul>
                        <li><strong>items</strong>: TabItem[] - Array of tab items</li>
                        <li><strong>defaultActiveTab</strong>: string - ID of the initially active tab</li>
                        <li><strong>className</strong>: string - Additional CSS classes</li>
                        <li><strong>variant</strong>: 'default' | 'underline' | 'pills' - Visual variant</li>
                        <li><strong>size</strong>: 'sm' | 'md' | 'lg' - Size variant</li>
                        <li><strong>onTabChange</strong>: (tabId: string) => void - Callback when tab changes</li>
                    </ul>

                    <h3>TabItem</h3>
                    <ul>
                        <li><strong>id</strong>: string - Unique identifier</li>
                        <li><strong>label</strong>: string - Display text</li>
                        <li><strong>content</strong>: React.ReactNode - Tab content</li>
                        <li><strong>disabled</strong>: boolean - Whether tab is disabled</li>
                    </ul>
                </div>
            </section>

            {/* Usage Example */}
            <section style={{ marginTop: '40px' }}>
                <h2>Usage Example</h2>
                <pre style={{ 
                    backgroundColor: '#f5f5f5', 
                    padding: '20px', 
                    borderRadius: '8px',
                    overflow: 'auto'
                }}>
{`import { Tabs, TabItem } from '@/components/ui/navigation/Tabs';

const tabItems: TabItem[] = [
    {
        id: 'tab1',
        label: 'Overview',
        content: <div>Content 1</div>,
    },
    {
        id: 'tab2',
        label: 'Details',
        content: <div>Content 2</div>,
    },
];

<Tabs
    items={tabItems}
    defaultActiveTab="tab1"
    variant="underline"
    size="md"
    onTabChange={(tabId) => console.log(tabId)}
/>`}
                </pre>
            </section>
        </div>
    );
};

export default TabsPage;
