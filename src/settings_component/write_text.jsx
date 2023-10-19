import React from "react";
import { useGlobalContext } from "../context";



export default function WriteText(){

const{setText,text,setTextColor,textColor,textSize,setTextSize}=useGlobalContext()
    function handleChange(e){
        e.preventDefault()
   
const name=e.target.name
const value=e.target.value
setText((prevVal)=>
(
{...prevVal,[name]:value}
)
)
  
    }
    React.useEffect(()=>{
        const defaultColor=document.getElementById('white')
        defaultColor.checked=true

        const allColor=document.querySelectorAll('.color-btn')
        allColor.forEach((color)=>{
            
            color.addEventListener('click',()=>{
        defaultColor.removeAttribute("checked")

            })
        })
        
    },[])
 

function handleColorChange(e){
    console.log(e.target.value)
    // if(e.target.value==='white'){
    //     console.log("fjkadsjfl")
    //     e.target.checked=true
    //     setTextColor(e.target.value)
    // }
    if(e.target.checked){
        setTextColor(e.target.value)
    }
   
}
function handleSliderChange(e){
  setTextSize(e.target.value)

    
}
   
      
       
    return(
        <div className="write-text-container">
            <h1>Write Text</h1>
            <div className="first-upper-text-container">
                <p>Upper Text</p>
               <input className="first-upper-input" name="firstText" onChange={handleChange}placeholder="uppertext" value={text.firstText}/>
               <div className="underline"></div>

            </div>
            <div className="second-upper-text-container" >
                <p>Upper Text</p>
                <input className="second-upper-input" name="secondText" onChange={handleChange} placeholder="uppertext" value={text.secondText}/>
                <div className="underline"></div>
            </div>
            <div className="text-settings-container">
                <div className="text-size-container">
                    <p>Text size</p>
                    <div class="slidecontainer">
                   <input onChange={handleSliderChange} type="range" min="1" max="100"  class="slider" id="myRange"/>
                    </div>
                </div>

                <div className="text-color-container">
                    <p>Text color</p>
                    <div className="all-text-colors">
                        <form >
                        <input onChange={handleColorChange}  type="radio"  className="color-btn"  id='black'name="color" value="black"/>
                        <label htmlFor="black">black</label><br/>
                        <input  onChange={handleColorChange}type="radio"   className="color-btn" id='blue' name="color" value="blue"/>
                        <label htmlFor="blue">blue</label><br/>
                        <input onChange={handleColorChange}  type="radio"  className="color-btn"  id='red' name="color" value="red"/>
                        <label htmlFor="red">red</label><br/>
                        <input onChange={handleColorChange} type="radio"   className="color-btn" id='white' name="color" value="white" />
                        <label htmlFor="white">white</label><br/>
                        </form>
                    </div>
                </div>
               
                  
            </div>

  


        </div>
    )
}