import React from 'react';
import Counter from "./Counter";
import UniversalButton from "./UniversalButton";


type CounterIncrementResetComponentType = {
	count: number
	maxValue: number
	startValue: number
	error: string
	callBackAddPlus: () => void
	callBackDisabledOnConditionIncrement: () => boolean
	callBackResetCount: () => void
	callBackDisabledOnConditionReset: (count: number) => boolean
	callBackSetToLocalStorageHandler: () => void
	callBackGetFromLocalStorageHandler: () => void
	callBackClearLocalStorageHandler: () => void
	callBackSetFromCounter: () => void

}

const CounterIncrementResetComponent: React.FC<CounterIncrementResetComponentType> = ({
																						  count,
																						  maxValue,
																						  startValue,
																						  error,
																						  callBackAddPlus,
																						  callBackDisabledOnConditionIncrement,
																						  callBackResetCount,
																						  callBackDisabledOnConditionReset,
																						  callBackSetToLocalStorageHandler,
																						  callBackGetFromLocalStorageHandler,
																						  callBackClearLocalStorageHandler,
																						  callBackSetFromCounter


																					  }) => {
	let universalButtonIncCSS = (count >= maxValue) || (!error) ? "button_inc button_opac" : "button_inc"
	let universalButtonResetCSS = count === startValue ? "button_reset button_opac" : "button_reset"
	let universalButtonSetInCounterCSS = "button_set"

	function addPlus() {
		callBackAddPlus()
	}

	function resetCount() {
		callBackResetCount()
	}

	function setToMaxStartValueComponent() {
		callBackSetFromCounter()
	}

	function setToLocalStorageHandler() {
		callBackSetToLocalStorageHandler()
	}

	function getFromLocalStorageHandler() {
		callBackGetFromLocalStorageHandler()
	}

	function clearLocalStorageHandler() {
		callBackClearLocalStorageHandler()
	}

	return (
		<div className="container">
			<Counter count={count} maxValue={maxValue} error={error} startValue={startValue}/>
			<div className="container_buttons">

				<UniversalButton name={"increment"}
								 className={universalButtonIncCSS}
								 callback={addPlus}
					// disabledOnCondition={disabledOnConditionIncrement(count)}
								 disabledOnCondition={callBackDisabledOnConditionIncrement()}

				/>
				<UniversalButton name={"reset"}
								 className={universalButtonResetCSS}
								 callback={resetCount}
					// disabledOnCondition={disabledOnConditionReset(count)}
								 disabledOnCondition={callBackDisabledOnConditionReset(count)}
				/>

				<UniversalButton name={"set values"}
								 className={universalButtonSetInCounterCSS}
								 callback={setToMaxStartValueComponent}
					// disabledOnCondition={disabledOnConditionReset(count)}
								 disabledOnCondition={false}
				/>
				{/*<button onClick={setToLocalStorageHandler}>*/}
				{/*	setToLocalStorage*/}
				{/*</button>*/}

				{/*<button onClick={getFromLocalStorageHandler}>*/}
				{/*	getFromLocalStorage*/}
				{/*</button>*/}

				{/*<button onClick={clearLocalStorageHandler}>*/}
				{/*	clearLocalStorage*/}
				{/*</button>*/}

				{/*<button onClick={remove_1_itemFromLocalStorageHandler}>*/}
				{/*	remove_1_itemFromLocalStorage*/}
				{/*</button>*/}

			</div>
		</div>
	);
};

export default CounterIncrementResetComponent;
