import { CHANGE_QUANTITY } from "../type/BurgerOrderType";

const burgerState = {
    burger: {salad:1, cheese:1, beef:1},
    menu: {
        salad:10,
        cheese:20,
        beef:55
    },
    total:85
}

const BurgerReducer = (state = burgerState, action) => {
    switch (action.type) {
        case CHANGE_QUANTITY: {
            let updatedBurger = {...state.burger};
            let total = state.total;
            if (action.number === 1) {
                if (updatedBurger[action.item] < 5) {
                    updatedBurger[action.item] += 1;
                    total += (state.menu[action.item] * action.number)
                }
                else {
                    alert('Maximum: 5')
                }
            } else if (action.number === -1) {
                if (updatedBurger[action.item] > 0) {
                    updatedBurger[action.item] += -1
                    total += (state.menu[action.item] * action.number)
                }
            }
            state.total = total;
            state.burger = {...updatedBurger};
            return {...state}
        }
        default: return {...state}
    }
}

export default BurgerReducer;