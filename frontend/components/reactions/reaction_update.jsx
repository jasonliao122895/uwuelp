import React from 'react';

export default class ReactionUpdate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.reaction.id,
      review_id: this.props.reaction.review_id,
      useful: this.props.reaction.useful,
      funny: this.props.reaction.funny,
      cool: this.props.reaction.cool,
      
    }
    this.handleUseful = this.handleUseful.bind(this);
    this.handleFunny = this.handleFunny.bind(this);
    this.handleCool = this.handleCool.bind(this);
  }

  componentDidMount() {
    let usefulBol = this.props.reaction.useful;
    let funnyBol = this.props.reaction.funny;
    let coolBol = this.props.reaction.cool;
    // debugger
    let useful = document.getElementById(`useful${this.props.reaction.id}`)
    let funny = document.getElementById(`funny${this.props.reaction.id}`)
    let cool = document.getElementById(`cool${this.props.reaction.id}`)

    if (usefulBol) useful.classList.add('reacted');
    if (funnyBol) funny.classList.add('reacted');
    if (coolBol) cool.classList.add('reacted'); 

  }

  componentDidUpdate(prevProps) {
    // let usefulBol = this.props.reaction.useful;
    // let funnyBol = this.props.reaction.funny;
    // let coolBol = this.props.reaction.cool;
    // let useful = document.getElementById(`useful${this.props.reaction.id}`)
    // // debugger
    // let funny = document.getElementById(`funny${this.props.reaction.id}`)
    // let cool = document.getElementById(`cool${this.props.reaction.id}`)
    // // debugger
    // if (usefulBol) {
    //   useful.classList.add('reacted')
    // } else {
    //   useful.classList.remove('reacted')
    // }

    // if (funnyBol) {
    //   funny.classList.add('reacted')
    // } else {
    //   funny.classList.remove('reacted')
    // }

    // if (coolBol) {
    //   cool.classList.add('reacted')
    // } else {
    //   cool.classList.remove('reacted')
    // }

  }

  handleUseful(e) {
    e.preventDefault();
    let useful = document.getElementById(`useful${this.props.reaction.id}`)
    if (useful) useful.classList.toggle('reacted');
    if (this.state.useful) {
      this.setState({
        useful: false,
        update: true
      }, () => {
        this.props.updateReaction(this.state)
      })
    } else {
      this.setState({
        useful: true
      }, () => {
        this.props.updateReaction(this.state)
      })
    }
  }

  handleFunny(e) {
    e.preventDefault();
    let funny = document.getElementById(`funny${this.props.reaction.id}`)
    if (funny) funny.classList.toggle('reacted');

    if (this.state.funny) {
      this.setState({
        funny: false
      }, () => {
        this.props.updateReaction(this.state)
      })
    } else {
      this.setState({
        funny: true
      }, () => {
        this.props.updateReaction(this.state)
      })
    }
  }

  handleCool(e) {
    e.preventDefault();
    let cool = document.getElementById(`cool${this.props.reaction.id}`)
    if (cool) cool.classList.toggle('reacted'); 

    if (this.state.cool) {
      this.setState({
        cool: false
      }, () => {
        this.props.updateReaction(this.state)
      })
    } else {
      this.setState({
        cool: true
      }, () => {
        this.props.updateReaction(this.state)
      })
    }
  }

  render() {
    let { numUseful, numFunny, numCool } = this.props;

    // let numUseful = 0
    // let numCool = 0
    // let numFunny = 0
    // reactions.forEach((reaction) => {
    //   if (reaction.useful) numUseful++;
    //   if (reaction.cool) numCool++;
    //   if (reaction.funny) numFunny++; 
    // })
    // debugger

    return (
      <div>
        <form>
          <button id={`useful${this.props.reaction.id}`} onClick={this.handleUseful}>{`Useful ${numUseful}`}</button>
          <button id={`funny${this.props.reaction.id}`} onClick={this.handleFunny}>{`Funny ${numFunny}`}</button>
          <button id={`cool${this.props.reaction.id}`} onClick={this.handleCool}>{`Cool ${numCool}`}</button>
        </form>
      </div>
    )
  }
}