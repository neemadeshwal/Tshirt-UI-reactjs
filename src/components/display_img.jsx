import React from "react";
import { useGlobalContext } from "../context";

export default function DisplayImage(){
   const{displayedImg,text,textColor,textSize}=useGlobalContext()
    const img=require(`../assets/${displayedImg}.jpg`)
    console.log(textColor)
    return (
        <div className="main-display-container">
        <div className="displayImg-container">
             <img className="tshirt-img" src={img} alt="tshirt-img"/>
                <p  style={{color:textColor,fontSize:`${(textSize/2)}px`}} className="upper-text">{text.firstText}</p>
                <div className="set-img-container" >
                   <div className="set-img">
                      400×300
                   </div>
                </div>
                <p className="lower-text" style={{color:textColor,fontSize:`${textSize/2}px`}}>{text.secondText}</p>
             



           </div>
        </div>
    )
}