import React, { useState } from "react";
import "./Postings.css";
import Posting from "./Posting/Posting";
import SwiperCore, { Thumbs, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Thumbs, Navigation, Pagination]);

function Postings({ userPostings }) {
  return (
    <div className={"postings"}>
      {userPostings.length > 0 ? (
        userPostings?.map((posting) => {
          return <Posting posting={posting} />;
        })
      ) : (
        <div className={"postings-no"}>
          <h3>No Postings</h3>
        </div>
      )}
    </div>
  );
}

export default Postings;
