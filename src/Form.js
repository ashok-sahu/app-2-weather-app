import React, { Component } from 'react'
export default class Form extends Component {

    render() {
        const{getWeather}=this.props;
        return (
            <div className='card z-depth-5'>
                <div className='card-content indigo'>
                <div className='row'>
                <div className='col s12'>
                <form onSubmit={getWeather} >
                <div className='col s6 text-center blue-text'>
                <input type='text'  name='city' placeholder="enter city name ..."  />
                </div>
                <div className='col s6 text-center blue-text '>
                <input type='text'  name='country' placeholder="enter country name ..."  />
                </div>
                <div className='col s12'>
                <button type='submit' className='green yellow-text btn btn-large  ' >get weather</button>
                </div>
                </form>
                </div>
                </div>
                </div>
            </div>
            
        )
    }
}
