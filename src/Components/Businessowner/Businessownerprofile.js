import React from "react";

function Businessownerprofile() {
    return (
        <div className="Businessownerprofile">
            <div class="parent_profile custom-parent">

                <div class="child_profile_left">
                    <div class="profile-fixed">
                        <div class="card-container">
                            <img class="round" src="https://randomuser.me/api/portraits/men/26.jpg" alt="user" />
                            <h2>Name</h2>
                            <h6>Arlington</h6>
                            <p>School Name </p>
                            <div class="buttons">
                                <button class="primary">
                                    Edit Profile
                                </button>
                                <button class="primary ghost" onclick="goBussiness()">
                                    Bussiness Details
                                </button>
                              

                            </div>
                            <div class="skills">
                                <h6>Additionbal Information</h6>
                                <ul>
                                    <li>Role: Business Owner</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

           
                    <div class="child_profile_right">
                        <div class="card-container" style={{padding:'15px 0 '}}>
                            <h5 class="header-bar"> <button class="primary"><a href="addAdvertisement.html">Add</a></button><strong>Advertisements</strong>
                                <button class="primary ghost1">Delete</button>
                            </h5>
                        </div>
                        <div class="wrapper-grid">

                            <div class="container">
                                <div class="select-checkbox-div">

                                    <input type="checkbox" name="select-checkbox" id="" class="select-checkbox"/>
                                </div>
                                <div class="card" >
                                    <img src="post.png" class="item-images" alt=""/>
                                </div>
                            </div>
                            <div class="container">
                                <div class="select-checkbox-div">

                                    <input type="checkbox" name="select-checkbox" id="" class="select-checkbox"/>
                                </div>
                                <div class="card" >
                                    <img src="post.png" class="item-images" alt=""/>
                                </div>
                            </div>


                        </div>
                        <div class="card-container" style={{padding:'15px 0 '}}>
                            <h5 class="header-bar"> <button class="primary"><a href="addProduct.html">Add</a> </button><strong>Products</strong>
                                <button class="primary ghost1">Delete</button>
                            </h5>
                        </div>


                        <div class="wrapper-grid">
                            <div class="container">
                                <div class="select-checkbox-div">

                                    <input type="checkbox" name="select-checkbox" id="" class="select-checkbox"/>
                                </div>
                                <div >
                                    <img src="bat.png" class="item-images" alt=""/>
                                </div>


                            </div>
                            <div class="container">
                                <div class="select-checkbox-div">

                                    <input type="checkbox" name="select-checkbox" id="" class="select-checkbox"/>
                                </div>
                                <div >
                                    <img src="food.png" class="item-images" alt=""/>
                                </div>


                            </div>


                        </div>


                    </div>
            </div>
        </div>
    )
}

export default Businessownerprofile;