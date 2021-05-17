import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  AnimationProvider,
  AnimationContext,
} from "./components/AnimationProvider.js";
// sass
import "./sass/main.scss";
// Components
import {
  ClosedSysMessage,
  Message,
  ClosedSysMessageBar,
} from "./components/Message";
import Dropdown from "./components/Dropdown";

function App() {
  const transition = (duration, delay = 0) => {
    return { duration: duration, ease: [0.2, 0.8, 0.2, 1], delay: delay };
  };

  //not sure what do to about this right now
  const stateDurations = [
    0, 0.15, 0.6, 0.15, 0, 0, 0.6, 0.15, 0.3, 0.5, 0.3, 0.6, 4,
  ];

  const cursorVariants = {
    1: { opacity: 0, transition: transition(0), left: "50%", top: "50%" },
    3: {
      opacity: 1,
      left: "calc(100% - 40px)",
      top: 16,
      transition: transition(0.5, 0.2),
    },
    4: { scale: 0.95 },
    5: { scale: 1 },
    7: { left: "50%", top: 128, transition: transition(0.6) },
    8: { scale: 0.95, transition: transition(0.15) },
    9: { scale: 1, opacity: 0, transition: transition(0.5) },
  };

  const jessOneVariants = {
    1: { y: 12, opacity: 0, transition: { duration: 0 } },
    2: { opacity: 1, y: 0, transition: transition(0.5) },
    13: { y: 12, opacity: 0, transition: transition(0.3) },
  };
  const contentsWrapperVariants = {
    3: { x: -64, transition: transition(0.5) },
    10: { x: 0, transition: transition(0.5) },
  };

  const dropdownMenuVariants = {
    1: { x: 64, transition: transition(0) },
    3: { x: -16, transition: transition(0.5) },
    10: { x: 64, transition: transition(0.5) },
  };

  const closedSysMessageVariants = {
    1: { x: 12, y: 0, opacity: 0, transition: { duration: 0 } },
    11: { x: 0, opacity: 1, transition: transition(0.3) },
    13: { y: 16, opacity: 0, transition: transition(0.3) },
  };
  const closedSysMessageBarVariants = {
    1: { opacity: 0, scaleY: 0, originY: 0, y: 0 },
    12: { opacity: 1, scaleY: 1, transition: transition(0.5) },
    13: { y: 20, opacity: 0, transition: transition(0.3) },
  };
  const jessTwoVariants = {
    1: { y: 12, opacity: 0, transition: { duration: 0 } },
    12: { opacity: 1, y: 0, transition: transition(0.5) },
    13: { y: 24, opacity: 0, transition: transition(0.3) },
  };

  const context = useContext(AnimationContext);
  const currentState = context.animationState;

  function handleStateUpdate() {
    if (currentState < 13) {
      context.setAnimationState(parseInt(currentState + 1, 10));
    } else {
      context.setAnimationState(1);
    }
  }

  useEffect(() => {
    context.setAnimationState(1);
  }, []);

  useEffect(() => {
    if (currentState === 7) {
      setTimeout(() => {
        context.setMenuItemActive(true);
      }, 200);
    } else if (currentState === 9) {
      context.setMenuItemActive(false);
    }
  }, [currentState]);

  return (
    <>
      <button onClick={() => handleStateUpdate()}>
        Current state {currentState}
      </button>

      <motion.div
        className="animation-wrapper"
        animate={`${currentState}`}
        initial={false}
      >
        <motion.div
          className="contents-wrapper"
          variants={contentsWrapperVariants}
          animate={currentState}
          initial={false}
        >
          <motion.div
            variants={dropdownMenuVariants}
            animate={currentState}
            initial={false}
          >
            <Dropdown currentState={currentState} />
          </motion.div>
          <div className="message-wrapper">
            <Message
              author="Carter"
              when="2h"
              img={process.env.PUBLIC_URL + `/images/carter.png`}
              content="If this works for everyone, it sounds like we’ve found our answer."
            />
            <motion.div
              variants={jessOneVariants}
              animate={currentState}
              initial={false}
            >
              <Message
                author="Jess"
                when="3m"
                img={process.env.PUBLIC_URL + `/images/jess.png`}
                content="Perfect, I’ll close the thread!"
              />
            </motion.div>
            <div>
              <motion.div
                variants={closedSysMessageVariants}
                animate={currentState}
                initial={false}
              >
                <ClosedSysMessage author="Jess" />
                <motion.div
                  variants={closedSysMessageBarVariants}
                  animate={currentState}
                  initial={false}
                >
                  <ClosedSysMessageBar />
                </motion.div>
              </motion.div>
              <motion.div
                variants={jessTwoVariants}
                animate={currentState}
                initial={false}
              >
                <Message
                  author="Jess"
                  when="moments ago"
                  img={process.env.PUBLIC_URL + `/images/jess.png`}
                  content="We’ll paint the canoe red; Carter will order the paint on Wednesday."
                  completed={true}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="cursor"
          variants={cursorVariants}
          animate={currentState}
          initial={false}
        >
          <img src={process.env.PUBLIC_URL + `/images/cursor.png`} alt="" />
        </motion.div>
      </motion.div>
    </>
  );
}

function AppWrapper() {
  return (
    <AnimationProvider>
      <App />
    </AnimationProvider>
  );
}

export default AppWrapper;
