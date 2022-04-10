// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
import { combineReducers, createStore } from 'redux'
import { counterValueReducer } from './counterValueReducer'
//import { loadState, saveState } from '../utils/localStorage-utils'

//https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e
//https://www.youtube.com/watch?v=U8f01SM8Kq4
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('app-state')
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

const saveState = (state: AppRootState) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('app-state', serializedState)
    } catch {
        // ignore write errors
    }
}

const rootReducer = combineReducers({
    counterState: counterValueReducer,
})

// определить автоматически тип всего объекта состояния
export type AppRootState = ReturnType<typeof rootReducer>

// непосредственно создаём store по рекомендации Dan Abramov:
export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        counterState: store.getState().counterState,
    })
})

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store
