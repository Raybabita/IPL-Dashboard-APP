// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <li className="list-items">
      <Link className="link" to={`/team-matches/${id}`}>
        <img className="ipl-img" alt={name} src={teamImageUrl} />
        <p className="team-heading">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
