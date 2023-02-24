import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  render() {
    const {eachMatch} = this.props
    const {name, id, teamImageUrl} = eachMatch
    return (
      <Link to={`/team-matches/${id}`} className="each-teamcard">
        <div className="team-card-container">
          <img src={teamImageUrl} alt={name} className="team-image-style" />
          <h3 className="team-name">{name}</h3>
        </div>
      </Link>
    )
  }
}

export default TeamCard
