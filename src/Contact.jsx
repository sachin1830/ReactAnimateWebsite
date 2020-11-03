import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="my-5">
                <div className="container container_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form>
                                <div class="form-group my-3">
                                    <label for="forfullname">Full Name:</label>
                                    <input type="text" class="form-control" id="forfullname" placeholder="Enter your Fullname" required/>
                                </div>
                                <div class="form-group my-3">
                                    <label for="forphonenumber">Phone:</label>
                                    <input type="number" class="form-control" id="forphonenumber" placeholder="Enter your Phone number" required/>
                                </div>
                                <div class="form-group my-3">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Email address" required />
                                </div>
                                <div class="form-group my-3">
                                    <label for="formessage">Message</label>
                                    <textarea class="form-control" id="formessage" rows="3" required></textarea>
                                </div>
                                <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">
                                Submit Form
                                </button>

                                </div>
                            </form>

                        </div>
                    </div>
                    <div>


                    </div>

                </div>

            </div >
        </>
    );
}

export default Contact;