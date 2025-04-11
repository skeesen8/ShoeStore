import Logout from "./Logout";
import './index.css'


function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="logout-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/shoes">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/sell">Sell Shoes</a>
        </li>
        <Logout/>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;


