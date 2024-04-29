"use client"

import React from "react"
import { motion } from "framer-motion"

export default function Review ({children}: {children: React.ReactNode}) {
  return <motion.div initial={{ y: 0.1, opacity: 0}} animate={{y:0, opacity: 1}} transition={{ease:"easeInOut", transition: 0.75, delay:0.5}}> {children} </motion.div>
}