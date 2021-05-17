import React, { useState, useContext } from "react";
import { AnimationContext } from "./AnimationProvider.js";
import { motion } from "framer-motion";

import IconMore from "../icons/IconMore.js";
import IconClose from "../icons/IconClose.js";
import IconUnread from "../icons/IconUnread.js";
import IconLink from "../icons/IconLink.js";
import IconIntegration from "../icons/IconIntegration.js";

function DropdownButton(props) {
  const dropdownButtonVariants = {
    4: { backgroundColor: "#fafafa" },
    5: { backgroundColor: "unset" },
  };

  return (
    <motion.div
      variants={dropdownButtonVariants}
      initial={false}
      animate={props.currentState}
      onClick={props.onClick}
      className="dropdown-button"
    >
      <IconMore />
    </motion.div>
  );
}

function DropdownMenu(props) {
  const context = useContext(AnimationContext);

  const dropdownMenuVariants = {
    1: { opacity: 0, transition: { duration: 0 } },
    6: { opacity: 1, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] } },
    9: { opacity: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] } },
  };

  return (
    <motion.div
      initial={false}
      animate={props.currentState}
      variants={dropdownMenuVariants}
      className="dropdown-menu"
    >
      <DropdownItem icon={<IconUnread />} label="Mark as unread" disabled />
      <div className="dropdown-hr"></div>
      <DropdownItem icon={<IconLink />} label="Copy link to thread" disabled />
      <div className="dropdown-hr"></div>
      <DropdownItem
        icon={<IconClose />}
        label="Close thread..."
        active={context.active}
      />
      <DropdownItem
        icon={<IconIntegration />}
        label="Add integration..."
        disabled
      />
    </motion.div>
  );
}

function DropdownItem(props) {
  return (
    <div
      className="dropdown-item"
      disabled={props.disabled}
      data-active={props.active}
    >
      <div className="dropdown-icon">{props.icon}</div>
      <div className="dropdown-label">{props.label}</div>
    </div>
  );
}

export default function Dropdown(props) {
  return (
    <div className="dropdown">
      <DropdownButton currentState={props.currentState} />
      <DropdownMenu currentState={props.currentState} />
    </div>
  );
}
