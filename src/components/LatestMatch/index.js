import './index.css'

const LatestMatch = props => {
  const {latestMatchInfo} = props
  console.log(latestMatchInfo)
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    matchStatus,
    result,
    secondInnings,
    umpires,
  } = latestMatchInfo

  return (
    <div className="latest-match-card">
      <div className="first-section">
        <h3>{competingTeam}</h3>
        <h2>{date}</h2>
        <p>{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="compete-team-logo"
      />
      <div>
        <p>first innings</p>
        <p>{firstInnings}</p>
        <p>Second innings</p>
        <p>{secondInnings}</p>
        <p>Man of the Match</p>

        <p>umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
