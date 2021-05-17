import React, { createContext, useState } from "react";

const AnimationContext = createContext();

function AnimationProvider(props) {
  const [menuItemActive, setMenuItemActive] = useState(false);
  const [animationState, setAnimationState] = useState(0);

  const value = {
    active: menuItemActive,
    setMenuItemActive: setMenuItemActive,
    animationState: animationState,
    setAnimationState: setAnimationState,
  };

  return (
    <AnimationContext.Provider value={value}>
      {props.children}
    </AnimationContext.Provider>
  );
}

export { AnimationContext, AnimationProvider };
