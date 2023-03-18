import React from 'react'
import { useAppDispatch, useAppSelector } from './store/store.hook';
import { RootState } from './store/store'
import { onIncrementCounter } from './store/counter.action';

export const UseCounter = () => {
    const dispatch = useAppDispatch()
    const { counter, is_loading } = useAppSelector((state: RootState) => state.counterState)

    const handleIncrement = async () => {
        await dispatch(onIncrementCounter())
        console.log("after call");
    }
    return { is_loading, counter, handleIncrement }
}
