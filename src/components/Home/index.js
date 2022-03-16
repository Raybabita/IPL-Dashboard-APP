import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamData: [], isLoading: true}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const formattedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamData: formattedData, isLoading: false})
  }

  renderTeamList = () => {
    const {teamData} = this.state
    return (
      <ul className="list-item-container">
        {teamData.map(eachTeam => (
          <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
        ))}
      </ul>
    )
  }

  renderLoadingView = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Oval" height={90} width={90} color="#ffffff" />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        <div className="team-list-container">
          <div className="header-container">
            <img
              className="ipl-logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1 className="ipl-heading-dashboard">IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoadingView() : this.renderTeamList()}
        </div>
      </div>
    )
  }
}

export default Home
