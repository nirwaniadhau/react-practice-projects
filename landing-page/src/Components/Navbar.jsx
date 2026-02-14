
import "../App.css";
function Navbar() {
    return(<>
          <nav>
      <div>
        <img src="../public/brand_logo.png" alt="brand logo" />
      </div>

      <ul>
        <li href="#">Home</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button className="red-btn">
        Login
      </button>
    </nav>
    </>
      
    )

}

export default Navbar;