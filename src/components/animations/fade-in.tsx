'use client'

import { motion } from 'motion/react'

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number } ) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

