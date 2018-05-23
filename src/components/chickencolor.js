import React from 'react';

const ChickenColor = (props) =>{
	function handleClick( event){
		console.log('handled click');
		props.callback('color', event.currentTarget.innerText);
	}
	return (<div>
				Pick a chicken height:
				<div onClick={ (event) => { handleClick(event) } }>Red</div>
				<div onClick={ (event) => { handleClick(event) } }>Brown</div>
				<div onClick={ (event) => { handleClick(event) } }>Lime</div>
			</div>
			);
}

export default ChickenColor;