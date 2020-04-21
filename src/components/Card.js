import React from 'react';

const Card = ({name, email, id,}) =>{
	return(
		<div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt="robofriend" src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h3>{name}</h3>
				<p> {email} </p>
			</div>
		</div>
	);
};

export default Card;