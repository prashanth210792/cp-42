// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const className = isDarkTheme ? 'home-container-dark' : 'home-container'
      return (
        <div className={className}>
          <img className="home-image" src={imageUrl} alt="about" />
          <h1>About</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
