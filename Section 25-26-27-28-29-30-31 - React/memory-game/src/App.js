import './App.css';
import {Component} from 'react'

const COLORS_SET = ['black', 'green', 'yellow', 'pink', 'blue', 'violet', 'orange', 'white']

function Card(props) {
  const cardStyle = {
    backgroundColor: props.hidden ? 'grey' : props.color,
    width: '200px',
    height: '200px',
    margin: '10px',
    border: '5px solid grey',
    borderRadius: '20px',
    transition: '100ms'
  }
  return (<div onClick={props.onClick} style={cardStyle}/>)
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      currentGuess: null
    }
    this.resetGame = this.resetGame.bind(this)
  }

  componentDidMount(){
    this.resetGame()
  }

  resetGame(){
    const cardColorsTmp = [...COLORS_SET, ...COLORS_SET];
    const cardColors = [];
    while(cardColorsTmp.length > 0) {
      cardColors.push(...cardColorsTmp.splice(Math.floor(Math.random()*cardColorsTmp.length), 1))
    }

    this.setState({
      cards: cardColors.map(color => ({color, hidden: true})),
      currentGuess: null
    });
  }

  onCardClickHandler(i){
    if(this.state.currentGuess == null){
      const updatedCards = [...this.state.cards];
      updatedCards[i].hidden = false;
      this.setState({cards: updatedCards, currentGuess: i})
    } else {
      if(i !== this.state.currentGuess && this.state.cards[this.state.currentGuess].color === this.state.cards[i].color){
        const updatedCards = [...this.state.cards];
        updatedCards[i].hidden = false;
        this.setState({cards: updatedCards, currentGuess: null})
      } else {
        const updatedCards = [...this.state.cards];
        updatedCards[i].hidden = false;
        const cardsToHide = [i, this.state.currentGuess];
        this.setState({cards: updatedCards, currentGuess: null}, () =>
          setTimeout(() => {
            const updatedCards = [...this.state.cards];
            updatedCards[cardsToHide[0]].hidden = true;
            updatedCards[cardsToHide[1]].hidden = true;
            this.setState({cards: updatedCards})
          },300));
      }
    }
  }

  render() {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
    return (
      <div className="App">
        <div className="navbar">
          <h4>Memory Game</h4>
          <h4 onClick={this.resetGame}>New Game</h4>
        </div>
        <div style={containerStyle}>
          {
            this.state.cards.map((card, i) => 
              <Card key={i} {...card} onClick={() => this.onCardClickHandler(i)}/>
            )
          }
        </div>
      </div>
    );
  }
  
}

export default App;
