import React, { Component } from "react";
// import Slider from "react-slick";
import { store } from "../redux-state/store/Store";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    // const settings = {
    //   dots: false,
    //   infinite: true,
    //   slidesToShow: 6,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 1500,
    //   arrows: false,
    //   responsive: [
    //     {
    //       breakpoint: 991,
    //       settings: {
    //         slidesToShow: 3,
    //       },
    //     },
    //     {
    //       breakpoint: 767,
    //       settings: {
    //         slidesToShow: 2,
    //       },
    //     },
    //   ],
    // };
    return (
      <div className="youMay">
        <Marquee pauseOnHover={true} speed={100}>
          {store.map((item) =>
            //    if (item.type == "ourBestSellers") {

            //     <div key={item.id}>
            //       <Link to={`/${item.id}`}>
            //         <img
            //           src={item.primaryImage}
            //           className=" w-48 spCaroImg brForMobile rounded-xl pl-4 pr-4  mb-8"
            //         />
            //       </Link>
            //     </div>

            // }
            item.type === "ourBestSellers" ? (
              <div key={item.id}>
                <Link to={`/${item.id}`}>
                  <img
                    src={item.primaryImage}
                    className=" w-48 spCaroImg brForMobile rounded-xl pl-4 pr-4  mb-8"
                    alt="primaryImage"
                  />
                </Link>
              </div>
            ) : null
          )}
        </Marquee>
      </div>
    );
  }
}
