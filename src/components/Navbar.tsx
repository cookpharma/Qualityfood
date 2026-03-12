import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, LogIn, UserCheck } from 'lucide-react'

export default function Navbar() {
    return (
        <header className="sticky top-0 z-40 glass border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-6">
                        <Link to="/" className="text-lg font-extrabold text-emerald-600">COOK FARM</Link>
                        <nav className="hidden md:flex gap-4 text-sm text-slate-700">
                            <a href="#home" className="hover:underline">Home</a>
                            <a href="#ecosystem" className="hover:underline">Ecosystem</a>
                            <a href="#ai" className="hover:underline">AI System</a>
                            <a href="#marketplace" className="hover:underline">Marketplace</a>
                            <a href="#about" className="hover:underline">About</a>
                            <a href="#contact" className="hover:underline">Contact</a>
                        </nav>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-slate-700 hover:bg-slate-100">
                            <LogIn size={16} /> Login
                        </button>
                        <button className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-md shadow hover:scale-[1.01] transition">
                            Get Started
                        </button>
                        <button className="md:hidden p-2 rounded-md">
                            <Menu />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
