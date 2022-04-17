export type WindowType = `counterWindow` | `MaxStartValue`

export type initialStateType = {
    count: number
    maxValue: number
    startValue: number
    error: string
    window: WindowType
}

const initialState: initialStateType = {
    count: 0,
    maxValue: 5,
    startValue: 0,
    error: ``,
    window: `counterWindow`,
}

type actionReducerType = ReturnType<PropertiesType<typeof actions>>
type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never

export const counterValueReducer = (
    state: initialStateType = initialState,
    action: actionReducerType
): initialStateType => {
    switch (action.type) {
        case 'INCREASE': {
            console.log(28, state)
            console.log(29, state.count + 1)
            return { ...state, count: state.count + 1 }
        }
        case 'DECREMENT': {
            return { ...state, count: state.count - 1 }
        }
        case 'SET-START-VALUE': {
            console.log(36, state)
            console.log(37, state.startValue)
            return {
                ...state,
                startValue: action.payload.value,
                count: action.payload.value,
            }
        }
        case 'Start-Value-For-Counter': {
            return { ...state, count: action.payload.value }
        }
        case 'SET-MAX-VALUE': {
            return { ...state, maxValue: action.payload.value }
        }

        case 'SET-ERROR-VALUE': {
            return { ...state, error: action.payload.value }
        }
        case 'SET-WINDOW-VALUE': {
            return { ...state, window: action.payload.value }
        }

        default:
            return state
    }
}

export const actions = {
    incrementAC: (count: number) => {
        return {
            type: 'INCREASE',
            payload: { count },
        } as const
    },

    decrementAC: (count: number) => {
        return {
            type: 'DECREMENT',
            payload: { count },
        } as const
    },
    startValueAC: (value: number) => {
        return {
            type: `SET-START-VALUE`,
            payload: { value },
        } as const
    },
    //синхронизирую значение startValue в сount
    sinhronizeStartValueForCounterAC: (value: number) => {
        return {
            type: 'Start-Value-For-Counter',
            payload: { value },
        } as const
    },
    maxValueAC: (value: number) => {
        return {
            type: `SET-MAX-VALUE`,
            payload: { value },
        } as const
    },
    errorAC: (value: string) => {
        return {
            type: `SET-ERROR-VALUE`,
            payload: { value },
        } as const
    },
    windowAC: (value: WindowType) => {
        return {
            type: `SET-WINDOW-VALUE`,
            payload: { value },
        } as const
    },
}
