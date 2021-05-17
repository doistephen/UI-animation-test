import React from "react";
import IconClosedThread from "../icons/IconClosedThread";

function Message(props) {
  return (
    <div className="message">
      <div className="message-avatar">
        <img src={props.img} alt={`${props.author} avatar`} />
      </div>
      <div className="message-metadata">
        <div>
          <span className="message-author">{props.author}</span>
          <span className="message-when">{props.when}</span>
        </div>
        {props.completed && (
          <div className="message-completed">Added a conclusion:</div>
        )}
        <p className="message-content">{props.content}</p>
      </div>
    </div>
  );
}

function ClosedSysMessage(props) {
  return (
    <div className="closed-sys-message">
      <div className="closed-sys-message-wrapper">
        <div className="closed-sys-message-icon">
          <IconClosedThread />
        </div>
        <div className="closed-sys-message-label">
          <span className="closed-sys-message-author">{props.author}</span>{" "}
          closed this thread
        </div>
      </div>
    </div>
  );
}

function ClosedSysMessageBar() {
  return (
    <div className="closed-sys-message-line-wrapper">
      <div className="closed-sys-message-line"></div>
    </div>
  );
}

export { Message, ClosedSysMessage, ClosedSysMessageBar };
