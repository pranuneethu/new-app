import React from "react";


function Logoperations() {
    return (
        <div className="Logoperaions">
            <section class="form" style={{display:"grid" , justifyContent: "space-evenly", paddingTop:'70px'}} >
                <div class="parent">
                    <div class="child">
                        <div class="form-container">
                            <div class="title">Sign-up</div>
                            <div class="content">
                                <form >
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
                                            <span class="details">Password</span>
                                            <input type="text" placeholder="Enter your password" id="password" required />
                                        </div>
                                    </div>

                                    <div class="button">
                                        <input type="button" value="Sign-up" onclick="sendMail()" />
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div class="child">
                        <div class="form-container">
                            <div class="title">Login</div>
                            <div class="content">
                                <form>

                                    <div class="user-details">
                                        <div class="input-box">
                                            <span class="details">Username</span>
                                            <input type="text" id="username" placeholder="Enter your Username" required />
                                        </div>


                                        <div class="input-box">
                                            <span class="details">Password</span>
                                            <input type="text" id="password" placeholder="Enter your password" required />
                                        </div>



                                    </div>
                                    <a href="/forgotPassword.html" style={{fontSize:'1rem '}}>Forgot Password</a>

                                    <div class="button">
                                        <input type="button" value="Login" onclick="validate()" />

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
export default Logoperations;