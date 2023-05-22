import React from 'react';
// simpler way
// const Card = (props) => {
    // using destructuring the props in parenthesis
    const Card =({ name , email , id}) => {
    // using ES6 destructuring
    // const { name , email , id } = props;
    return (
        <div className = 'bg-light-green dib ma2 br3 pa3 grow bw2 shadow-5 tc'>
            <img alt='robot' src ={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    );
}
export default Card;