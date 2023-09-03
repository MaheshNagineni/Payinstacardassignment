// Write your code here
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="left-side-content">
      <p className="nav-text">Home</p>
      <p className="nav-text">About</p>
      <p className="nav-text">Schedules</p>
      <p className="nav-text">Membership</p>
      <p className="nav-text">Pricing</p>
    </div>

    <div className="right-side-content">
      <p className="nav-offers">Offers</p>
      <button type="button" className="nav-button">
        Courses
      </button>
    </div>
  </nav>
)

export default Header
