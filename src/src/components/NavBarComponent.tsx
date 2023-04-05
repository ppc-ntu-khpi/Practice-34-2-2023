const NavBarComponent = () => {
    return(
        <nav className='nav'>
            <div className='nav-logo'>
                <img className='nav-logo-img' src='../public/PPFK_logo.png' alt='Logo image'/>
                <div className='nav-logo-text'>ППФК</div>
            </div>
            <ul className='nav-list'>
                <li><a href=''>Коледж</a></li>
                <li><a href=''>Довідка</a></li>
            </ul>
        </nav>
    )
}

export default NavBarComponent