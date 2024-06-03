// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {id, name, teamImageUrl} = teamData
  return (
    <Link to={`/team-matches/${id}`} className="cardLink">
      <li className="cardContainer">
        <img className="teamCard" src={teamImageUrl} alt={name} />
        <p className="teamName">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
