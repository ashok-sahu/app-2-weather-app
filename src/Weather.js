import React, { Component } from 'react'
// import {findDOMNode} from 'react-dom';
// import $ from 'jquery';

export default class Weather extends Component {

   
    render() {
        const lang={
            fontFamily:"'Acme', cursive",
            border:'3px solid purple' 
        }
            const{temperature,wind,humidity,city,country,description}=this.props;
        return (
        <div className='card cyan darken-3 z-depth-5 '>
            <div className='card-content'>
                <div className='card-title center-align white-text z-depth-5 ' style={lang}>Current Weather</div>
                <div className='row'>
                    <div className='col s6'>
                        <div className='card purple'>
                            <div className='card-content yellow-text'>
                             <p>location: {city},{country}</p>
                             <p>condition: {description}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col s6 '>
                        <div className='card purple'>
                            <div className='card-content yellow-text '>
                             <p>temperature: {temperature} <sup>0</sup>c</p>
                             <p>wind: {wind}</p>
                             <p>humidity: {humidity}</p>
                            </div>
                        </div>
                    </div>                
                </div>  
            </div>
        </div>
        )
    }
}
