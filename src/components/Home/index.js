import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplMatchList: []}

  componentDidMount() {
    this.getIplMatchList()
  }

  getIplMatchList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const newData = data.teams.map(item => ({
      id: item.id,
      name: item.name,
      teamImageUrl: item.team_image_url,
    }))

    this.setState({iplMatchList: newData})
  }

  render() {
    const {iplMatchList} = this.state
    return (
      <div className="bg-container">
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-image-style"
          />
          <h1 className="header">IPL Dashboard</h1>
        </div>
        <ul className="teams-container">
          {iplMatchList.map(eachMatch => (
            <TeamCard eachMatch={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
