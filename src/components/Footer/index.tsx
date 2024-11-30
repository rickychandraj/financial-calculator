import { Youtube, Instagram, Music } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="w-full max-w-3xl mx-auto px-8 py-12 border-t border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                    <p className="text-sm text-gray-600">
                        © 2021 - 2024 Ayu Sara Herlia. All Rights Reserved.
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                        Your Online Money Mom
                    </p>
                </div>
                <div className="flex gap-8">
                    {[Youtube, Instagram, Music].map((Icon, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
                                <Icon className="w-6 h-6 text-gray-600 transform transition-all duration-300 group-hover:scale-110 group-hover:text-gray-900" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}