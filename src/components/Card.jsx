// import React from "react";
// import { Icon } from "@iconify/react";
// import { useState, useEffect, useRef } from "react";
// import arrow from "../ra.png";
// function Card(props) {
//   const [isVisible, setIsVisible] = useState(false);
//   const cardRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const windowHeight = window.innerHeight;
//       const cardTop = cardRef.current
//         ? cardRef.current.getBoundingClientRect().top
//         : 0;

//       if (cardTop < windowHeight) {
//         setIsVisible(true);
//       }
//     };

//     handleScroll(); // Run the function once to check the initial visibility

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const cardStyle = {
//     opacity: isVisible ? 1 : 0,
//     transform: `translateY(${isVisible ? 0 : "20px"})`,
//     transition: "opacity 0.5s, transform 0.5s"
//   };

//   return (
//     <>
//       <div
//         className={`container ${isVisible ? "visible" : ""}`}
//         style={cardStyle}
//         ref={cardRef}
//       >
//         <div className="container reveal">
//           <div className="items-img">
//             <img src={props.imgsrc} />
//           </div>
//           <div className="items-text">
//             <div className="heading-div">
//               <h2 style={{ fontWeight: "normal" }}>{props.heading}</h2>
//             </div>
//             <p>{props.content}</p>
//             <div className="services" style={{ display: "flex" }}>
//               <b>{props.services}</b>
//               <img src={arrow} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Card;
import React from "react";
import { useState, useEffect, useRef } from "react";
import arrow from "../ra.png";

function Card(props) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const cardTop = cardRef.current
        ? cardRef.current.getBoundingClientRect().top
        : 0;

      if (cardTop < windowHeight) {
        setIsVisible(true);
      }
    };

    handleScroll(); // Run the function once to check the initial visibility

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cardStyle = {
    opacity: isVisible ? 1 : 0,
    transform: `translateY(${isVisible ? 0 : "20px"})`,
    transition: "opacity 0.5s, transform 0.5s"
  };

  return (
    <div
      className={`container ${isVisible ? "visible" : ""}`}
      style={cardStyle}
      ref={cardRef}
    >
      <div className="items-img">
        <img src={props.imgsrc} alt="Card Image" />
      </div>
      <div className="items-text">
        <div className="heading-div">
          <h2 style={{ fontWeight: "normal" }}>{props.heading}</h2>
        </div>
        <p>{props.content}</p>
        <div className="services" style={{ display: "flex" }}>
          <b>{props.services}</b>
          <img src={arrow} alt="Arrow Icon" />
        </div>
      </div>
    </div>
  );
}
export default Card;
