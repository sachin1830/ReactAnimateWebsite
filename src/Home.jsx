import React from 'react';

import bg_img from '../src/Images/development2.png'
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common 
                heading_name="Grow your bussiness in digital platforms with"
                btn_text="Get Started"
                visit="/service"
                imgsrc={bg_img}
            />
        </>
    );
}

export default Home;