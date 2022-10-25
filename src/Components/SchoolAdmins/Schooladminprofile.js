import React from "react";

function Schooladminprofile() {

    return (
        <div className="Schooladminprofile">
            <section class="profile">

                <div class="parent_profile custom-parent">

                    <div class="child_profile_left">
                        <div class="profile-fixed">
                            <div class="card-container">
                                <img class="round" src="https://randomuser.me/api/portraits/men/8.jpg" alt="user" />
                                <h2>Name</h2>
                                <h6>Arlington</h6>
                                <p>School Name </p>
                                <div class="buttons">
                                    <button class="primary">
                                        Edit Profile
                                    </button>
                                    <button class="primary" onclick="dashboardNavigation()">
                                        Dashboard
                                    </button>
                                    <button class="primary ghost" onclick="manageClubs()">
                                        Manage Clubs
                                    </button>


                                </div>
                                <div class="skills">
                                    <h6>Additionbal Information</h6>
                                    <ul>
                                        <li>Role: School Admin</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="child_profile_right">
                        <div class="card-container" style={{padding: '15px 0' }}>
                            <h5 class="header-bar"> <button class="primary"><a href="addPost.html">Add</a></button><strong>Posts</strong>
                                <button class="primary ghost1">Delete</button>
                            </h5>
                        </div>
                        <div class="wrapper-grid">

                            <div class="container">
                                <div class="select-checkbox-div">

                                    <input type="checkbox" name="select-checkbox" id="" class="select-checkbox" />
                                </div>
                                <div class="card" >
                                    <img src="post.png" class="item-images" alt="" />
                                </div>
                            </div>
                            <div class="container">
                                <div class="select-checkbox-div">

                                    <input type="checkbox" name="select-checkbox" id="" class="select-checkbox" />
                                </div>
                                <div class="card" >
                                    <img src="post.png" class="item-images" alt="" />
                                </div>
                            </div>


                        </div>



                        <div class="card-container" style={{padding: '15px 0' }}>
                            <h5 class="header-bar"> <button class="primary">Join</button><strong>Clubs</strong>
                                <button class="primary ghost1">Leave</button>
                            </h5>
                        </div>

                        <div class="wrapper-grid">

                            <div class="container">
                                <div class="select-checkbox-div">
                                    <input type="checkbox" name="select-checkbox" id="" class="select-checkbox" />
                                </div>
                                <div class="card">
                                    <img src="pd_club.png" class="item-images" alt="" />
                                </div>
                            </div>
                            <div class="container">
                                <div class="select-checkbox-div">

                                    <input type="checkbox" name="select-checkbox" id="" class="select-checkbox" />
                                </div>
                                <div class="card">
                                    <img src="hh_club.png" class="item-images" alt="" />
                                </div>
                            </div>

                        </div>










                    </div>
                </div>

            </section></div>
    )

}

export default Schooladminprofile;