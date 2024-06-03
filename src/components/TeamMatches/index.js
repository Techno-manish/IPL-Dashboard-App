// Write your code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamData: {}, isLoading: true}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const teamMatchesApiUrl = `https://apis.ccbp.in/ipl/${id}`

    const response = await fetch(teamMatchesApiUrl)
    const data = await response.json()

    if (response.ok === true) {
      this.setState({teamData: data, isLoading: false})
    }
  }

  render() {
    const {teamData, isLoading} = this.state
    const {team_banner_url, recent_matches, latest_match_details} = teamData
    console.log('isLoading')
    console.log(isLoading)
    console.log(recent_matches)

    return (
      <>
        {isLoading ? (
          <div className="loader" testid="loader">
            <Loader type="Oval" color="#000" height={50} width={50} />
          </div>
        ) : (
          <div className="teamDetailedView">
            <img
              className="teamBannerImage"
              src={team_banner_url}
              alt="team banner"
            />
            <p>Latest Matches</p>
            <LatestMatch data={latest_match_details} />
            <ul className="recentMatchCardContainer">
              {recent_matches.map(each => (
                <MatchCard key={each.id} data={each} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}
export default TeamMatches
