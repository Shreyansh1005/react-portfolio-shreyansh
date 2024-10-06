import { RiReactjsLine } from "react-icons/ri"
import { AiFillHtml5 } from "react-icons/ai";  // HTML icon
import { DiCss3Full } from "react-icons/di";   // CSS icon
import { SiJavascript } from "react-icons/si";
import { SiMongodb } from "react-icons/si"
import { DiRedis } from "react-icons/di"
import { animate, motion } from "framer-motion";
// import { FaNodeJS } from "react-icons/fa"

const iconVariants = (duration) =>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        },
    },
});

const Technologies = () =>{
    return(
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}className="my-20 text-center text-4xl">Technologies</motion.h1>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
            className="flex flex-wrap justify-center items-center gap-4">
                <motion.div
                variants={iconVariants(1)}
                initial="intial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div 
                variants={iconVariants(2)}
                initial="intial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-400" />
                </motion.div>
                <motion.div 
                variants={iconVariants(3)}
                initial="intial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiRedis className="text-7xl text-red-400" />
                </motion.div>
                <motion.div 
                variants={iconVariants(4)}
                initial="intial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <AiFillHtml5 className="text-7xl text-orange-400" />
                </motion.div>
                <motion.div 
                variants={iconVariants(5)}
                initial="intial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiCss3Full className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div 
                variants={iconVariants(6)}
                initial="intial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiJavascript className="text-7xl text-yellow-400" />
                </motion.div>
                {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJS className="text-7xl text-cyan-400" />
                </div> */}
            </motion.div>
        </div>
    );
};

export default Technologies;