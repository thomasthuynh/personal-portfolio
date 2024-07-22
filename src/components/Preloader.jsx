import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 0, y: "100%" }}
      transition={{ delay: 2, duration: 0.5 }}
      className="absolute inset-0 z-20 w-full bg-primary"
    >
      <div className="flex h-full w-full flex-col items-center justify-center text-center">
        {/* THOMAS HUYNH TEXT */}
        <motion.div
          initial="initial"
          animate="animate"
          className="relative mb-2 overflow-hidden font-semibold tracking-wide text-secondary"
        >
          <motion.h1
            transition={{ duration: 0.5 }}
            variants={{
              initial: { y: 0, opacity: 0 },
              animate: { y: "-100%" },
            }}
            className="text-3xl sm:text-4xl lg:text-5xl"
          >
            Thomas Huynh
          </motion.h1>
          <motion.h1
            transition={{ duration: 0.5 }}
            variants={{
              initial: { y: "100%" },
              animate: { y: "0" },
            }}
            className="absolute inset-0 text-3xl sm:text-4xl lg:text-5xl"
          >
            Thomas Huynh
          </motion.h1>
        </motion.div>

        {/* PORTFOLIO TEXT */}
        <motion.div
          initial="initial"
          animate="animate"
          className="relative overflow-hidden font-semibold tracking-wide text-gray"
        >
          <motion.h1
            transition={{ delay: 0.25, duration: 0.5 }}
            variants={{
              initial: { y: 0, opacity: 0 },
              animate: { y: "-100%" },
            }}
            className="text-3xl sm:text-4xl lg:text-5xl"
          >
            Portfolio
          </motion.h1>
          <motion.h1
            transition={{ delay: 0.25, duration: 0.5 }}
            variants={{
              initial: { y: "100%" },
              animate: { y: "0" },
            }}
            className="absolute inset-0 text-3xl sm:text-4xl lg:text-5xl"
          >
            Portfolio
          </motion.h1>
        </motion.div>
      </div>

      {/* LOADING */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
        className="absolute bottom-6 left-6"
      >
        <p className="flex items-center font-semibold uppercase tracking-widest text-white text-xs md:text-base">
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0, 1, 0] }}
            transition={{
              delay: 0.75,
              duration: 3,
              times: [0, 0.33, 0.67, 1],
            }}
            className="animate-flash mr-3 flex h-2 w-2 rounded-full bg-secondary shadow-spread-secondary"
          ></motion.span>
          Loading V1.2...
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
