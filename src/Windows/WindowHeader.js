export default function WindowHeader(props){
    
    return(
        <header>
            <button onClick={props.toggleMinimise}>
                {props.isMinimised?"MAXIMIZE":"MINIMIZE"}
            </button>
            {props.clearContent&&<button onClick={props.clearContent}>
                CLEAR
            </button>}
            {props.resetContent&&<button onClick={props.resetContent}>
                RESET
            </button>}
        </header>
    )
}