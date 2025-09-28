"use client";

import { CharterCard } from "@/components/ui/cards/CharterCard";

export default function CharterCardPage() {
    const charterData = [
        {
            title: "Speedboats from XXXXX",
            location: "Maharaj Road, Phrankorn District, Bangkok",
            image: "/images/charter/charter-01.webp",
            price: 36500,
            passengers: "5-6",
            passengerUnit: "Passenger",
            restrooms: "1",
            restroomUnit: "Restroom",
            href: "/comingsoon",
        },
        {
            title: "Catamarans from XXXXX",
            location: "Marina Bay, Phuket",
            image: "/images/charter/charter-02.webp",
            price: 150000,
            passengers: "10-12",
            passengerUnit: "Passenger",
            restrooms: "2",
            restroomUnit: "Restroom",
            href: "/comingsoon",
        },
        {
            title: "Small yacht from XXXXX",
            location: "Pattaya Beach, Chonburi",
            image: "/images/charter/charter-03.webp",
            price: 80000,
            passengers: "6-8",
            passengerUnit: "Passenger",
            restrooms: "1",
            restroomUnit: "Restroom",
            href: "/comingsoon",
        },
    ];

    return (
        <div className='min-h-screen bg-gray-50 py-16'>
            <div className='mx-auto max-w-7xl px-6'>
                <div className='mb-16 text-center'>
                    <h1 className='mb-4 text-4xl font-bold text-gray-900'>
                        Charter Card Component
                    </h1>
                    <p className='mx-auto max-w-2xl text-xl leading-relaxed text-gray-600'>
                        A modern card component for displaying boat charter services with pricing,
                        passenger capacity, and booking options.
                    </p>
                </div>

                <div className='mb-16'>
                    <h2 className='mb-8 text-center text-3xl font-bold text-gray-900'>
                        Default Cards
                    </h2>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                        {charterData.map((charter, index) => (
                            <CharterCard
                                key={index}
                                title={charter.title}
                                location={charter.location}
                                image={charter.image}
                                price={charter.price}
                                passengers={charter.passengers}
                                passengerUnit={charter.passengerUnit}
                                restrooms={charter.restrooms}
                                restroomUnit={charter.restroomUnit}
                                href={charter.href}
                                variant='default'
                            />
                        ))}
                    </div>
                </div>

                <div className='mb-16'>
                    <h2 className='mb-8 text-center text-3xl font-bold text-gray-900'>
                        Props Documentation
                    </h2>
                    <div className='overflow-x-auto rounded-xl bg-white p-8 shadow-lg'>
                        <table className='w-full border-collapse'>
                            <thead>
                                <tr className='bg-gray-50'>
                                    <th className='border-b border-gray-200 px-6 py-4 text-left text-sm font-semibold text-gray-900'>
                                        Prop
                                    </th>
                                    <th className='border-b border-gray-200 px-6 py-4 text-left text-sm font-semibold text-gray-900'>
                                        Type
                                    </th>
                                    <th className='border-b border-gray-200 px-6 py-4 text-left text-sm font-semibold text-gray-900'>
                                        Default
                                    </th>
                                    <th className='border-b border-gray-200 px-6 py-4 text-left text-sm font-semibold text-gray-900'>
                                        Description
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='transition-colors hover:bg-gray-50'>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            title
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            string
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        -
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        Card title
                                    </td>
                                </tr>
                                <tr className='transition-colors hover:bg-gray-50'>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            location
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            string
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        -
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        Location address
                                    </td>
                                </tr>
                                <tr className='transition-colors hover:bg-gray-50'>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            image
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            string
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        -
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        Image URL
                                    </td>
                                </tr>
                                <tr className='transition-colors hover:bg-gray-50'>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            price
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            number
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        -
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        Price in Baht
                                    </td>
                                </tr>
                                <tr className='transition-colors hover:bg-gray-50'>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            passengers
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            string
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        -
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        Passenger capacity
                                    </td>
                                </tr>
                                <tr className='transition-colors hover:bg-gray-50'>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            restrooms
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            string
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        -
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        Restroom count
                                    </td>
                                </tr>
                                <tr className='transition-colors hover:bg-gray-50'>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            href
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            string
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        -
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        Link URL
                                    </td>
                                </tr>
                                <tr className='transition-colors hover:bg-gray-50'>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            variant
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            &apos;default&apos; | &apos;featured&apos;
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            &apos;default&apos;
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        Card variant
                                    </td>
                                </tr>
                                <tr className='transition-colors hover:bg-gray-50'>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            className
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            string
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        -
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        Additional CSS classes
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
