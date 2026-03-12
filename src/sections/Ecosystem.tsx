import React from 'react'
import Container from '../components/Container'
import FeatureCard from '../components/FeatureCard'
import { FEATURES } from '../constants/features'
import { motion } from 'framer-motion'

export default function Ecosystem() {
    return (
        <section id="ecosystem" className="py-16">
            <Container>
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold">Ecosystem Overview</h2>
                    <p className="text-slate-600 mt-2">A unified platform connecting every stakeholder in the food value chain.</p>
                </div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FEATURES.map(f => (
                        <FeatureCard key={f.id} icon={f.icon} title={f.title}>{f.desc}</FeatureCard>
                    ))}
                </motion.div>
            </Container>
        </section>
    )
}
