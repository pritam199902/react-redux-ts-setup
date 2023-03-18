import { AppDispatch } from "./store";
import { counterActionsType } from "./counter.type";
import { asyncActionHandler } from "./helper";



export const onIncrementCounter = () => (dispatch: AppDispatch) => asyncActionHandler(async () => {
    dispatch({
        type: counterActionsType.loading_counter
    })
    await fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json())
    console.log("async call complete");

    dispatch({
        type: counterActionsType.increment_counter
    });
})
