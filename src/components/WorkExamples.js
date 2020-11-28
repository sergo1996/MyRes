import React, { useState } from "react";

import FrontEndWorks from "./FrontEndWorks";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv, faServer, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./works.scss";
import examples from "./works";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "100%" },
};

export default function WorkExamples() {
  const [isFrontOpen, setIsFrontOpen] = useState(false);
  const [isBackOpen, setIsBackOpen] = useState(false);

  return (
    <div className="works">
      <div className="works__front-end">
        <motion.div
          animate={{ scale: [0, 1.5, 1] }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            onClick={() => setIsFrontOpen(true)}
            whileHover={{ scale: 1.2 }}
          >
            <FontAwesomeIcon icon={faTv} size="9x" />
            <div className="works__title">Front-end</div>
          </motion.div>
        </motion.div>
      </div>
      <div className="works__back-end">
        <motion.div
          animate={{ scale: [0, 1.5, 1] }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            onClick={() => setIsBackOpen(true)}
            whileHover={{ scale: 1.2 }}
          >
            <FontAwesomeIcon icon={faServer} size="9x" />
            <div className="works__title">Back-end</div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="works__front-end--open"
        animate={isFrontOpen ? "open" : "closed"}
        variants={variants}
      >
        <FontAwesomeIcon
          onClick={() => setIsFrontOpen(false)}
          className="close-btn"
          icon={faTimes}
          size="2x"
        />
        <FrontEndWorks works={examples.frontEnd} />
      </motion.div>
      <motion.div
        className="works__back-end--open"
        animate={isBackOpen ? "open" : "closed"}
        variants={variants}
      >
        <FontAwesomeIcon
          onClick={() => setIsBackOpen(false)}
          className="close-btn"
          icon={faTimes}
          size="2x"
        />
        <FrontEndWorks works={examples.backEnd} />
      </motion.div>
    </div>
  );
}
