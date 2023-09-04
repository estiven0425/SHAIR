import React, { Component } from 'react';
import Component2Test from './Component2Test';

class Component3Test extends Component {
    render () {
        return (
            <div className='text'>
                <Component2Test part1 = " Estiven " part2= " el manicomio"/> {/*Esto es lo que añadiremos*/}
            </div>
        )
    }
}

export default Component3Test