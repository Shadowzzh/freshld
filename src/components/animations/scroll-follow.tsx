'use client'

import { useScroll, useTransform, motion } from 'motion/react'
import { useRef } from 'react'

export function useScrollFollow() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  
  return { ref, y, rotate }
}

