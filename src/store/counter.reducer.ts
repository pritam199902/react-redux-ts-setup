import { counterActionsType } from "./counter.type";
import { PayloadAction, AnyAction } from "@reduxjs/toolkit";
interface IState {
    counter: number
    is_loading: boolean
}

const initState: IState = {
    counter: 0,
    is_loading: false
}


// AnyAction | PayloadAction
export const counterReducer = (state: IState = initState, action: any) => {

    switch (action.type) {
        case counterActionsType.increment_counter:
            return {
                ...state,
                counter: state.counter + 1,
                is_loading: false
            }

        case counterActionsType.loading_counter:
            return {
                ...state,
                is_loading: true
            }

        case counterActionsType.decrement_counter:
            return {
                ...state,
                counter: state.counter - 1,
                is_loading: false
            }

        default:
            return state
    }
}