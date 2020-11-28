import React from "react";

import { motion } from "framer-motion";

export default function SkillElement({ svg, level }) {
  return (
    <motion.div
      animate={{ scale: [0, 1.5, 0.6] }}
      transition={{ duration: 1.5 }}
    >
      <motion.div whileHover={{ scale: 1.2 }}>
        <div className="skills-container__svg">
          {svg}
          <p className="skills-container__svg--level">{level}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
