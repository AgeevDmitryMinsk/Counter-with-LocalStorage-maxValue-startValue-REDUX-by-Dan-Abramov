// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
import throttle from 'lodash.throttle' // yarn add lodash.throttle //yarn add @types/lodash.throttle
import { combineReducers, compose, createStore } from 'redux'
import { counterValueReducer } from './counterValueReducer'

// для работы с REDUX_DEVTOOLS:
declare global {
    interface window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

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
export const store = createStore(rootReducer, loadState(), composeEnhancers())

//Дроссель throttle: вызывает функцию не чаще одного раза в 1000 миллисекунд.
store.subscribe(
    throttle(() => {
        saveState({
            counterState: store.getState().counterState,
        })
    }, 1000)
)

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store
