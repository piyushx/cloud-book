import { useRef , useState} from 'react';
import { Link } from 'react-router-dom'


const Navbar = () => {

    const signupref = useRef(null)
    const loginref = useRef(null)

    const signupModalOpen = (event) => {
        event.preventDefault(); 
        signupref.current.click()
    };

    const loginModalOpen = (event) => {
        event.preventDefault(); 
        loginref.current.click()
    }

    const [login, setlogin] = useState({email: "", password: ""})

    const onChange = (event) => {
        setlogin({...login, [event.target.name] : event.target.value})
        
    }

    const onLoginButton = () => {
        console.log(login);
    }

    return (
        <div>
            <div className="LoginModal">
            <button type="button" ref={loginref} class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Login to Cloud-Book</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="container">
                                <div class="mb-3">
                                    <label for="email" class="form-label">Enter Email Address: </label>
                                    <input onChange={onChange} type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Enter Password: </label>
                                    <input onChange={onChange} type="password" class="form-control" name="password" id="password" />
                                </div>

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={onLoginButton}>Login to cloud-book</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="SignupModal">
            <button type="button" ref={signupref} class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#loginModal">
                Launch demo modal
            </button>

            <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Sign-up for Cloud-book</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="container">
                            <div class="mb-3">
                                    <label for="name" class="form-label">Enter your Full name: </label>
                                    <input type="text" onChange={onChange} class="form-control" id="name" name="name" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Enter Email Address: </label>
                                    <input type="email" onChange={onChange} class="form-control" id="email" name="email" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="Description" class="form-label">Enter Password: </label>
                                    <input type="password" onChange={onChange} class="form-control" name="eDescription" id="eDescription" />
                                </div>

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" >Sign-up now</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Cloud-book</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/allNotes">View All</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/create">Create New Note</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </li>

                        </ul>
                    </div>

                    <button type="submit" class="btn btn-secondary mx-2" onClick={loginModalOpen}>Login</button>
                    <button type="submit" class="btn btn-secondary mx-2" onClick={signupModalOpen}>Signup</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
