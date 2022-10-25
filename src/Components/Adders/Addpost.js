import React from "react";

function Addpost() {
    return (
        <div className="Addpost">

            <section class="form" style={{ display: 'grid', justifyContent: 'space-evenly' }}>
                <div class="parent">
                    <div class="child">
                        <div class="form-container" >
                            <div class="title">Add Post</div>
                            <div class="content">
                                <form action="#">
                                    <div class="user-details">
                                        <div class="input-box">
                                            <span class="details">Post Name</span>
                                            <input type="text" placeholder="Enter Post name" required />
                                        </div>
                                        <div class="input-box">
                                            <span class="details">Post Image</span>
                                            <input type="file" placeholder="" required />
                                        </div>

                                        <div class="input-box">
                                            <span class="details">Post Description</span>
                                            <textarea name="ription" placeholder="Enter the description" id="" cols="20" rows="2"></textarea>
                                        </div>




                                    </div>

                                    <div class="button">
                                        <button type="submit" onclick="add()">Add</button>

                                    </div>
                                    <div class="button">

                                        <button >Go Back</button>

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

export default Addpost;