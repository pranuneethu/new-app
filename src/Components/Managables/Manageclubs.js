import React from "react";

function Manageclubs() {
    return (
        <div className="Manageclubs">

            <section class="form" style={{ display: 'grid', justifyContent: 'space-evenly' }}>
                <div class="parent">
                    <div class="child">
                        <div class="form-container" >
                            <div class="title">Create Club</div>
                            <div class="content">
                                <form action="#">
                                    <div class="user-details">
                                        <div class="input-box">
                                            <span class="details">Club Name</span>
                                            <input type="text" placeholder="Enter Club name" required />
                                        </div>
                                        <div class="input-box">
                                            <span class="details">Club Image</span>
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
                                            <span class="details">Club Description</span>
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
export default Manageclubs;