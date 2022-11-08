// Write your code here
import './index.css'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const webSiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const className = isDarkTheme ? 'nav-bar-dark' : 'nav-bar-light'

      /* const changeTheme = () => {
        toggleTheme()
      } */

      return (
        <nav className={className}>
          <img className="image" src={webSiteLogoUrl} alt="website logo" />
          <ul className="ul-container">
            <Link to="/" className="para">
              <li>Home</li>
            </Link>
            <Link to="/about" className="para">
              <li>About</li>
            </Link>

            {/* <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li> */}
          </ul>
          <button
            testid="theme"
            className="btn"
            type="button"
            onClick={toggleTheme}
          >
            <img className="image" src={themeUrl} alt="theme" />
          </button>
          {/* <img
            testid="theme"
            type="button"
            onClick={toggleTheme}
            className="image"
            src={themeUrl}
            alt="theme"
          /> */}
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
