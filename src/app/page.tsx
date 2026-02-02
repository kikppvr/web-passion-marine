import type { Metadata } from "next";
import { generateMetadata as createMetadata } from "@/lib/metadata";
import HomePage from "./home/page";

export const metadata: Metadata = createMetadata();

export default function Home() {
    return <HomePage />;
}
