// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log(isDarkTheme)

      const className = isDarkTheme ? 'home-container-dark' : 'home-container'
      return (
        <div className={className}>
          <img
            className="home-image"
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="home"
          />
          <h1>Lost your way</h1>
          <p>We cannot seem to find the page</p>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
