/**
 * Custom hook that animates a component when it comes into view.
 *
 * @param {Object} options - Options for the hook.
 * @param {boolean} options.once - If true, the animation will only trigger once when the component comes into view. Default is true.
 * @returns {Object} - An object containing a `ref` to be attached to the component and `controls` to control the animation.
 *
 * @example
 * const { ref, controls } = useAnimateOnInView({ once: false });
 *
 * return (
 *   <motion.div ref={ref} animate={controls} initial="hidden" variants={variants}>
 *     Content to animate
 *   </motion.div>
 * );
 */

import { useEffect, useRef } from 'react';
import { useAnimation, useInView } from 'framer-motion';

const useAnimateOnInView = (options = { once: true }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, options);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      // console.log(isInView);
    }
  }, [controls, isInView]);

  return { ref, controls };
};

export default useAnimateOnInView;
