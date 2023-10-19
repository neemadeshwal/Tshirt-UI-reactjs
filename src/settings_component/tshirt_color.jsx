import React from "react";

import { useGlobalContext } from "../context";
import DisplayImage from "../components/display_img";

let TshirtArr=['black-tshirt','blue-tshirt','light-red-tshirt','olive-tshirt','red-tshirt','saffron-tshirt','yellow-tshirt']

export default function Tshirt_color(){
    const {displayedImg,setDisplayedImg}=useGlobalContext()
    const Tshirts=  TshirtArr.map((tshirt,index)=>{
        return(
              <img key={index} className="tshirt" onClick={handleClick} src={require(`../assets/${tshirt}.jpg`)} alt="tshirt-img"/>
        )
    })
    function handleClick(e){
       
        const pathArr=e.target.getAttribute("src").split('/')
        const tshirt_name=pathArr[pathArr.length-1].split('.')
        const filteredName=tshirt_name[0]
        console.log(filteredName)
        setDisplayedImg(filteredName)

    }

  
    return(
        <div className="change-tshirt-container">
        <h3>Change tshirt colors</h3>
        <div className="change-tshirt-settings">
        {Tshirts}
        </div>
        <hr/>
        </div>
    )
}