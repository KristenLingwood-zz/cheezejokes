import React, { Component } from 'react';
import Joke from './Joke';

class JokeList extends Component {
  render() {
    const dadzJokes = this.props.jokes.map(j => (
      <Joke
        text={j.text}
        key={j.id}
        yay={j.yay}
        boo={j.boo}
        upvote={() => this.props.upvote(j.id)}
        downvote={() => this.props.downvote(j.id)}
      />
    ));

    return (
      <div className="JokeList">
        <ul>{dadzJokes}</ul>
      </div>
    );
  }
}

export default JokeList;
