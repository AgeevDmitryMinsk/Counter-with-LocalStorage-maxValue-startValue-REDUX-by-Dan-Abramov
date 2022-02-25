import React from 'react';

type ButtonIncType = {
	button_inc_name: string
	addPlus: ()=>void
	count:number
}

const ButtonInc: React.FC<ButtonIncType>
	= ({button_inc_name, addPlus, count}) => {
	function onClickHandlerInc() {
		addPlus()
	}

	console.log(15, count)


	return (

			<button disabled={count>4} className={"button_inc"}
							onClick={onClickHandlerInc}
			>{button_inc_name}</button>

	);
};

export default ButtonInc;
