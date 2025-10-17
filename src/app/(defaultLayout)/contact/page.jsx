import BreadCumb from '@/app/Components/Common/BreadCumb';
import Contact from '@/app/Components/Contact/Contact';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/img/page_heading_1.jpg"
                Title="Contact"
            ></BreadCumb> 
            <Contact></Contact>             
        </div>
    );
};

export default page;