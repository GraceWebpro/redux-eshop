import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Nav() {
    return (
        <div>
            {/*Main Navigation */}
<header className="mb-10">

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
      <i className="fas fa-bars"></i>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <a className="navbar-brand mt-2 mt-lg-0" href="#link">
        <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height="15" alt="MDB Logo"
          loading="lazy" />
      </a>
    {/*Left links */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="link">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="link">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#link">Projects</a>
        </li>
      </ul>
    </div>
  {/* Collapsible wrapper */}

    {/* Right elements*/}
    <div className="d-flex align-items-center">
      {/* Icon */}
      <div className="text-reset me-3">
        <ShoppingCartIcon />
      </div>

      {/* Notifications */}
      <div className="dropdown">
        <a className="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button"
          data-mdb-toggle="dropdown" aria-expanded="false">
          <i className="fas fa-bell"></i>
          <span className="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
          <li>
            <a className="dropdown-item" href="#linnk">Some news</a>
          </li>
          <li>
            <a className="dropdown-item" href="#link">Another news</a>
          </li>
          <li>
            <a className="dropdown-item" href="#link">Something else here</a>
          </li>
        </ul>
      </div>
     {/*Avatar */}
     <div className="dropdown">
        <a className="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuAvatar"
          role="button" data-mdb-toggle="dropdown" aria-expanded="false">
          <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" height="25"
            alt="img" loading="lazy" />
        </a>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
          <li>
            <a className="dropdown-item" href="#link">My profile</a>
          </li>
          <li>
            <a className="dropdown-item" href="#link">Settings</a>
          </li>
          <li>
            <a className="dropdown-item" href="#link">Logout</a>
          </li>
        </ul>
      </div>
    </div>
    {/*Right elements */}
  </div>
  {/* Container wrapper */}
</nav>
{ /* navbar*/}

  </header>
        </div>
    )
}

export default Nav;