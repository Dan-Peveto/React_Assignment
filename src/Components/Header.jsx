function Header() {
    const headerStyles = {
        borderBottom: '5px solid'
    }
    return (
        <header style={headerStyles}>
            <div className='container'>
                <h1>Daniel Peveto</h1>
                <p>CS230 Week 5 Assignment</p>
            </div>
        </header>
    )
}

export default Header