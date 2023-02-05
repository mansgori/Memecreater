import logo from "../images/logo.png"

export default function Navigation(){
    return(
        <div className="nav--container">
            <img src={logo} alt="" className="nav--image"/>
           
            <h4 className="nav--project">React Course Project</h4>
        </div>
    )
}