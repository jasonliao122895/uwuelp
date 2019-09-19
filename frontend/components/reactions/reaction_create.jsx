import React from 'react';

export default class ReactionCreate extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      useful: false,
      funny: false,
      cool: false,
      review_id: this.props.reviewId
    }
    this.handleUseful = this.handleUseful.bind(this);
    this.handleFunny = this.handleFunny.bind(this);
    this.handleCool = this.handleCool.bind(this);
  }



  handleUseful(e) {
    e.preventDefault();

    this.setState({
      useful: true
    },() => {
      this.props.addReaction(this.state)
    })
    
  }

  handleFunny(e) {
    e.preventDefault();
    this.setState({
      funny: true
    }, () => {
      this.props.addReaction(this.state)
    })
  }

  handleCool(e) {
    e.preventDefault();
    this.setState({
      cool: true
    }, () => {
      this.props.addReaction(this.state)
    })
  }

  render() {

    let { numCool, numUseful, numFunny } = this.props 

    return (
      <div>
        <form>
          <button onClick={this.handleUseful}>{`Useful ${numUseful}`}</button>
          <button onClick={this.handleFunny}>{`Funny ${numFunny}`}</button>
          <button onClick={this.handleCool}>{`Cool ${numCool}`}</button>
        </form>
      </div>
    )
  }
}