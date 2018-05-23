import React from 'react';

const ChickenHeight = (props) =>{
	function handleClick( event){
		console.log('handled click');
		props.callback('height', event.currentTarget.innerText);
	}
	return (<div>
				Pick a chicken height:
				<div onClick={ (event) => { handleClick(event) } }>3ft</div>
				<div onClick={ (event) => { handleClick(event) } }>8ft</div>
				<div onClick={ (event) => { handleClick(event) } }>20ft</div>
			</div>
			);
}

export default ChickenHeight;