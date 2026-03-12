import React from 'react'
import { motion } from 'framer-motion'
import Container from '../components/Container'
import Button from '../components/Button'
import Illustration from '../assets/illustration.svg'

export default function Hero() {
    return (
        <section className="py-16 bg-gradient-to-b from-emerald-50 to-white">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div>
                        <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl sm:text-4xl font-extrabold">
                            Empowering Farmers. Strengthening Rural Businesses. Delivering Healthy Food.
                        </motion.h1>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mt-4 text-slate-600 max-w-xl">
                            An integrated digital ecosystem connecting Farmers, Franchises, Small Businesses, Customers, and Central Operations.
                        </motion.p>
                        <div className="mt-6 flex gap-3">
                            <Button>Explore Ecosystem</Button>
                            <Button variant="ghost">Join Platform</Button>
                        </div>
                    </div>
                    <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} className="w-full">
                        <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-6 rounded-2xl shadow-lg flex items-center justify-center">
                            <img src={Illustration} alt="illustration" className="w-full h-auto max-h-72 object-contain" />
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
