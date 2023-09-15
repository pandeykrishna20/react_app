// import "./styles.css"
// import "./HeadingOne.css"
import headStyle from "./HeadingOne.module.css"
function HeadingOne(){
    return(
        <>
        <div className="wrapper">
            <h1>Heading1 krishna</h1>
            <button className={headStyle.headbtn}>button1</button>

        </div>
        </>
    )
}

export default HeadingOne;