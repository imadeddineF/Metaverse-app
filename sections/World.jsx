'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col`}
    >
      <TypingText title="| People on the world" textStyles="text-center" />
      <TitleText
        title="Track frinds around you and invite them to play together in the same world"
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        {/* the big map */}
        <img
          src="/map.png"
          alt="map"
          className="object-contain w-full h-full"
        />

        <div className="absolute lg:bottom-24 lg:right-40 md:bottom-40 md:right-14 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] md:block hidden">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute lg:top-10 lg:left-40 md:top-36 md:left-16 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] md:block hidden">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute lg:top-1/2 lg:left-[45%] md:top-[45%] md:left-[43%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] md:block hidden">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-[62%] w-[200px] h-[160px] p-[9px] rounded-[25px] bg-[#5d6680]">
          <img
            src="mapCard1.png"
            alt="people"
            className="relative w-full h-full"
          />
          <div className="absolute top-[85px] px-3">
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                <img
                  src="people-01.png"
                  alt="people"
                  className="w-[24px] h-[24px] z-20"
                />
                <img
                  src="people-02.png"
                  alt="people"
                  className="w-[24px] h-[24px] -ml-3 z-10"
                />
                <img
                  src="people-03.png"
                  alt="people"
                  className="w-[24px] h-[24px] -ml-3"
                />
              </div>
              <p className="text-white text-[12px]">+ 264 has joined</p>
            </div>
            <h4 className="text-white mt-[8px] font-bold">Hawkins Labs</h4>
          </div>
        </div>
        <div className="absolute top-[40%] left-[20%] w-[200px] h-[160px] p-[9px] rounded-[25px] bg-[#5d6680]">
          <img
            src="mapCard2.png"
            alt="people"
            className="relative w-full h-full"
          />
          <div className="absolute top-[85px] px-3">
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                <img
                  src="people-01.png"
                  alt="people"
                  className="w-[24px] h-[24px] z-20"
                />
                <img
                  src="people-02.png"
                  alt="people"
                  className="w-[24px] h-[24px] -ml-3 z-10"
                />
                <img
                  src="people-03.png"
                  alt="people"
                  className="w-[24px] h-[24px] -ml-3"
                />
              </div>
              <p className="text-white text-[12px]">+ 264 has joined</p>
            </div>
            <h4 className="text-white mt-[8px] font-bold">The Upside Down</h4>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
