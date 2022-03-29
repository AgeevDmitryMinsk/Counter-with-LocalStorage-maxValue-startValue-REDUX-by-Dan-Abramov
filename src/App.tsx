import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter";
import Button_inc from "./Button_inc";
import Button_reset from "./Button_reset";
import UniversalButton from "./UniversalButton";

function App() {
	const [count, setCount] = useState<number>(0)

	function addPlus() {
		if (count < 5) {
			setCount(count + 1)
		}

	}

	function resetCount() {
		setCount(0)
	}

	function disabledOnConditionIncrement(count: number) {
		return count > 4
	}

	function disabledOnConditionReset(count: number) {
		return count === 0
	}

	let universalButtonResetCSS = count === 0 ? "button_reset button_opac" : "button_reset"

	let universalButtonIncCSS = count > 4 ? "button_inc button_opac" : "button_inc"


	function setToLocalStorageHandler() {
		localStorage.setItem(`counterKey`, JSON.stringify(count))

		//localStorage.setItem(`counterKeyPlus1`, JSON.stringify(count+1))
	}

	function getFromLocalStorageHandler() {
		let valueAsString = 	localStorage.getItem(`counterKey`)
		console.log(43, valueAsString)
		if (valueAsString) {
			let valueAsNumber = JSON.parse(valueAsString)
			console.log(46, valueAsNumber)
			setCount(valueAsNumber)
		}
	}

	function clearLocalStorageHandler() {
		localStorage.clear()
		setCount(0)
	}

	// function remove_1_itemFromLocalStorageHandler() {
	// 	localStorage.removeItem(`counterKeyPlus1`)
	// }
	//1й useEffect сначала добавляет из localstorage
	// сохраненное значение count
	useEffect(getFromLocalStorageHandler, [])

	//2й useEffect обновляет значение count в localstorage
	// сначала 1й, затем 2й useEffect. Иначе count при перезагрузке
	//браузера будет брать данные из initial useState
	//useEffect(setToLocalStorageHandler, [count])

	return (
		<div className="App">
			<h4>Counter with LocalStarage</h4>
			<div className="container">
				<Counter count={count}/>
				<div className="container_buttons">

					<UniversalButton name={"inc(univ)"}
													 className={universalButtonIncCSS}
													 callback={addPlus}
													 disabledOnCondition={disabledOnConditionIncrement(count)}

					/>
					<UniversalButton name={"reset(univ)"}
													 className={universalButtonResetCSS}
													 callback={resetCount}
													 disabledOnCondition={disabledOnConditionReset(count)}
					/>
					<button onClick={setToLocalStorageHandler}>
						setToLocalStorage
					</button>

					<button onClick={getFromLocalStorageHandler}>
						getFromLocalStorage
					</button>

					<button onClick={clearLocalStorageHandler}>
						clearLocalStorage
					</button>

					{/*<button onClick={remove_1_itemFromLocalStorageHandler}>*/}
					{/*	remove_1_itemFromLocalStorage*/}
					{/*</button>*/}

				</div>
			</div>
		</div>
	);
}

export default App;


{/*<button className="button_inc">inc</button>*/
}
{/*<Button_inc	button_inc_name={"inc"}*/
}
{/*						 addPlus={addPlus}*/
}
{/*						 count={count}*/
}
{/*/>*/
}
{/*/!*<button className="button_reset">reset</button>*!/*/
}
{/*<Button_reset button_reset_name={"reset"}*/
}
{/*							resetCount={resetCount}*/
}
{/*							count={count}*/
}
{/*/>*/
}
