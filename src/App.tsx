import React, {useState} from 'react';
import logo from './logo.svg';
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
	return (
		<div className="App">
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
