import React from 'react';

const ChickenHeight = (props) =>{
	function handleClick( event){
		console.log('handled click');
		props.callback('height', event.currentTarget.innerText); //call the callback functiom from the parent via the props, give it our current component and the value that was clicked
	}
	//this renders out each choice. we pass the event into the local click handler so that it can be used to get the data from the element from the event
	return (<div>
				Pick a chicken height:
				<div onClick={ (event) => { handleClick(event) } }>3ft</div>
				<div onClick={ (event) => { handleClick(event) } }>8ft</div>
				<div onClick={ (event) => { handleClick(event) } }>20ft</div>
			</div>
			);
}

export default ChickenHeight;