import Link from "next/link";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <main className="showcase">
        <h1 className="showcase-header h-color">Foxybot</h1>
        <h2 className="showcase-header-text h-color">
          Foxybot, the best bot for everyone!
        </h2>
        <p className="showcase-para p-color">
          Foxybot is the best Discord Bot for everyday usecase on all discord-servers! It uses the most advanced APIs and even some music apis. Feel free to add Foxybot to your Server!
        </p>

        <span className="p-color">Foxybot is online!</span>
        <div className="showcase-btn">
          <button className="btn">
            <Link className="h-color no-decoration" href="#">
              Add now!
            </Link>
          </button>

          <button className="btn">
            <Link className="h-color no-decoration" href="#">
              Get Support!
            </Link>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
