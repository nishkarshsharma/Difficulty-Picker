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
        // console.log(isHovered);
        if(isHovered)
        {
            return "#a5e9ff";
        }
        else
        {
            if(props.isSelected)
            {
                return "#26baea";
            }

            else{
                return "#eff0ef";
            }
        }
    };

    const onItemClick = () =>
    {
        props.onClick(props.difficulty)
    };

    return (
            <div onClick = {onItemClick} 
            className={style.container} 
            onMouseEnter={activateHover} onMouseLeave={deactivateHover}
            style = {{backgroundColor: getBackgroundColor()}}
            
            >
                Set To: {props.difficulty}
            </div>
    );
}