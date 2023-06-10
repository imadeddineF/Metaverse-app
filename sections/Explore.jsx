'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import { exploreWorlds } from '../constants';

const Explore = () => (
  <section className={`${styles.paddings}`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| The World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Choose the world you want
            <br className="hidden md:block" /> to explore
          </>
        }
        textStyles="text-center"
      />
      <div />
    </motion.div>
  </section>
);

export default Explore;
