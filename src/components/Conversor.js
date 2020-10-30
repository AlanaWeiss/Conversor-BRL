import React, { Component } from 'react'
import './Conversor.css'

export default class Conversor extends Component {
    constructor(props){
        super(props);

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
        }

        this.converter = this.converter.bind(this);
    }

    converter(){
        let url = `https://api.exchangeratesapi.io/latest?base=${this.props.moedaA}&symbols=${this.props.moedaB}`
        
        fetch(url).then(response => response.json())
            .then(json => {
                let cotacao = Object.values(json['rates'])[0]
                let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2)
                this.setState({moedaB_valor})
            })
    }

    render() {
        return (
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange={(event) => this.setState({moedaA_valor: event.target.value})}/>
                <button onClick={this.converter}>Converter</button>
                <h2>Conversão: {this.state.moedaB_valor}</h2>
            </div>
        )
    }
}
