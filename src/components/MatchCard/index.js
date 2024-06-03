// Write your code here
import './index.css'

const MatchCard = props => {
  const {data} = props

  const {competing_team, competing_team_logo, result, match_status} = data

  const matchStatusColor = match_status === 'Won' ? 'green' : 'red'
  return (
    <div className="matchCard">
      <img
        className="competingTeamLogo"
        src={competing_team_logo}
        alt={`competing team ${competing_team}`}
      />
      <p>{competing_team}</p>
      <p>{result}</p>
      <p className={matchStatusColor}>{match_status}</p>
    </div>
  )
}
export default MatchCard
