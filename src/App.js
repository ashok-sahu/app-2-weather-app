import React, { Component } from 'react'
import Titles from './Titles'
import Form from './Form'
import Weather from './Weather'
import 'materialize-css/dist/css/materialize.min.css'
// import './bootstrap.min (1).css'


const API_KEY = '89ad216f8ba66a9e965ffd5d8844fae5';

export default class App extends Component {

    state={
        temperature:'',
        city:'',
        country:'',
        humidity:'',
        description:'',
        wind:'',
        error:''
    }

    getWeather = async (e) => {
        e.preventDefault();
        // console.log(e)
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
        const data = await api_call.json();
       
    if(city && country){
    this.setState ({
        temperature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        wind:data.wind.speed,
              }) 
           }
        }
       

    render() {
        const  divStyle = {
            marginTop:"90px",
            border:'2px solid blue',
            borderRadius:'10px',
        }
        return (
            <React.Fragment>
                <div className='container pink  z-depth-5' style={divStyle}>
                    <div className='row'>
                        <div className='col s12'>
                        <Titles/>
                        </div>
                        <div className='col s5 '>
                        <Form getWeather={this.getWeather} />
                        </div>
                        <div className='col s7'>
                        <Weather 
                            temperature={this.state.temperature} 
                            wind={this.state.wind} 
                            description={this.state.description}
                            humidity={this.state.humidity}
                            country={this.state.country}
                            city={this.state.city}
                             />
                        </div>
                   </div>
                </div>  
            </React.Fragment>
        )
    }
}
