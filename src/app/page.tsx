export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="mx-auto max-w-4xl">
                <h1 className="mb-8 text-center text-4xl font-bold text-blue-600">
                    Web Passion Marine
                </h1>

                <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
                    <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                        Font Test - ทดสอบฟอนต์
                    </h2>
                    <div className="space-y-4">
                        <p className="text-lg text-gray-700">
                            Noto Sans Thai: บริการทางทะเลมืออาชีพ
                        </p>
                        <p className="text-lg text-gray-700">
                            English: Professional Marine Services
                        </p>
                        <p className="text-sm text-gray-500">
                            Fallback fonts: Sarabun, Kanit, system-ui,
                            sans-serif
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-lg bg-white p-6 shadow-md">
                        <h2 className="mb-4 text-2xl font-semibold text-blue-600">
                            บริการทางทะเลมืออาชีพ
                        </h2>
                        <p className="leading-relaxed text-gray-700">
                            ให้บริการทางทะเลครบวงจร รับรองคุณภาพและความปลอดภัย
                            ด้วยทีมงานผู้เชี่ยวชาญและอุปกรณ์ที่ทันสมัย
                        </p>
                    </div>

                    <div className="rounded-lg bg-blue-50 p-6">
                        <h2 className="mb-4 text-2xl font-semibold text-blue-800">
                            Professional Marine Services
                        </h2>
                        <p className="leading-relaxed text-gray-700">
                            Comprehensive marine services with guaranteed
                            quality and safety by expert team and modern
                            equipment
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
