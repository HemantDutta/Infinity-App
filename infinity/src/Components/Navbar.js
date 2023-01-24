import '../assets/css/Navbar.css';
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

export const Navbar = () => {
    const [query, setQuery] = useState('');

    const navigate = useNavigate();

    function getData(){

        if(query.length === 0){
            alert('Please enter a query first');
        }
        else {
            navigate(`/search/${query}`);
        }

    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{backgroundColor: '#000000'}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/'}><span className="text-uppercase brandName">Inf<span className="hdPrimary brandName">in</span>ity</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-lg-end mt-lg-0 mt-4" id="navbarSupportedContent">
                        {/*<ul className="navbar-nav me-auto mb-2 mb-lg-0">*/}
                        {/*    <li className="nav-item">*/}
                        {/*        <a className="nav-link active" aria-current="page" href="#">Home</a>*/}
                        {/*    </li>*/}
                        {/*    <li className="nav-item">*/}
                        {/*        <a className="nav-link" href="#">Link</a>*/}
                        {/*    </li>*/}
                        {/*    <li className="nav-item dropdown">*/}
                        {/*        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">*/}
                        {/*            Dropdown*/}
                        {/*        </a>*/}
                        {/*        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
                        {/*            <li><a className="dropdown-item" href="#">Action</a></li>*/}
                        {/*            <li><a className="dropdown-item" href="#">Another action</a></li>*/}
                        {/*            <li><hr className="dropdown-divider" /></li>*/}
                        {/*            <li><a className="dropdown-item" href="#">Something else here</a></li>*/}
                        {/*        </ul>*/}
                        {/*    </li>*/}
                        {/*    <li className="nav-item">*/}
                        {/*        <a className="nav-link disabled">Disabled</a>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                        <form className="d-flex">
                            <input className="form-control me-2 hdInput" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setQuery(e.target.value)}/>
                            <button className="btn hdbtn" type="button" onClick={getData}><i className="fa-solid fa-search" ></i></button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}