import { AnyAction, applyMiddleware, createStore, Store } from 'redux'
// Libs
import thunk, { ThunkDispatch } from 'redux-thunk'
import { Context, createWrapper } from 'next-redux-wrapper'
// Store
import { reducer, RootState } from '@/redux/root'

const makeStore = (context: Context) => createStore(reducer, applyMiddleware(thunk))

export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true })

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>
