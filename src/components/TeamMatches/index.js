import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {matchDetails: {}}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const newData = {
      teamBannerUrl: updatedData.teamBannerUrl,
      latestMatchDetails: {
        competingTeam: updatedData.latestMatchDetails.competing_team,
        competingTeamLogo: updatedData.latestMatchDetails.competing_team_logo,
        date: updatedData.latestMatchDetails.date,
        firstInnings: updatedData.latestMatchDetails.first_innings,
        id: updatedData.latestMatchDetails.id,
        manOfTheMatch: updatedData.latestMatchDetails.manOfTheMatch,
        matchStatus: updatedData.latestMatchDetails.match_status,
        result: updatedData.latestMatchDetails.result,
        secondInnings: updatedData.latestMatchDetails.second_innings,
        umpires: updatedData.latestMatchDetails.umpires,
      },
      recentMatches: updatedData.recentMatches.map(item => ({
        umpires: item.umpires,
        result: item.result,
        manOfTheMatch: item.man_of_the_match,
        id: item.id,
        date: item.date,
        venue: item.venue,
        competingTeam: item.competing_team,
        competingTeamLogo: item.competing_team_logo,
        firstInnings: item.first_innings,
        secondInnings: item.second_innings,
        matchStatus: item.match_status,
      })),
    }
    console.log(newData)
    this.setState({matchDetails: newData})
  }

  render() {
    const {matchDetails} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchDetails
    console.log(latestMatchDetails)
    console.log(recentMatches)
    return (
      <div className="teamMatches-bg-container">
        <img src={teamBannerUrl} alt="team banner" className="banner-style" />
        <h3>Latest Matches</h3>
        <LatestMatch latestMatchInfo={latestMatchDetails} />
        <ul>
          {recentMatches.map(eachItem => (
            <MatchCard eachMatch={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
