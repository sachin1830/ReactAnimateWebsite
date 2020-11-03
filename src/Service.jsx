import React from 'react';
import Data from './Data';
import Card from './Card';

const Service = () => {
    return (
        <>
            <div className="container-fluid">
            <div className="my-5">
                <h2 className="text-center">Our services</h2>
            </div>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-3">
                        {
                            Data.map( (value,index) =>{

                               return <Card 
                                    imgsrc={value.imgsrc}
                                    title={value.title}
                                    key={index}
                                />
                            })
                        }
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default Service;