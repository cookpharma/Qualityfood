import React from 'react'
import { Github, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t mt-12">
            <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-bold text-emerald-600">COOK FARM</h3>
                        <p className="text-sm text-slate-600 mt-2">Integrated Digital Agriculture & Processing Ecosystem</p>
                    </div>
                    <div className="flex gap-6">
                        <div>
                            <h4 className="font-semibold">Quick Links</h4>
                            <ul className="text-sm text-slate-600 mt-2">
                                <li><a href="#ecosystem" className="hover:underline">Ecosystem</a></li>
                                <li><a href="#ai" className="hover:underline">AI System</a></li>
                                <li><a href="#marketplace" className="hover:underline">Marketplace</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold">Contact</h4>
                            <p className="text-sm text-slate-600 mt-2">contact@cookfarm.example</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t pt-4 flex items-center justify-between">
                    <p className="text-sm text-slate-500">© {new Date().getFullYear()} COOK FARM. All rights reserved.</p>
                    <div className="flex gap-3 text-slate-600">
                        <a aria-label="twitter" href="#" className="hover:text-emerald-600"><Twitter /></a>
                        <a aria-label="instagram" href="#" className="hover:text-emerald-600"><Instagram /></a>
                        <a aria-label="github" href="#" className="hover:text-emerald-600"><Github /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
