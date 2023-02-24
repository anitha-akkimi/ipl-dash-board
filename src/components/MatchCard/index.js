import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {competingTeam, competingTeamLogo, id, matchStatus, result} = eachMatch

  return (
    <div className="each-match-card">
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="each-match-logo"
      />
      <h2>{competingTeam}</h2>
      <p>{result}</p>
      <p className="match-status">{matchStatus}</p>
    </div>
  )
}

export default MatchCard
