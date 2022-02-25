import React from 'react';

type ButtonResetType = {
	button_reset_name : string
	resetCount: ()=>void
	count:number
}

const ButtonReset: React.FC<ButtonResetType>
	= ({button_reset_name, resetCount, count}) => {
	function onClickHandlerReset() {
		resetCount()
	}

	return (

			<button className="button_reset"
							onClick={onClickHandlerReset}
							disabled={count===0}
			>{button_reset_name}</button>
			);
};

export default ButtonReset;
