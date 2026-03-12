import React from 'react'
import Container from '../components/Container'
import { motion } from 'framer-motion'

export default function AISection() {
    return (
        <section id="ai" className="py-16 bg-emerald-50">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-2xl font-bold">AI Powered Agriculture</h3>
                        <p className="text-slate-600 mt-2">Crop disease detection, smart price forecasting, demand prediction and personalized crop recommendations.</p>
                        <ul className="mt-4 grid grid-cols-1 gap-2 text-slate-700">
                            <li>• Crop disease detection (image upload)</li>
                            <li>• Smart price forecasting</li>
                            <li>• Demand prediction</li>
                            <li>• Crop recommendation engine</li>
                        </ul>
                    </div>
                    <div>
                        <motion.div initial={{ scale: 0.98, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} className="p-6 bg-white rounded-xl shadow-md border">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-emerald-100 rounded"> <h4 className="font-semibold">Accuracy</h4><p className="text-sm">&gt; 95% model accuracy</p></div>
                                <div className="p-4 bg-emerald-100 rounded"> <h4 className="font-semibold">Forecasting</h4><p className="text-sm">Price & demand windows</p></div>
                                <div className="p-4 bg-emerald-100 rounded"> <h4 className="font-semibold">Recommendations</h4><p className="text-sm">Crop & input suggestions</p></div>
                                <div className="p-4 bg-emerald-100 rounded"> <h4 className="font-semibold">Traceability</h4><p className="text-sm">Image-based audits</p></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
