//https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e
//https://www.youtube.com/watch?v=U8f01SM8Kq4
import { AppRootState } from '../state/store'

// export const loadState = () => {
//     try {
//         const serializedState = localStorage.getItem('app-state')
//         if (serializedState === null) {
//             return undefined
//         }
//         return JSON.parse(serializedState)
//     } catch (err) {
//         return undefined
//     }
// }
//
// export const saveState = (state: AppRootState) => {
//     try {
//         const serializedState = JSON.stringify(state)
//         localStorage.setItem('app-state', serializedState)
//     } catch {
//         // ignore write errors
//     }
// }
