import { useState } from "react";
import style from "./style.module.css"
export const MenuListItem = (props) => {

    const [isHovered, setIsHover] = useState(false);
    
    const activateHover = () =>
    {
        setIsHover(true);
    };

    const deactivateHover = () =>
    {
        setIsHover(false);
    };

    const getBackgroundColor = () =>
    {
        console.log(isHovered);
        if(isHovered)
        {
            return "#a5e9ff";
        }
        else
        {
            return "#eff0ef";
        }
    };

    return (
            <div className={style.container} 
            onMouseEnter={activateHover} onMouseLeave={deactivateHover}
            style = {{backgroundColor: getBackgroundColor()}}
            
            >
                Set To: {props.difficulty}
            </div>
    );
}