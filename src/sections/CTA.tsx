import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'

export default function CTA() {
    return (
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-400 text-white">
            <Container>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold">Building India's Most Trusted Rural Food Ecosystem</h2>
                    <p className="mt-3 opacity-90">Join us in transforming rural supply chains, empowering farmers and delivering healthy food.</p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                        <Button>Become a Farmer</Button>
                        <Button variant="ghost">Become a Franchise</Button>
                        <Button variant="ghost">Become a Partner</Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}
