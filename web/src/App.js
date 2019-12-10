import React from 'react';
import './App.css';

class App extends React.Component{

  state = {
    teams: []
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ teams: res.map(d => {
        return {
          ...d,
          color: d.position <= 4? 'green' : d.position === 5 ? 'gold' : d.position > 16 ? 'tomato' : '' 
        }
      }) }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('http://localhost:3001/league/16-17/result');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  renderRow(row) {
    return (
    <React.Fragment >
      <div className={row.color}> </div>
      <div class="position">{row.position}</div>
      <div class="name">{row.name}</div>
      <div class="wins">{row.win_count}</div>
      <div class="draw">{row.draw_count}</div>
      <div class="losses">{row.losses_count}</div>
      <div class="goals-for">{row.goals_for}</div>
      <div class="goals-against">{row.goals_against}</div>
      <div class="goals-diff">{row.goals_diff}</div>
      <div class="points">{row.total_points}</div>
    </React.Fragment>
  )}

  render(){
    const teams = this.state.teams;
    return (
    <div class="main">
      <h1 class="title">English Premier League 2016/17</h1>
      <div class="container">
          <div> </div>
          <div class="position">#</div>
          <div class="name">Club</div>
          <div class="wins">W</div>
          <div class="draw">D</div>
          <div class="losses">L</div>
          <div class="goals-for">GF</div>
          <div class="goals-against">GA</div>
          <div class="goals-diff">GD</div>
          <div class="points">Pts</div>
          {teams.map(this.renderRow)}
      </div>
      <ul class="legend-area">
        <li class="Legend-item">
          <span class="green legend">
          </span>
          <span class="Legend-label">
            UEFA Champions League group stage
          </span>
        </li>
        <li class="Legend-item">
          <span class="gold legend">
          </span>
          <span class="Legend-label">
            Europa League group stage
          </span>
        </li>
        <li class="Legend-item">
          <span class="tomato legend">
          </span>
          <span class="Legend-label">
            Relegation
          </span>
        </li>
      </ul>
  </div>
    )
  }
}

export default App;
