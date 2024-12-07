import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Commands() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Commands | BOT</title>
        <meta
          name="description"
          content="Commands page | Minimal and awesome discord bot website created with ❤️ using NextJS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              ⚡ Commands
            </label>
          </header>
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
              Utilities ⚙️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>!kick {member} [reason]</kbd> -{" "}
                  <span className="p-color">Kicks a user form the server</span>
                </li>
                <li>
                  <kbd>!ban {user} [days] [reason]</kbd> -{" "}
                  <span className="p-color">Bans a user from the server</span>
                </li>
                <li>
                  <kbd>!report [text]</kbd> -{" "}
                  <span className="p-color">Reports a users text</span>
                </li>
                <li>
                  <kbd>!cleanup [type] [ammount]</kbd> -{" "}
                  <span className="p-color">Cleans a certant type of messages and deletes the ammount provided</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb5" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb5">
              Image 🖼️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>!imgur [search] {image}</kbd> -{" "}
                  <span className="p-color">Sends a image via the Imgur-API</span>
                </li>
                <li>
                  <kbd>!gif [image]</kbd> -{" "}
                  <span className="p-color">Sends an gif via the Giphy API</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
