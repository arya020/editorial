import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import img0 from './magzines/img0.jpg';
import img1 from './magzines/img1.jpg';
import img2 from './magzines/img2.jpg';
import img3 from './magzines/img3.jpg';
import img4 from './magzines/img4.jpg'

const images = [
  img0,img1,img2,img3,img4
];

export default function AnimationCircle() {
  const { scrollYProgress } = useScroll();

  // Animate X position for images to move from circular positions to horizontal spread
  // scrollYProgress goes from 0 to 1 as you scroll down
   // X axis: from center to spread
   const x0 = useTransform(scrollYProgress, [0, 0.4, 0.7,1], [0, -300, 0,70]);
   const x1 = useTransform(scrollYProgress, [0, 0.4, 0.7,1], [0, -200, 0,170]);
   const x2 = useTransform(scrollYProgress, [0, 0.4, 0.7,1], [0, 0, 0,270]);
   const x3 = useTransform(scrollYProgress, [0, 0.4, 0.7,1], [0, 200, 0,370]);
   const x4 = useTransform(scrollYProgress, [0, 0.4, 0.7,1], [0, 300, 0,470]);
 
   // Y axis: from stack to aligned
   const y0 = useTransform(scrollYProgress, [0, 0.4,0.7,1], [0, 400,800,850]);
   const y1 = useTransform(scrollYProgress, [0, 0.4,0.7,1], [0, 400,800,900]);
   const y2 = useTransform(scrollYProgress, [0, 0.4,0.7,1], [0, 400,800,950]);
   const y3 = useTransform(scrollYProgress, [0, 0.4,0.7,1], [0, 400,800,1000]);
   const y4 = useTransform(scrollYProgress, [0, 0.4,0.7,1], [0, 400,800,1050]);
   // Rotation for tilting
   const r0 = useTransform(scrollYProgress, [0, 0.4,0.8], [0, -40, 0]);
   const r1 = useTransform(scrollYProgress, [0, 0.4,0.8], [0, -20, 0]);
   const r2 = useTransform(scrollYProgress, [0, 0.4,0.8], [0, 0, 0]);
   const r3 = useTransform(scrollYProgress, [0, 0.4,0.8], [0, 20, 0]);
   const r4 = useTransform(scrollYProgress, [0, 0.4,0.8], [0, 40, 0]);


  return (
    <div style={{ height: "200vh", padding: "100px" }}>
      <div
        style={{
          position: "relative",
          paddingTop:'2.5em',
          height: 100,
          display:"grid",
          placeItems:"center"
        }}
      >
        <motion.img
          src={images[0]}
          alt="img0"
          style={{
            width: '15em',
            height: '20em',
            position: "absolute",
            transition: 'ease-in-out',
            x: x0,
            y: y0,
            rotate: r0
          }}
        />
        <motion.img
          src={images[1]}
          alt="img1"
          style={{
            width: '15em',
            height: '20em',
            position: "absolute",
            transition: 'ease-in-out',
            x: x1,
            y: y1,
            rotate: r1
          }}
        />
        <motion.img
          src={images[2]}
          alt="img2"
          style={{
            width: '15em',
            height: '20em',
            position: "absolute",
            transition: 'ease-in-out',
            x: x2,
            y: y2,
            rotate: r2
          }}
        />
        <motion.img
          src={images[3]}
          alt="img3"
          style={{
            width: '15em',
            height: '20em',
            position: "absolute",
            transition: 'ease-in-out',
            x: x3,
            y: y3,
            rotate: r3
          }}
        />
        <motion.img
          src={images[4]}
          alt="img4"
          style={{
            width: '15em',
            height: '20em',
            position: "absolute",
            transition: 'ease-in-out',
            x: x4,
            y: y4,
            rotate: r4
          }}
        />
      </div>
      <div style={{ marginTop: "100vh" }}>Subscribe to Latest Trends</div>
    </div>
  );
}
