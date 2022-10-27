import { BrowserRouter, Link, Routes } from 'react-router-dom'

const liStyle ={
    display: 'inline-block',
    padding: '10px',
    textDecoration: 'none',
}

function Nav() {
    return (
        <nav>
            <ul style={{
                listStyleType: 'none',
                display: 'flex',
                justifyContent: 'start',
                flexDirection: 'row',
                
            }}>
                <li style={liStyle}>
                    <a id='home' href="/">Home</a>
                
                </li>
                <li style={liStyle}>
                    <a id='log' href="/login">Login</a>
                </li>
                <li style={liStyle}>
                    <a id='reg' href="/register">Register</a>
                </li>
                <li style={liStyle}>
                    <a href="/bookView">Books View</a>
                </li>
                <li style={liStyle}>
                    <a href="/booksInsert">Insert</a>
                </li>
            </ul>
        </nav>
    )
}


export default Nav