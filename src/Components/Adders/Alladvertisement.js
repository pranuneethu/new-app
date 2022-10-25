import React from "react";

function Addadvertisement() {
    return (
        <div className="Addadvertisement">

            <section class="form" style={{ display: 'grid', justifyContent: 'space-evenly' }}>
                <div class="parent">
                    <div class="child">
                        <div class="form-container" >
                            <div class="title">Add Advertisement</div>
                            <div class="content">
                                <form action="#">
                                    <div class="user-details">
                                        <div class="input-box">
                                            <span class="details">Advertisement Name</span>
                                            <input type="text" placeholder="Enter Advertisement name" required />
                                        </div>
                                        <div class="input-box">
                                            <span class="details">Advertisement Image</span>
                                            <input type="file" placeholder="" required />
                                        </div>
                                        <div class="gender-details">
                                            <span class="details">Category</span>
                                            <div class="category">
                                                <select name="gender" id="gender" placeholder="Select category">
                                                    <option value="default" selected>--Select Category--</option>
                                                    <option value="male">Category-1</option>
                                                    <option value="female">Category-2</option>
                                                    <option value="pnts">Category-3y</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="input-box">
                                            <span class="details">Advertisement Description</span>
                                            <textarea name="ription" placeholder="Enter the description" id="" cols="20" rows="2"></textarea>
                                        </div>




                                    </div>

                                    <div class="button">
                                        <button type="submit" >Add</button>

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

export default Addadvertisement;