import BreadCumb from '@/app/Components/Common/BreadCumb';
import Form2 from '@/app/Components/Form/Form2';
import Services3 from '@/app/Components/Services/Services3';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/img/page_heading_1.jpg"
                Title="Services"
            ></BreadCumb>
            <Services3></Services3>
            {/* <Form2></Form2> */}
        </div>
    );
};

export default page;