// Write your code here
// import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getTeamList()
  }

  getTeamList = async () => {
    const url = 'https://apis.ccbp.in/ipl'

    const response = await fetch(url)
    const statusCode = await response.status
    console.log(statusCode)
    const data = await response.json()
    console.log(data.teams)

    const updatedTeamList = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamList: updatedTeamList, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state
    console.log(teamList)
    return (
      <>
        {isLoading ? (
          <div className="loader" testid="loader">
            <Loader type="Oval" color="#000" height={50} width={50} />
          </div>
        ) : (
          <div className="homeBgContainer">
            <div className="logoContainer">
              <img
                className="iplLogo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1 className="logoText">IPL Dashboard</h1>
            </div>
            <ul className="teamCardContainer">
              {teamList.map(each => (
                <TeamCard key={each.id} teamData={each} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default Home
