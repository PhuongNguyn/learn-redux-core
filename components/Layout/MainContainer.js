import { useSelector } from "react-redux"

const MainContainer = () => {
    const themeReducer = useSelector((state) => state.themeReducer)
    
    let background = "white"

    if(themeReducer.theme == "red"){
        background = "red"
    }else if(themeReducer.theme == "orange"){
        background = "orange"
    } else if(themeReducer.theme == "black"){
        background = "black"
    } else{
        background = "white"
    }

    return (
        <div className="main-container" style={{backgroundColor: background}}>

        </div>
    )
}

export default MainContainer