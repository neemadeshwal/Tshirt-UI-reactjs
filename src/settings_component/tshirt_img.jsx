import React from "react";

export default function ChangeImg(){
    return(
        <div className="change-img-container">
            <h1>Change Image</h1>
            <div className="choose-file-container">
            <div className="choose-files">
            <button className="choose-file-btn">Choose File</button>
            <p>No file Chosen</p>
            </div>
            <div className="upload-img"></div>
            </div>
            <button className="upload-btn">Upload Now</button>
            <hr/>
        </div>
    )
}