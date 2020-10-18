import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card'
const CARD_BASE_API = `https://deckofcardsapi.com/api/deck`

class CardDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: null
        ,   drawn: []
        };
        this.getCard = this.getCard.bind(this);
    }

    async componentDidMount() {
        const response = await axios.get(`${CARD_BASE_API}/new/shuffle`);
        this.setState(({
            deck: response.data
        }));
    }
    //https://deckofcardsapi.com/api/deck/ewyvsnxd1n6f/draw/
    async getCard() {
        const deckId = this.state.deck.deck_id;
        try {
            const cardUrl = `${CARD_BASE_API}/${deckId}/draw/`;
            const deckOfCards = await axios.get(cardUrl);
            if (!deckOfCards.data.success) {
                throw new Error("No card remaining!"); 
            }
            console.log(deckOfCards.data);
            const card = deckOfCards.data.cards[0];
            this.setState(st => ({
                drawn: [
                    ...st.drawn, {
                        id: card.code
                    ,   image: card.image
                    ,   name: `${card.suit} ${card.value}`
                    }
                ]
            }));
        } catch (Error) {
            console.log(Error);
        }
    }
    render() {
        const cardImage = this.state.drawn.map(s => (
            <Card key={s.id} image={s.image} name={s.name}/>
        ));
        return (
            <div>
                <h1>Card Deck</h1>
                <button onClick={this.getCard}>Get Card</button>
                {cardImage}
            </div>
        );
    }
}

export default CardDeck;