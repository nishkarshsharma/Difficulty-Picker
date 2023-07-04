import style from "./style.module.css"
export function DisplayDisfficulty(props)
{
    return(
        <>
            <div className={style.container}>
                {props.difficulty ? 
                `Difficulty is set to ${props.difficulty}` 
                :"Please choose the Difficulty"}
            </div>
        </>
    )

}