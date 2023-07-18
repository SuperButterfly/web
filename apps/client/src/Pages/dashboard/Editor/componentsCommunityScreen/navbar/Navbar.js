import './navbar.css'

const Navbar = ()=>{

    return(
        <div className={"navbarContainer"}>
            <div className='searchBar'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input className={"inpNavbar"} type="text" />
            </div>
        </div>
    )
}

export default Navbar