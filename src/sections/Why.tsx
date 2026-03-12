import React from 'react'
import Container from '../components/Container'

export default function Why() {
    return (
        <section className="py-16">
            <Container>
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold">Why COOK FARM?</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="p-6 bg-white rounded shadow">
                        <h4 className="font-semibold">Increases farmer income</h4>
                        <p className="text-sm text-slate-600 mt-2">Direct procurement and transparent pricing.</p>
                    </div>
                    <div className="p-6 bg-white rounded shadow">
                        <h4 className="font-semibold">Reduces middlemen</h4>
                        <p className="text-sm text-slate-600 mt-2">Efficient matching between supply and demand.</p>
                    </div>
                    <div className="p-6 bg-white rounded shadow">
                        <h4 className="font-semibold">Ensures food purity</h4>
                        <p className="text-sm text-slate-600 mt-2">Traceability and SOP-driven processing.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    <div className="p-6 bg-white rounded shadow">Supports rural MSMEs</div>
                    <div className="p-6 bg-white rounded shadow">AI-driven decision system</div>
                </div>
            </Container>
        </section>
    )
}
