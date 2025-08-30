import Link from "next/link";
import { Youtube, Instagram, Globe } from 'lucide-react';

const footerItems = [
    {
        id: 1,
        icon: <Youtube className="w-6 h-6 text-gray-600 transform transition-all duration-300 group-hover:scale-110 group-hover:text-gray-900"/>,
        href: "https://www.youtube.com/@MamaBerUANG.",
    },
    {
        id: 2,
        icon: <Instagram className="w-6 h-6 text-gray-600 transform transition-all duration-300 group-hover:scale-110 group-hover:text-gray-900"/>,
        href: "https://www.instagram.com/mamaber.uang",
    },
    {
        id: 3,
        icon: <Globe className="w-6 h-6 text-gray-600 transform transition-all duration-300 group-hover:scale-110 group-hover:text-gray-900"/>,
        href: "https://www.mamaberuang.com",
    },

]

export const Footer = () => {
    return (
        <footer className="w-full max-w-3xl mx-auto px-8 py-12 border-t border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                    <p className="text-sm text-gray-600">
                        © 2021 - 2025 Ayu Sara Herlia. All Rights Reserved.
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                        Your Online Money Mom
                    </p>
                </div>
                <div className="flex gap-8">
                    {footerItems.map((item, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
                                <Link
                                  key={item.id}
                                  href={item.href}
                                >
                                    {item.icon}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}