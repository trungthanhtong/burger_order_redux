import React, { Component } from 'react'
import {connect} from 'react-redux'

class BurgerItem extends Component {
    renderBurger = (type, quantity) => {
      let item = [];
      for (let i = 0; i < quantity; ++i) {
          item.push(<div className={type} key={i}></div>)
      }
      return <div>{item}</div>
    }
    render() {
        return (
            <div>
                <h3 className="text-center my-5">Your burger</h3>
                <div className="breadTop"></div>
                <div className="middle">
                    {this.renderBurger('salad', this.props.burger.salad)}
                    {this.renderBurger('cheese', this.props.burger.cheese)}
                    {this.renderBurger('beef', this.props.burger.beef)}
                </div>
                <div className="breadBottom"></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        burger: state.BurgerReducer.burger
    }
}

export default connect(mapStateToProps)(BurgerItem);