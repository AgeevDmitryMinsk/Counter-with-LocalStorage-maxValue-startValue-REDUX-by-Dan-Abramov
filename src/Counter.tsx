import React from 'react';

type CounterType = {
	count: number
	maxValue: number
	error:string
	startValue:number
}


const Counter: React.FC<CounterType>
	= ({count, maxValue, error, startValue}) => {

	let countCSSClass = count < maxValue
		? "countCSS"
		: "countCSS red_count"

	console.log(17, !!error)
	console.log(18, !error)
	console.log(20, startValue)

	return (
		<>
			{!error && (startValue !== maxValue) && ( startValue >=0 )  && <div className={countCSSClass}>enter values and press `set`</div>}
			{!!error && count <= maxValue && <div className={countCSSClass}>{count}</div>}
			{ !error && ((startValue === maxValue) || (startValue <0 ) )  && <div className="red_count">incorrect value!</div>}
		</>
	);
};

export default Counter;
