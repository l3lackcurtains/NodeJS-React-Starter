import React, { Component } from 'react'
import {connect} from 'react-redux'
import fetchNews from '../../redux/actions/news'
import store from '../../redux'

@connect( state => ({news: state.news}))

class home extends Component {
  componentWillMount() {
    store.dispatch(fetchNews() )
  }

  render() {
    
    const {news} = this.props
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        {news.data.map( (n,i) => {
            return (
              <li key={i}>{n.title}</li>
            )
          })}
      </div>
    );
  }
}

export default home;
