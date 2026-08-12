import { Variants } from 'framer-motion';

// Spring Physics Constants
export const TRANSITION_SPRING = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
};

export const TRANSITION_SMOOTH = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1],
};

// Fade Up Variant
export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: TRANSITION_SMOOTH,
  },
};

// Fade In Variant
export const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

// Scale In Variant
export const scaleInVariant: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: TRANSITION_SMOOTH,
  },
};

// Stagger Container Variant
export const staggerContainerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Text Reveal Letter Variant
export const textRevealVariant: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

// VK Monogram Load Variant
export const vkLogoVariant: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

// Page Transition Variant
export const pageTransitionVariant: Variants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: 'easeIn' } },
};
