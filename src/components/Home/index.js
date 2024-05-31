// Write your code here
// import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamList: []}

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
    this.setState({teamList: updatedTeamList})
  }

  render() {
    const {teamList} = this.state
    console.log(teamList)
    return (
      <div className="homeBgContainer">
        <div className="logoContainer">
          <img
            className="iplLogo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="logoText">IPL Dashboard</h1>
        </div>
        <div className="teamCardContainer">
          {teamList.map(each => (
            <TeamCard key={each.id} teamData={each} />
          ))}
        </div>
      </div>
    )
  }
}

export default Home
