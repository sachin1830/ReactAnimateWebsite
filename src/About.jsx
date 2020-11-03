import React from 'react';
import bg_img from '../src/Images/development1.png'
import Common from './Common';
const About = () =>{
    return(
        <>
        <Common 
                heading_name="Welcome to about page of"
                btn_text="contact us"
                visit="/contact"
                imgsrc={bg_img}
            />
        </>
    );
}

export default About;