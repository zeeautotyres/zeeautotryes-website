import About1 from '@/app/Components/About/About1';
import Brand1 from '@/app/Components/Brand/Brand1';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Process2 from '@/app/Components/Process/Process2';
import Team1 from '@/app/Components/Team/Team1';
import Testimonial2 from '@/app/Components/Testimonial/Testimonial2';
import React from 'react';

const page = () => {
    return (
        <div>
           <BreadCumb
                bgImg="/assets/img/bg3.jpg"
                Title="About Us"
            ></BreadCumb>  
            <About1
                img1="/assets/img/about_img_1.webp"
                img2="/assets/img/about2.jpg"
                img3="/assets/img/about_img_3.webp"
                expNumber="30"
                expYers="Years"
                expTitle="Experience"
                number="(0) 777 693 0794"
                subTitle="Our About"
                Title="Expert Tyre Services & Wheel Alignment"
                Content="We are Zee Auto Tyres & Alignment, your trusted local specialists for new & used tyres, wheel alignment, balancing, puncture repair and brake services"
                feature1="Professional Tyre Fitting"
                feature2="Wheel Alignment & Balancing"
                listItem={[
                    "Quality Tyres for Every Vehicle Type",
                    "Professional Wheel Alignment Service",
                    "Expert Puncture Repair & Tyre Replacement",
                ]}
            ></About1>
            {/* <Testimonial2></Testimonial2> */}
            <Brand1></Brand1>
            <Process2></Process2>
            {/* <Team1></Team1> */}
            <div className="cs_height_120 cs_height_lg_80"></div>                         
        </div>
    );
};

export default page;