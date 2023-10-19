import React from "react";
import Tshirt_Img from "../settings_component/tshirt_img";
import Tshirt_color from "../settings_component/tshirt_color";
import Write_text from "../settings_component/write_text"
export default function Settings(){


    return(
        <div className="settings-container">
        <h1>Settings</h1>
        <Tshirt_color/>
        <Tshirt_Img/>
        <Write_text/>

       
        </div>
    )
}