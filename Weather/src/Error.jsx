import "./info.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadCry } from "@fortawesome/free-solid-svg-icons";

export default function Error({err}){
    return (
        <div id="error">
            <div>
            <FontAwesomeIcon icon={faFaceSadCry} style={{color: "#FFD43B",}} />
             <div>{err.cod} &nbsp; {err.message}</div>
            </div>
        </div>
    )
}