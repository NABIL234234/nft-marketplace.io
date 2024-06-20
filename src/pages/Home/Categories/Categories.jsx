import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CardCotegories from "../../../components/CardCotegories/CardCotegories";

// images
import Artback from "../../../../src/assets/IMAGE/SECTION/Art-back.png";
import PaintBrush from "../../../../src/assets/IMAGE/PLAY.SVG/nav/PaintBrush.svg";
import Collectiblse from "../../../../src/assets/IMAGE/SECTION/Collectiblse.png";
import Swatches from "../../../../src/assets/IMAGE/PLAY.SVG/nav/Swatches.svg";
import Musicback from "../../../../src/assets/IMAGE/SECTION/music-back.png";
import MusicNotes from "../../../../src/assets/IMAGE/PLAY.SVG/nav/MusicNotes.svg";
import Photography from "../../../../src/assets/IMAGE/SECTION/Photography.png";
import Camera from "../../../../src/assets/IMAGE/PLAY.SVG/nav/Camera.svg";
import Videoback from "../../../../src/assets/IMAGE/SECTION/Video-back.png";
import VideoCamera from "../../../../src/assets/IMAGE/PLAY.SVG/nav/VideoCamera.svg";
import UtilityBack from "../../../../src/assets/IMAGE/SECTION/Utility-back.png";
import MagicWand from "../../../../src/assets/IMAGE/PLAY.SVG/nav/MagicWand.svg";
import SportBack from "../../../../src/assets/IMAGE/SECTION/Sport-back.png";
import Basketball from "../../../../src/assets/IMAGE/PLAY.SVG/nav/Basketball.svg";
import VirtualWorlds from "../../../../src/assets/IMAGE/SECTION/Virtual-Worlds.png";
import Planet from "../../../../src/assets/IMAGE/PLAY.SVG/nav/Planet.svg";

export default function Categories() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-12 mdd:pt-40">
      <div className="max-w-6xl px-5 mx-auto font-mono">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <div className="hidden mb:flex text-white pb-[20px] mdd:pb-[60px]">
            <h2 className="font-semibold text-4xl">Browse Categories</h2>
          </div>
          <div className="hidden mb:flex justify-start flex-wrap">
            <CardCotegories
              imgUrl={Artback}
              secondImgUrl={PaintBrush}
              desc="Art"
            />
            <CardCotegories
              imgUrl={Collectiblse}
              secondImgUrl={Swatches}
              desc="Collectibles"
            />
            <CardCotegories
              imgUrl={Musicback}
              secondImgUrl={MusicNotes}
              desc="Music"
            />
            <CardCotegories
              imgUrl={Photography}
              secondImgUrl={Camera}
              desc="Photography"
            />
            <CardCotegories
              imgUrl={Videoback}
              secondImgUrl={VideoCamera}
              desc="Video"
            />
            <CardCotegories
              imgUrl={UtilityBack}
              secondImgUrl={MagicWand}
              desc="Utility"
            />
            <CardCotegories
              imgUrl={SportBack}
              secondImgUrl={Basketball}
              desc="Sport"
            />
            <CardCotegories
              imgUrl={VirtualWorlds}
              secondImgUrl={Planet}
              desc="Virtual Worlds"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
