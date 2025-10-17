"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const Brand1 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="cs_brands_area">
        <div className="container">
          <div className="cs_brands_wrapper cs_white_bg cs_heading_color cs_bg_filed" data-background="/assets/img/brand_bg_1.svg">
            <div className="cs_brand wow zoomIn">
            <Image src="/assets/img/brand1.png" alt="img" width={120} height={120}   />
            </div>
            <div className="cs_brand wow zoomIn">
            <Image src="/assets/img/brand2.png" alt="img" width={120} height={120}   />
            </div>
            <div className="cs_brand wow zoomIn">
            <Image src="/assets/img/brand3.png" alt="img" width={120} height={120}   />
            </div>
            <div className="cs_brand wow zoomIn">
            <Image src="/assets/img/brand4.png" alt="img" width={120} height={120}   />
            </div>
            <div className="cs_brand wow zoomIn">
            <Image src="/assets/img/brand5.png" alt="img" width={120} height={120}   />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Brand1;