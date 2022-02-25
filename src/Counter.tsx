import React from 'react';

type CounterType = {
	count: number
}



const Counter: React.FC<CounterType>
	= ({count}) => {

	let countCSSClass = count<5
		? "countCSS"
		: "countCSS red_count"

		return (

			<div className={countCSSClass}>{count}</div>
	);
};

export default Counter;
