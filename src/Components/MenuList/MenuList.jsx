import { MenuListItem } from "../MenuListItem/MenuListItem";
import style from "./style.module.css"
export function MenuList(props)
{
    return (
        <div className={style.container}>
            <MenuListItem difficulty = "Low"/>
            <MenuListItem difficulty = "Medium"/>
            <MenuListItem difficulty = "High"/>
            <MenuListItem difficulty = "Insane"/>
        </div>
    );
}