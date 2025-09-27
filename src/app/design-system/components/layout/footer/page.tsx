"use client";

import { Footer } from "@/components/ui/layout";
import { useState } from "react";

export default function FooterPage() {
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const copyToClipboard = async (text: string, codeId: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedCode(codeId);
            setTimeout(() => setCopiedCode(null), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    const basicUsageCode = `<Footer />`;

    const propsCode = `interface FooterProps {
    className?: string;
}`;

    return (
        <div className='min-h-screen bg-gray-50'>
            {/* Live Preview */}
            <div className='mx-auto'>
                <Footer />
            </div>
        </div>
    );
}
