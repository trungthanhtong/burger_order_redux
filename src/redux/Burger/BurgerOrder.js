import React, { Component } from "react";
import { connect } from "react-redux";
import { CHANGE_QUANTITY } from "../type/BurgerOrderType";

class BurgerOrder extends Component {

    renderMenu = () => {
        return Object.keys(this.props.burger).map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item}</td>
                    <td>
                        <button onClick={() => this.props.changeQuantity(item, 1)} className="btn btn-success">+</button>
                        <span className="mx-2">{this.props.burger[item]}</span>
                        <button onClick={() => {this.props.changeQuantity(item, -1)}} className="btn btn-danger">-</button>
                    </td>
                    <td>{this.props.menu[item]}</td>
                    <td>{this.props.menu[item] * this.props.burger[item]}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h3 className="text-center my-5">Customize</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th></th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderMenu()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="2"></th>
                            <th>Subtotal</th>
                            <th>{this.props.total}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        burger: state.BurgerReducer.burger,
        menu: state.BurgerReducer.menu,
        total: state.BurgerReducer.total,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeQuantity: (item, number) => {
            dispatch({
                type: CHANGE_QUANTITY,
                item,
                number
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerOrder);
