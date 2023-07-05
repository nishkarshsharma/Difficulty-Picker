import { MenuListItem } from "../MenuListItem/MenuListItem";
import { DIFFICULTIES } from "./constants";
import style from "./style.module.css";

export function MenuList(props)
{
    return (
        <div className={style.container}>
        {
            DIFFICULTIES.map((difficulty) => {
                return (
                    <MenuListItem 
                    isSelected = {props.difficulty === difficulty} 
                    onClick = {props.onItemClick} 
                    difficulty = {difficulty}
                    />
                )
            })
        }
        </div>
    );
}