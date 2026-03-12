import React from 'react'
import { motion } from 'framer-motion'

type FeatureCardProps = {
    icon: React.ElementType
    title: string
    children: React.ReactNode
}

export default function FeatureCard({ icon, title, children }: FeatureCardProps) {
    const Icon = icon
    return (
        <motion.article whileHover={{ y: -6 }} className="p-5 bg-white rounded-xl shadow-md border">
            <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-emerald-50 text-emerald-600"><Icon /></div>
                <div>
                    <h4 className="font-semibold">{title}</h4>
                    <p className="text-sm text-slate-600 mt-1">{children}</p>
                </div>
            </div>
        </motion.article>
    )
}
