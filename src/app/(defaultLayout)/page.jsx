import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import About1 from '../Components/About/About1';
import Services1 from '../Components/Services/Services1';
import Choose1 from '../Components/Choose/Choose1';
import BeforeAfter from '../Components/BeforeAfter/BeforeAfter';
import Project1 from '../Components/Project/Project1';
import Contact1 from '../Components/ContactInfo/Contact1';
import Testimonial1 from '../Components/Testimonial/Testimonial1';
import Pricing1 from '../Components/Pricing/Pricing1';
import Process from '../Components/Process/Process';
import Blog3 from '../Components/Blog/Blog3';
import Brand1 from '../Components/Brand/Brand1';
import Counter1 from '../Components/Counter/Counter1';

const page = () => {
    return (
        <div>
            <HeroBanner1></HeroBanner1>
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
            <Services1></Services1>   
            
            <Process></Process>
            <Counter1></Counter1>
            <Choose1
                img1="/assets/img/feature_img_1.webp"
                content="Proper wheel alignment and balancing are essential for safe driving, better fuel efficiency and extended tyre life. Our expert technicians ensure your wheels are perfectly aligned."
                btnName="Read more"
                btnUrl="/about"
                img2="/assets/img/feature_img_2.webp"
                img3="/assets/img/feature_img_3.webp"
            ></Choose1> 
            {/* <BeforeAfter 
                title="Recent Completed Projects"
                subTitle="Before & after"
                bgImg="/assets/img/before_after_bg_1.svg"
                beforeImg="/assets/img/after_img_1.jpg"
                afterTitle="After"
                afterImg="/assets/img/before_img_1.jpg"
                beforeTitle="Before"
            ></BeforeAfter>  */}
            {/* <Project1></Project1>  */}
            {/* <Testimonial1
                subtitle="Testimonial"
                title="What our clients say <br> About Us"
                bgImg="/assets/img/testimonial_bg_1.jpg"
            ></Testimonial1>   */}
            {/* <Pricing1></Pricing1> */} 
            {/* <Brand1></Brand1> */}
            <Contact1
                Title="Contact Information"
                subTitle="Visit our tyre centre in Wembley for professional tyre fitting, wheel alignment, balancing and puncture repair services. Quality guaranteed."
                address="416 Ealing Rd, Wembley HA0 1JQ"
                email="zeeautotyres@gmail.com"
                number="+44 777 693 0794 <br/> +44 757 818 2552"
                clientNumber="800+"
                img="/assets/img/contact_img_1.webp"
                client="Happy Clients"
                subtitle2="Contact us"
                title2="Book and Appointment"
            ></Contact1>
            {/* <Blog3></Blog3>                                                   */}
        </div>
    );
};

export default page;