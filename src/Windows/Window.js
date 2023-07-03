import WindowFooter from "./WindowFooter";
import WindowHeader from "./WindowHeader";
import { useState } from "react";

export default function Window(props){
    const [minimised,setMinimised] = useState("")
    const toggleMinimise = () => {
        setMinimised(prev=>{
            return prev===""?"minimised":""
        })
    }
    
    return(
        <div className="window">
            <WindowHeader 
            toggleMinimise={toggleMinimise} 
            isMinimised={minimised==="minimised"?true:false}
            clearContent={props.clearContent} 
            resetContent={props.resetContent}/>
            <main className={minimised}>
        {props.children}
            </main>
            <WindowFooter className={minimised}/>

        </div>
    )
}