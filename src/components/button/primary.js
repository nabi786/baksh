
// import { Button} from "@mui/material";
import "./index.scss";



function PrimaryButton(prop){

    return (
        <>
        <button className="mainButton" onClick={prop.action}>
                {prop.name} 
        </button>
        </>
    )
}

// secondary button
function SecondaryButton({name,isFooterButton , action}){

    
    return (
        <>
        {isFooterButton ? 
         <button className="active footerButton" onClick={action}>
             {name} 
        </button>
        :
        <button className="active" onClick={action}>
                {name} 
        </button>
        }
        </>
    )
}


export default PrimaryButton;
export {SecondaryButton}