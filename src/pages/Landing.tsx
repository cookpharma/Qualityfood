import React from 'react'
import Hero from '../sections/Hero'
import Ecosystem from '../sections/Ecosystem'
import AISection from '../sections/AISection'
import Marketplace from '../sections/Marketplace'
import Impact from '../sections/Impact'
import Why from '../sections/Why'
import CTA from '../sections/CTA'

export default function Landing() {
    return (
        <div id="home">
            <Hero />
            <Ecosystem />
            <AISection />
            <Marketplace />
            <Impact />
            <Why />
            <CTA />
        </div>
    )
}
