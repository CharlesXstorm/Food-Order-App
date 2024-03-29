import React, { useRef, useState, useEffect } from "react";
import style from "./Landing.module.css";
import Logo from "./UI/Logo";
import Mouse from "./UI/Mouse";
// import { dataContext } from './Dependencies/dataContext';
// import StaticNav from './StaticNav';

function Landing() {
  const inner = useRef();
  const [height, setHeight] = useState("0");
  const [scrollData, setscrollData] = useState({});
  //const {state} = useContext(dataContext)

  useEffect(() => {
    const handleScroll = (event) => {
      //console.log(event.currentTarget.scrollY)
      let scrolly = Math.floor(event.currentTarget.scrollY);
      let deviceHeight = Math.floor(
        inner.current.getBoundingClientRect().height
      );

      //}
      //event.currentTarget.scrollY = scrolly == (70/100*deviceHeight) ? deviceHeight : scrolly;
      //console.log(event.currentTarget)
      //console.log(inner.current.scrollY)
      //if (scrooly < deviceHeight)

      setHeight(scrolly < deviceHeight ? scrolly : 0);
      setscrollData(
        scrolly < deviceHeight
          ? { scrollY: scrolly, deviceHeight: deviceHeight }
          : {}
      );

      /*if (scrolly>(10/100*deviceHeight)&& (scrolly<(deviceHeight))){
                window.scrollBy(0,10) 
                //window.removeEventListener('scroll',handleScroll)
            }*/
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //console.log(state.staticNav)

  return (
    <div className={style.landing} ref={inner}>
      <Logo
        theme={"#ffffff"}
        uten={"#ffffff"}
        stroke={"#000000"}
        height={height}
        sData={scrollData}
      />
      <div
        className={style.img1}
        style={{
          transform: `translateY(${-height}px) rotate(${
            (10 / 100) * height
          }deg)`,
        }}
      >
        <img
          src="https://dl.dropboxusercontent.com/scl/fi/jz2czrtv2ml2a5iwo1ctg/ricepng.png?rlkey=8g9vgnrqryzmv44l324grszwx&dl=0"
          alt="rice"
          width="500px"
        />
      </div>
      <div
        className={style.img2}
        style={{
          transform: `translateY(${-height + (50 / 100) * height}px) rotate(-${
            (10 / 100) * height
          }deg)`,
        }}
      >
        <img
          src="https://dl.dropboxusercontent.com/scl/fi/vd662k2wkatvf6i891he8/souppng.png?rlkey=qon1uewi6zwjgjv6jdkfcvkht&dl=0"
          alt="soup"
          width="500px"
        />
      </div>

      <Mouse />
    </div>
  );
}

export default Landing;
