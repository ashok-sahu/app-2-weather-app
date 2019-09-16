import React, { Component } from 'react'

export default class Titles extends Component {
   
    render() {
       const lang={
            fontFamily:"'Acme', cursive",
            color:'green',
            border:'3px solid white'
                  }
        return (
                <h1 style={lang} className=' z-depth-3  center-align lime pulse'> Live Weather News</h1>
                )
             }
             }
