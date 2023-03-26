import { AppDispatch } from "./store";
import { counterActionsType, TDecrementAction, TIncrementAction, TLoadingAction } from "./counter.type";
import { asyncActionHandler } from "./helper";



export const onIncrementCounter = () => async (dispatch: AppDispatch) => asyncActionHandler(async () => {
    console.log('async call initiated....');
    dispatch({
        type: counterActionsType.loading_counter
    } as TLoadingAction)
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, 4000);
    })
    dispatch({
        type: counterActionsType.increment_counter
    } as TIncrementAction);
    console.log("async call complete");
})



// export const onDecrementCounter = () => async (dispatch: AppDispatch) => asyncActionHandler(async () => {
//     console.log('async call initiated....');
//     dispatch({
//         // type: counterActionsType.loading_counter
//     } as TLoadingAction)
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(true)
//         }, 4000);
//     })
//     dispatch({
//         type: counterActionsType.decrement_counter
//     } as TDecrementAction);
//     console.log("async call complete");
// })
export const onDecrementCounter = () => async (dispatch: AppDispatch) => {
    console.log('async call initiated....');
    dispatch({
        type: counterActionsType.loading_counter
    } as TLoadingAction)
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, 4000);
    })
    dispatch({
        type: counterActionsType.decrement_counter
    } as TDecrementAction);
    console.log("async call complete");
}
