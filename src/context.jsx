import React from "react";


const AppContext=React.createContext()
const AppProvider=({children})=>{
    const [displayedImg,setDisplayedImg]=React.useState('black-tshirt')
    const[text,setText]=React.useState({
        firstText:"Text here",
        secondText:"Text here"
    })
    const[textColor,setTextColor]=React.useState("white")
    const[textSize,setTextSize]=React.useState(70)
React.useEffect(()=>{
    console.log(displayedImg)
},[displayedImg])

    return(
        <AppContext.Provider value={{displayedImg,setDisplayedImg,text,setText,textColor,setTextColor,textSize,setTextSize}}>
            {children}
        </AppContext.Provider>

    )
}

const useGlobalContext = () => {
    return React.useContext(AppContext);
  };
  
  export { useGlobalContext, AppProvider };