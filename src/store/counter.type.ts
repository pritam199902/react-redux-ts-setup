export enum counterActionsType {
    increment_counter = "@counterActionsType/increment_counter",
    decrement_counter = "@counterActionsType/decrement_counter",
    loading_counter = "@counterActionsType/loading_counter"
}


export type TIncrementAction = {
    type: counterActionsType.increment_counter
}

export type TDecrementAction = {
    type: counterActionsType.decrement_counter
}
export type TLoadingAction = {
    type: counterActionsType.loading_counter
}


export type TRootCounterActions = TIncrementAction | TDecrementAction | TLoadingAction
