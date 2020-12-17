import React, { Component } from 'react'
import BurgerItem from './BurgerItem'
import BurgerOrder from './BurgerOrder'
import './cssBurger.css'

export default class Burger extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <BurgerItem/>
                    </div>
                    <div className="col-6">
                        <BurgerOrder/>
                    </div>
                </div>
            </div>
        )
    }
}
