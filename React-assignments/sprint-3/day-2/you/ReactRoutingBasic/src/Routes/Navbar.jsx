import {NavLink} from "react-router-dom";

function Navbar() {
    const links=[
        {
            to:"/",
            label:"Home"
        },
        {
            to:"/about",
            label:"About"
        },
        {
            to:"/contact",
            label:"Contact"
        },
        {
            to:"/products",
            label:"Products"
        }
    ]
    return(
        <div className = "navbar" style={{display:"flex",alignItems:"center",justifyContent:"space-evenly"}} >
           {
            links.map((link)=>(
                <NavLink key={link.to} to={link.to}>{link.label}</NavLink>
            ))
           }
        </div>
    )
}

export { Navbar }