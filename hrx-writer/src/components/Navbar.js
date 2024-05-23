import React from 'react'

const Navbar = (props) => {
    return (
        <div>

            <nav className={`navbar navbar-expand-lg  navbar -${props.mode} bg-${props.mode}` }>

                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="/" >{props.name}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">{props.Title}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/about">{props.about}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/terms">{props.terms}</a>
                            </li>
                        
                           
                           
                        </ul>
                        <div className={ `form-check form-switch text-${props.mode==='light'?'dark':'light'}` }>
                                <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
                            </div>
                    </div>
                </div>

            </nav>

        </div>
    )
}

export default Navbar