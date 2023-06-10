'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from '../components';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    {/* add the gradient color */}
    <div className="z-0 gradient-02" />

    {/* add the inner container */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      {/* the motion typing header text */}
      <TypingText title="| About Metaversus" textStyles="text-center" />

      {/* the motion text with span for all the special words */}
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Metaverse</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it's really real, you can feel what you feel in this metaverse
        world, because this is really{' '}
        <span className="font-extrabold text-white">
          the madness of the metaverse
        </span>{' '}
        of today, using only{' '}
        <span className="font-extrabold text-white">VR </span>
        devices you can easily{' '}
        <span className="font-extrabold text-white">explore</span>
        the metaverse world you want, turn your dreams into reality. Let's
        explore the madness of the metaverse by scrolling down
      </motion.p>

      {/* the motion arrow down image */}
      <motion.img
        variants={fadeIn('up', 'tween', 0.7, 1)}
        animate={{ y: ['50%', '-50%'] }}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
