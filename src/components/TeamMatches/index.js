// Write your code here
import {Component} from 'react'
import './index.css'
import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {teamData: {}}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }

    this.setState({teamData: updatedData})
  }

  render() {
    const {teamData} = this.state
    // console.log(teamData)
    const {teamBannerUrl, latestMatchDetails} = teamData
    return (
      <div className="teamDetailedView">
        <img
          className="teamBannerImage"
          src={teamBannerUrl}
          alt="teamBannerImage"
        />
        <p>Latest Matches</p>
        <LatestMatch data={latestMatchDetails} />
      </div>
    )
  }
}
export default TeamMatches
