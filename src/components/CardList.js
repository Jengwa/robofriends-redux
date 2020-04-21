import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

   
	return (
		<div>
			 	{
			 	 robots.map((user, item) => {
					return (
						<Card 
						key={item}
						id={robots[item].id} 
						name={robots[item].name} 
						email={robots[item].email}
						phone={robots[item].phone}
						/>
					);	
			})
				}	
		</div>
	)
};

export default CardList;