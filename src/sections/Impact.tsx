import React from 'react'
import Container from '../components/Container'
import StatCounter from '../components/StatCounter'

export default function Impact() {
    return (
        <section className="py-16 bg-emerald-50">
            <Container>
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold">Impact</h2>
                    <p className="text-slate-600 mt-2">Our growing footprint and impact across rural India.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    <StatCounter value={10000} label="Farmers" />
                    <StatCounter value={250} label="Rural Units" />
                    <StatCounter value={50} label="Franchises" />
                    <StatCounter value={100000} label="Customers" />
                </div>
            </Container>
        </section>
    )
}
