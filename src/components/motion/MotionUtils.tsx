import React from 'react';
import { motion, useReducedMotion, HTMLMotionProps, Variants } from 'motion/react';

/**
 * Standard easing curves for natural deceleration
 */
export const smoothEase = [0.21, 0.47, 0.32, 0.98] as const;

/**
 * Common Animation Variants
 */
export const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: smoothEase,
    },
  },
};

export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.55,
      ease: smoothEase,
    },
  },
};

export const fadeInLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: smoothEase,
    },
  },
};

export const fadeInRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: smoothEase,
    },
  },
};

export const scaleUpVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
};

export const staggerContainerVariants = (staggerDelay = 0.1, delayChildren = 0.05): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: delayChildren,
    },
  },
});

/**
 * RevealOnScroll - Wrapper component that triggers an entrance animation once when visible in viewport
 */
export interface RevealOnScrollProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  className?: string;
  viewportMargin?: string;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 20,
  xOffset = 0,
  className = '',
  viewportMargin = '-40px',
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{
        duration: duration,
        delay: delay,
        ease: smoothEase,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * StaggerContainer - Container for staggered child reveals
 */
export interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  viewportMargin?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.1,
  delayChildren = 0.05,
  className = '',
  viewportMargin = '-40px',
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      variants={staggerContainerVariants(staggerDelay, delayChildren)}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * StaggerItem - Item within a StaggerContainer
 */
export interface StaggerItemProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  yOffset?: number;
  className?: string;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  yOffset = 20,
  className = '',
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: smoothEase,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
