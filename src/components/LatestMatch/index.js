// Write your code here
import './index.css'

const LatestMatch = props => {
  const {data} = props

  const {
    competing_team,
    competing_team_logo,
    date,
    first_innings,
    man_of_the_match,
    result,
    second_innings,
    umpires,
    venue,
  } = data

  return (
    <div className="latestMatchContainer">
      <div className="leftSection">
        <p>{competing_team}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        className="latestMatchImage"
        src={competing_team_logo}
        alt={`latest match ${competing_team}`}
      />
      <div className="rightSection">
        <p>First Innings</p>
        <p>{first_innings}</p>
        <p>Second Innings</p>
        <p>{second_innings}</p>
        <p>Man Of The Match</p>
        <p>{man_of_the_match}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
