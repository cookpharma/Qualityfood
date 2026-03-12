import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function StatCounter({ value, label }: { value: number; label: string }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })
    const controls = useAnimation()

    useEffect(() => {
        if (inView) controls.start({ count: value })
    }, [inView, controls, value])

    return (
        <div ref={ref} className="p-4">
            <motion.div animate={controls} initial={{ count: 0 }}>
                {/** We render value as fixed since framer number animation is simple; animate opacity for effect */}
                <div className="text-3xl font-extrabold text-emerald-600">{value.toLocaleString()}</div>
            </motion.div>
            <div className="text-sm text-slate-600 mt-1">{label}</div>
        </div>
    )
}
