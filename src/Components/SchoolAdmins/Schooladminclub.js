import React from "react";

function Schooladminclub() {

    return (
        <div className="Schooladminclub">
            <section class="home-section">
                <nav style={{ height: '10%', backgroundColor: '#e7e3e3' }}>
                    <div class="sidebar-button">
                        <i class='bx bx-menu sidebarBtn'></i>
                        <span class="dashboard"></span>
                    </div>

                    <div class="profile-details" id="profile-details">

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPDheuafnrCB0q-VE5n3RLRREX5dN3JrdJzJF76tz0y80fP4uNM0ZTtXbXWA-e2yuWKKk&usqp=CAU"
                            alt="" />
                        <a href="login.html" class="admin_name">School Admin</a>
                        <i class='bx bx-log-out' style={{ paddingLeft: '15px' }} >
                            <a href="login.html"></a></i>

                    </div>
                </nav>

                <div class="home-content">




                    <div class="sales-boxes">
                        <div class="recent-sales box">
                            <div class="title-container">
                                <div class="title">Club Members details

                                </div>
                                <div class="button-holder">
                                    <div class="button">
                                        <a href="#">Generate Report</a>
                                    </div>
                                    <div class="button">
                                        <a href="#">See All</a>
                                    </div>
                                </div>
                            </div>


                            <div class="sales-details">

                                <ul class="details">
                                    <li class="topic">Member Name Name</li>
                                    <li><a href="#">Alex Doe</a></li>
                                    <li><a href="#">David Mart</a></li>
                                    <li><a href="#">Roe Parter</a></li>
                                    <li><a href="#">Diana Penty</a></li>
                                    <li><a href="#">Martin Paw</a></li>
                                    <li><a href="#">Doe Alex</a></li>
                                    <li><a href="#">Aiana Lexa</a></li>
                                    <li><a href="#">Rexel Mags</a></li>
                                    <li><a href="#">Tiana Loths</a></li>
                                </ul>
                                <ul class="details">
                                    <li class="topic">College Name</li>
                                    <li><a href="#">UT Arlington</a></li>
                                    <li><a href="#">UTD</a></li>
                                    <li><a href="#">UNT</a></li>
                                    <li><a href="#">University of South FLorida</a></li>
                                    <li><a href="#">UT Arlington</a></li>
                                    <li><a href="#">UTD</a></li>
                                    <li><a href="#">UNT</a></li>
                                    <li><a href="#">University of South FLorida</a></li>
                                    <li><a href="#">University of South FLorida</a></li>
                                </ul>
                                <ul class="details">
                                    <li class="topic">Role</li>
                                    <li><a href="#">School Admin</a></li>
                                    <li><a href="#">School Admin</a></li>
                                    <li><a href="#">School Admin</a></li>
                                    <li><a href="#">Student</a></li>
                                    <li><a href="#">Student</a></li>
                                    <li><a href="#">Business Owner</a></li>
                                    <li><a href="#">School Admin</a></li>
                                    <li><a href="#">Student</a></li>
                                    <li><a href="#">Business Owner</a></li>
                                </ul>
                                <ul class="details">
                                    <li class="topic">Action</li>
                                    <li>
                                        <div class="button">
                                            <a href="#">update</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="button">
                                            <a href="#">update</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="button">
                                            <a href="#">update</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="button">
                                            <a href="#">update</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="button">
                                            <a href="#">update</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="button">
                                            <a href="#">update</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="button">
                                            <a href="#">update</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="button">
                                            <a href="#">update</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="button">
                                            <a href="#">update</a>
                                        </div>
                                    </li>
                                </ul>

                            </div>

                        </div>


                    </div>

                </div>

                <div class="chat-bar-collapsible">
                    <button id="chat-button" type="button" class="collapsible">Hyper Chat
                        <i id="chat-icon" style="color: #fff;" class="fa fa-fw fa-comments-o"></i>
                    </button>

                    <div class="content">
                        <section class="chat-right-pane floater">
                            <div class="contacts">
                                <div>
                                    <li class="person"> <img src="profile.png" alt="" class="profile-pic" /> person</li>
                                    <li class="person"> <img src="user.png" alt="" class="profile-pic" />person</li>
                                    <li class="person"> <img src="profile.png" alt="" class="profile-pic" />person</li>
                                    <li class="person"><img src="user.png" alt="" class="profile-pic" />person</li>
                                    <li class="person"> <img src="profile.png" alt="" class="profile-pic" />person</li>
                                </div>
                            </div>
                        </section>
                        <div class="full-chat-block floater">

                            <div class="outer-container">
                                <div class="chat-container">

                                    <div id="chatbox">
                                        <h5 id="chat-timestamp"></h5>
                                        <p id="botStarterMessage" class="botText"><span>Loading...</span></p>
                                    </div>

                                    <div class="chat-bar-input-block">
                                        <div id="userInput">
                                            <input id="textInput" class="input-box" type="text" name="msg"
                                                placeholder="Tap 'Enter' to send a message" />
                                            <p></p>
                                        </div>

                                        <div class="chat-bar-icons">
                                            <i id="chat-icon" style="color: crimson;" class="fa fa-fw fa-heart"
                                                onclick="heartButton()"></i>
                                            <i id="chat-icon" style="color: #333;" class="fa fa-fw fa-send"
                                                onclick="sendButton()"></i>
                                        </div>
                                    </div>

                                    <div id="chat-bar-bottom">
                                        <p></p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </div>
    )

}

export default Schooladminclub;