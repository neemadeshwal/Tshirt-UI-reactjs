import React from "react";
import DisplayImage from "./display_img";
import Settings from "./settings"
export default function App (){
  return(
    <div className="main-container">
       <DisplayImage/>
       <Settings/>
    </div>
  )
}