import Appbar from "./Appbar";
import Footer from "./Footer";
import { motion, useScroll } from "framer-motion";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

export default function Layout({ children }: { children: any }) {
  const { scrollY } = useScroll();
  /** add useState hook to manage state **/
  const [hidden, setHidden] = useState(false);
  const variants = {
    /** this is the "visible" key and it's respective style object **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's respective style object **/
    hidden: { opacity: 0, y: -25 },
  };
  /** this onUpdate function will be called in the `scrollY.onChange` callback **/
  function update() {
    if (scrollY?.get() < scrollY?.getPrevious()) {
      setHidden(false);
    } else if (
      scrollY?.get() > 100 &&
      scrollY?.get() > scrollY?.getPrevious()
    ) {
      setHidden(true);
    }
  }

  /** update the onChange callback to call for `update()` **/
  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  return (
    <>
      <div className={`fixed w-full z-10`}>
        <motion.nav
          /** the variants object needs to be passed into the motion component **/
          variants={variants}
          /** it's right here that we match our boolean state with these variant keys **/
          animate={hidden ? "hidden" : "visible"}
          /** I'm also going to add a custom easing curve and duration for the animation **/
          transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        >
          <Appbar />
        </motion.nav>
      </div>
      {/* <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1130px]"> */}
      {children}
      {/* </div>
      </div> */}
      <Footer />
    </>
  );
}
