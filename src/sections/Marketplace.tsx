import React from 'react'
import Container from '../components/Container'

export default function Marketplace() {
    return (
        <section id="marketplace" className="py-16">
            <Container>
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold">Marketplace</h2>
                    <p className="text-slate-600 mt-2">Direct farmer-to-franchise contracts, transparent pricing and batch traceability.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div className="p-4 bg-white rounded shadow text-center">1. Farmer lists produce</div>
                    <div className="p-4 bg-white rounded shadow text-center">2. Franchise places contract</div>
                    <div className="p-4 bg-white rounded shadow text-center">3. Batch processing & trace</div>
                    <div className="p-4 bg-white rounded shadow text-center">4. Delivery & payments</div>
                </div>
            </Container>
        </section>
    )
}
