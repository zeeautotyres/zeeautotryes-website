import BreadCumb from '@/app/Components/Common/BreadCumb';
import Team2 from '@/app/Components/Team/Team2';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/img/page_heading_1.jpg"
                Title="Team"
            ></BreadCumb>    
            <Team2></Team2>             
        </div>
    );
};

export default page;