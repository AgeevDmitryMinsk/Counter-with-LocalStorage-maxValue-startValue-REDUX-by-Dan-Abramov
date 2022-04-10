import React, { ChangeEvent, useEffect } from 'react'
import './App.css'
import { MaxStartValueComponent } from './MaxStartValueComponent'
import CounterIncrementResetComponent from './Counter_Increment_Reset_Component'
import { useDispatch, useSelector } from 'react-redux'
import { actions, initialStateType } from './state/counterValueReducer'
import { AppRootState } from './state/store'

function App() {
    const dispatch = useDispatch()
    let { count, startValue, maxValue, error, window } = useSelector<
        AppRootState,
        initialStateType
    >((state) => state.counterState)
    // const [count, setCount] = useState<number>(startValue)
    console.log(count)

    //const startValue = useSelector<AppRootState>((state) => state.startValue)
    //const [startValue, setStartValue] = useState<number>(0)
    //const [maxValue, setMaxValue] = useState<number>(5)
    //const [maxValue, maxValueDispath] = useReducer(maxValueReducer, 5)
    //const [error, setError] = useState(``)
    //const [window, setWindow] = useState<WindowType>(`counterWindow`)

    function addPlus() {
        if (count < maxValue) {
            //setCount(count + 1)
            dispatch(actions.incrementAC(count))
        }
    }

    function addMinus() {
        if (count > startValue) {
            //setCount(count + 1)
            dispatch(actions.decrementAC(count))
        }
    }

    function resetCount() {
        console.log(37, actions.startValueAC)
        //setCount(startValue)
        dispatch(actions.startValueAC(startValue))
    }

    function disabledOnConditionIncrement() {
        // console.log(28, startValue > maxValue) //false
        // console.log(29, !error) //true
        // console.log(30, !error || startValue > maxValue) // true
        //return !error || startValue > maxValue
        return !error || startValue > maxValue
    }

    function disabledOnConditionSet() {
        return startValue >= maxValue || startValue < 0
    }

    function disabledOnConditionReset(count: number) {
        return count === startValue
    }

    //1 function setToLocalStorageHandler() {
    //     localStorage.setItem(`maxValueKey`, JSON.stringify(maxValue))
    //     localStorage.setItem(`startValueKey`, JSON.stringify(startValue))
    // }

    //2 function getFromLocalStorageHandler() {
    //     let maxValueKeyAsString = localStorage.getItem(`maxValueKey`)
    //     let startValueKeyAsString = localStorage.getItem(`startValueKey`)
    //     if (maxValueKeyAsString && startValueKeyAsString) {
    //         let maxValueKeyAsNumber = JSON.parse(maxValueKeyAsString)
    //         let startValueKeyAsNumber = JSON.parse(startValueKeyAsString)
    //         // setMaxValue(maxValueKeyAsNumber)
    //         dispatch(actions.maxValueAC(maxValueKeyAsNumber))
    //         // setStartValue(startValueKeyAsNumber)
    //         dispatch(actions.startValueAC(startValueKeyAsNumber))
    //     }
    // }

    //3 function clearLocalStorageHandler() {
    //     localStorage.clear()
    //     // setCount(startValue)
    //     dispatch(actions.startValueAC)
    // }

    //1й useEffect сначала берет из localstorage сохраненные значения методом getFromLocalStorageHandler
    // useEffect(getFromLocalStorageHandler, [])
    //4 useEffect(getFromLocalStorageHandler, [dispatch])

    //2й useEffect обновляет значение count в localstorage
    // сначала 1й, затем 2й useEffect. Иначе count при перезагрузке
    //браузера будет брать данные из initial useState
    //useEffect(setToLocalStorageHandler, [count])

    function onChangeMaxValue(e: ChangeEvent<HTMLInputElement>) {
        console.log(94)
        let maxValue = Number(e.currentTarget.value)
        if (startValue <= maxValue) {
            // setMaxValue(maxValue)
            dispatch(actions.maxValueAC(maxValue))
            // setError(``)
            dispatch(actions.errorAC(``))
        } else {
            //setError(``)
            dispatch(actions.errorAC(``))
            console.log(`startValue<maxValue`)
            console.log(error)
        }
    }

    function onChangeStartValue(e: ChangeEvent<HTMLInputElement>) {
        console.log(`108 onChangeStartValue`)
        startValue = Number(e.currentTarget.value)
        if (startValue <= maxValue) {
            //setStartValue(startValue)
            dispatch(actions.startValueAC(startValue))
            //setError(``)
            dispatch(actions.errorAC(``))
            console.log(101, error)
        } else {
            //setError(``)
            dispatch(actions.errorAC(``))
            console.log(`startValue<maxValue`)
            console.log(error)
        }
    }

    function setValue() {
        // setMaxValue(maxValue)
        dispatch(actions.maxValueAC(maxValue))
        //setStartValue(startValue)
        dispatch(actions.sinhronizeStartValueForCounterAC(startValue))
        console.log(104, `maxValue=`, maxValue, `startValue=`, startValue)
        //setError('no errors')
        dispatch(actions.errorAC(`no errors`))

        // setCount(startValue)
        dispatch(actions.startValueAC(startValue))

        //setToLocalStorageHandler()
        // setWindow(`counterWindow`)
        dispatch(actions.windowAC(`counterWindow`))
    }

    function goFromCounterToMaxStartValue() {
        //setWindow(`MaxStartValue`)
        dispatch(actions.windowAC(`MaxStartValue`))
    }

    return (
        <div className="App">
            <h4>Counter with LocalStorage + maxValue & startValue + REDUX</h4>
            <div className={'container_global'}>
                {window === `MaxStartValue` && (
                    <MaxStartValueComponent
                        // startValue={startValue}
                        // maxValue={maxValue}
                        callBackOnChangeMaxValue={onChangeMaxValue}
                        callBackOnChangeStartValue={onChangeStartValue}
                        callBackSetValue={setValue}
                        //count={count}
                        count={count}
                        callBackDisabledOnConditionSet={disabledOnConditionSet}
                    />
                )}

                {window === `counterWindow` && (
                    <CounterIncrementResetComponent
                        count={count}
                        maxValue={maxValue}
                        startValue={startValue}
                        error={error}
                        callBackAddPlus={addPlus}
                        callBackAddMinus={addMinus}
                        callBackDisabledOnConditionIncrement={
                            disabledOnConditionIncrement
                        }
                        callBackResetCount={resetCount}
                        callBackDisabledOnConditionReset={
                            disabledOnConditionReset
                        }
                        // callBackSetToLocalStorageHandler={
                        //     setToLocalStorageHandler
                        // }
                        // callBackGetFromLocalStorageHandler={
                        //     getFromLocalStorageHandler
                        // }
                        // callBackClearLocalStorageHandler={
                        //     clearLocalStorageHandler
                        // }
                        callBackSetFromCounter={goFromCounterToMaxStartValue}
                    />
                )}
            </div>
        </div>
    )
}

export default App
