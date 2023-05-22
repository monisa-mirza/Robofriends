import React from 'react';
import Card from './Card';

const Cardlist = ({ robots}) => {
    // if(true) {
    //     throw new Error('NOOOOOOOOO')
    // }
    return (
        <div>
            {
            /* escaping into Javascript */
            // loop over the array elements using map and returning a card component
            // whenever using a loop give it a unique key
            robots.map((user, i) => {
                return (
                    <Card 
                    key = {i} 
                    id ={robots[i].id} 
                    name ={robots[i].username} 
                    email= {robots[i].email} 
                    />
                );
            })
            }    
        </div>
    );
}

export default Cardlist;