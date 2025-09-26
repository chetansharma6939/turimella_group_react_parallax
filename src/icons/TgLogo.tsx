import React from 'react'
import { motion } from 'framer-motion'

export const TgLogo: React.FC<{ className?: string }> = ({ className }) => {
  // Animation timings
  const swoosh = { duration: 0.9, ease: 'easeInOut' }
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366f1" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
        {/* metallic glint gradient */}
        <linearGradient id="glint" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#ffdca3" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* mask that reveals only the swoosh paths for the glint */}
        <mask id="swoosh-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="256" height="256">
          <rect width="256" height="256" fill="#000" />
          {/* widened white strokes where glint should show */}
          <path d="M4 40 C60 10, 140 10, 212 40" stroke="#fff" strokeWidth="12" strokeLinecap="round" fill="none" />
          <path d="M12 80 C80 40, 136 120, 188 92" stroke="#fff" strokeWidth="10" strokeLinecap="round" fill="none" />
        </mask>
      </defs>
      <rect width="256" height="256" rx="48" fill="#0b0c10" />
      <g transform="translate(28,28)">
        {/* swoosh paths that draw themselves to simulate assembly */}
        <motion.path
          id="swoosh1"
          d="M4 40 C60 10, 140 10, 212 40"
          fill="none"
          stroke="url(#g)"
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...swoosh, delay: 0.08 }}
        />
        <motion.path
          id="swoosh2"
          d="M12 80 C80 40, 136 120, 188 92"
          fill="none"
          stroke="#06b6d4"
          strokeWidth={5}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...swoosh, delay: 0.28 }}
        />


        {/* circles and details fade/scale in to simulate pieces locking into place */}
        <motion.circle
          cx={48}
          cy={48}
          r={20}
          fill="url(#g)"
          opacity={0}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.95 }}
          transition={{ duration: 0.45, delay: 0.7, ease: 'easeOut' }}
        />
        <motion.circle
          cx={160}
          cy={52}
          r={12}
          fill="#f0abfc"
          opacity={0}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 0.45, delay: 0.85, ease: 'easeOut' }}
        />
        {/* third dot/line removed as requested */}

        <motion.path
          d="M12 176h176"
          stroke="#1e2233"
          strokeWidth={6}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 1.15, ease: 'easeInOut' }}
        />

        {/* glint: start after assembly finishes (delayed), clipped to swooshes */}
        <g mask="url(#swoosh-mask)">
          <motion.rect
            x={-80}
            y={14}
            width={48}
            height={120}
            rx={24}
            fill="url(#glint)"
            opacity={0.95}
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 320, opacity: [0, 1, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'linear', repeatDelay: 0.9, delay: 1.6 }}
            style={{ mixBlendMode: 'screen' }}
          />
        </g>

        <motion.text
          x="12"
          y="152"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize={72}
          fontWeight={900}
          fill="url(#g)"
          initial={{ opacity: 0, y: 8, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.25 }}
        >
          TTG
        </motion.text>
      </g>
    </motion.svg>
  )
}

export default TgLogo
