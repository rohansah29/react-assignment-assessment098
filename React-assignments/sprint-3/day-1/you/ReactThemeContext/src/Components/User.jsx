import React from 'react'

export default function User({isDarkTheme,user}) {
    
    return (
        <div data-testid = "user" style={{color:isDarkTheme?"white":"black"}} >
            <input data-testid = "level" type = "range" style={{accentColor:isDarkTheme?"yellow":"blue"}} />
        </div>
    )
}
