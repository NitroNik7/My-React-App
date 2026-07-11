import "./Navbar.css"

function Navbar() {
    return (
        <nav className="mraNavbar">
            {/* <label htmlFor="mraSearchBox">Search</label> */}
            <img src="null" alt="" />
            <input id="mraSearchBox" className="form-input" type="text" placeholder="Search /" />  {/* TODO Type / to Search */}
            <ul>
                <li>Todos</li>
                <li>Posts</li>
                <li>Albums</li>
            </ul>
        </nav>
    );
}

export default Navbar