import React from 'react';
import { motion } from "framer-motion";
// import "./test.scss";

function FramerTest() {
    return (
        <div id="test">
            <motion.h2
                initial={{ y: "-250px" }}
                animate={{ y: 0 }}
                transition={{ delay: .2 }}
                whileHover={{}}
            >
                TEST PAGE
            </motion.h2>
            <motion.button>
                Testing
            </motion.button>
        </div>
    )
}

export default FramerTest
