import React from "react";


function Contactus() {
    return (
        <section class="form">
            <div class="form-container">
                <div class="title">Contact Us</div>
                <div class="content">
                    <form action="#">
                        <div class="user-details">
                            <div class="input-box">
                                <span class="details">First Name</span>
                                <input type="text" placeholder="Enter your first name" id="first-name" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Last Name</span>
                                <input type="text" placeholder="Enter your last name" id="last-name" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Email</span>
                                <input type="text" placeholder="Enter your email" id="email" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Phone Number</span>
                                <input type="text" placeholder="Enter your number" required />
                            </div>
                            <div class="gender-details">
                                <span class="details">Gender</span>
                                <div class="category">
                                    <select name="gender" id="gender" placeholder="Select Gender">
                                        <option value="default" selected>--Select Gender--</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="pnts">Prefer not to say</option>
                                    </select>
                                </div>
                            </div>

                            <div class="input-box">
                                <span class="details">
                                    Query
                                </span>
                                <textarea placeholder="Type your query..." id="message"></textarea>
                            </div>
                        </div>

                        <div class="button">
                            <input type="Button" value="Submit" onclick="sendMail()" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contactus;