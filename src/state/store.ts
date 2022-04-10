// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
import { combineReducers, createStore } from 'redux'
import { counterValueReducer } from './counterValueReducer'

const rootReducer = combineReducers({
    counterState: counterValueReducer,
})

// определить автоматически тип всего объекта состояния
export type AppRootState = ReturnType<typeof rootReducer>

// непосредственно создаём store
export const store = createStore(rootReducer)

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store
