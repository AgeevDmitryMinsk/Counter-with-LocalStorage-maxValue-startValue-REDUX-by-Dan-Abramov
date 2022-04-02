import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
// import Counter from "./Counter";
// import Button_inc from "./Button_inc";
// import Button_reset from "./Button_reset";
// import UniversalButton from "./UniversalButton";
import {MaxStartValueComponent} from "./MaxStartValueComponent";
import CounterIncrementResetComponent from "./Counter_Increment_Reset_Component";

export type WindowType = `counterWindow` | `MaxStartValue`

function App() {

	const [maxValue, setMaxValue] = useState<number>(5)
	const [startValue, setStartValue] = useState<number>(0)
	const [count, setCount] = useState<number>(startValue)
	const [error, setError] = useState(``)
	const [window, setWindow] = useState<WindowType>(`counterWindow`)


	function addPlus() {
		if (count < maxValue) {
			setCount(count + 1)
		}
	}

	function resetCount() {
		setCount(startValue)
	}

	function disabledOnConditionIncrement() {
		// console.log(28, startValue > maxValue) //false
		// console.log(29, !error) //true
		// console.log(30, !error || startValue > maxValue) // true
		return !error || startValue > maxValue
	}

	function disabledOnConditionSet() {

		return startValue >= maxValue || startValue < 0
	}

	function disabledOnConditionReset(count: number) {
		return count === startValue
	}


	function setToLocalStorageHandler() {
		localStorage.setItem(`maxValueKey`, JSON.stringify(maxValue))
		localStorage.setItem(`startValueKey`, JSON.stringify(startValue))
	}

	function getFromLocalStorageHandler() {
		let maxValueKeyAsString = localStorage.getItem(`maxValueKey`)
		let startValueKeyAsString = localStorage.getItem(`startValueKey`)
		if (maxValueKeyAsString && startValueKeyAsString) {
			let maxValueKeyAsNumber = JSON.parse(maxValueKeyAsString)
			let startValueKeyAsNumber = JSON.parse(startValueKeyAsString)
			setMaxValue(maxValueKeyAsNumber)
			setStartValue(startValueKeyAsNumber)
		}


	}

	function clearLocalStorageHandler() {
		localStorage.clear()
		setCount(startValue)
	}


	//1й useEffect сначала берет из localstorage сохраненные значения методом getFromLocalStorageHandler
	useEffect(getFromLocalStorageHandler, [])

	//2й useEffect обновляет значение count в localstorage
	// сначала 1й, затем 2й useEffect. Иначе count при перезагрузке
	//браузера будет брать данные из initial useState
	//useEffect(setToLocalStorageHandler, [count])


	function onChangeMaxValue(e: ChangeEvent<HTMLInputElement>) {
		console.log(73)
		let maxValue = Number(e.currentTarget.value)
		if (startValue <= maxValue) {
			setMaxValue(maxValue)
			setError(``)
		} else {
			setError(``)
			console.log(`startValue<maxValue`)
			console.log(error)
		}
	}

	function onChangeStartValue(e: ChangeEvent<HTMLInputElement>) {
		console.log(77)
		let startValue = Number(e.currentTarget.value)
		if (startValue <= maxValue) {
			setStartValue(startValue)
			setError(``)
			console.log(101, error)
		} else {
			setError(``)
			console.log(`startValue<maxValue`)
			console.log(error)
		}

	}


	function setValue() {
		setMaxValue(maxValue)
		setStartValue(startValue)
		console.log(104, `maxValue=`, maxValue, `startValue=`, startValue)
		setError('no errors')
		setCount(startValue)
		setToLocalStorageHandler()
		setWindow(`counterWindow`)

	}

	function goFromCounterToMaxStartValue() {
		setWindow(`MaxStartValue`)
	}

	return (
		<div className="App">
			<h4>Counter with LocalStorage + maxValue & startValue </h4>
			<div className={"container_global"}>
				{window === `MaxStartValue` &&
                    <MaxStartValueComponent startValue={startValue} maxValue={maxValue}
                                            callBackOnChangeMaxValue={onChangeMaxValue}
                                            callBackOnChangeStartValue={onChangeStartValue}
                                            callBackSetValue={setValue}
                                            count={count}
                                            callBackDisabledOnConditionSet={disabledOnConditionSet}
                    />}
				{/*<div className="container">*/}
				{/*	<div className="container_buttons">*/}
				{/*		<div>max value: <input type={"number"} className={inputValueCSS} value={maxValue}*/}
				{/*							   onChange={onChangeMaxValue}/></div>*/}
				{/*		<div>start value: <input type={"number"} className={inputStartValueCSS} value={startValue}*/}
				{/*								 onChange={onChangeStartValue}/></div>*/}
				{/*	</div>*/}

				{/*	<div className="container_buttons">*/}
				{/*		<UniversalButton name={"set"}*/}
				{/*						 className={universalButtonSetCSS}*/}
				{/*						 callback={setValue}*/}
				{/*						 disabledOnCondition={disabledOnConditionSet(count)}*/}

				{/*		/>*/}
				{/*	</div>*/}
				{/*</div>*/}

				{window === `counterWindow` &&
                    <CounterIncrementResetComponent count={count}
                                                    maxValue={maxValue}
                                                    startValue={startValue}
                                                    error={error}
                                                    callBackAddPlus={addPlus}
                                                    callBackDisabledOnConditionIncrement={disabledOnConditionIncrement}
                                                    callBackResetCount={resetCount}
                                                    callBackDisabledOnConditionReset={disabledOnConditionReset}
                                                    callBackSetToLocalStorageHandler={setToLocalStorageHandler}
                                                    callBackGetFromLocalStorageHandler={getFromLocalStorageHandler}
                                                    callBackClearLocalStorageHandler={clearLocalStorageHandler}
                                                    callBackSetFromCounter={goFromCounterToMaxStartValue}
                    />}
				{/*<div className="container">*/}
				{/*	<Counter count={count} maxValue={maxValue} error={error} startValue={startValue}/>*/}
				{/*	<div className="container_buttons">*/}

				{/*		<UniversalButton name={"inc(univ)"}*/}
				{/*						 className={universalButtonIncCSS}*/}
				{/*						 callback={addPlus}*/}
				{/*						 disabledOnCondition={disabledOnConditionIncrement(count)}*/}

				{/*		/>*/}
				{/*		<UniversalButton name={"reset(univ)"}*/}
				{/*						 className={universalButtonResetCSS}*/}
				{/*						 callback={resetCount}*/}
				{/*						 disabledOnCondition={disabledOnConditionReset(count)}*/}
				{/*		/>*/}
				{/*		<button onClick={setToLocalStorageHandler}>*/}
				{/*			setToLocalStorage*/}
				{/*		</button>*/}

				{/*		<button onClick={getFromLocalStorageHandler}>*/}
				{/*			getFromLocalStorage*/}
				{/*		</button>*/}

				{/*		<button onClick={clearLocalStorageHandler}>*/}
				{/*			clearLocalStorage*/}
				{/*		</button>*/}

				{/*		/!*<button onClick={remove_1_itemFromLocalStorageHandler}>*!/*/}
				{/*		/!*	remove_1_itemFromLocalStorage*!/*/}
				{/*		/!*</button>*!/*/}

				{/*	</div>*/}
				{/*</div>*/}
			</div>
		</div>
	);
}

export default App;


