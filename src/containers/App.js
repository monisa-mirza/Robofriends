import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';  
import './App.css';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
    constructor () {
        super()
        // 'this' cant be used without super()
        this.state = {
            // state usually lives in parent component
            robots : [],
            searchfield : ''
        }
    }
    componentDidMount() {
            // robot users from JSONplaceholder
            fetch('https://jsonplaceholder.typicode.com/users')
                // converting the response to json
                .then(response=> response.json())
                // getting t arrayhe users and setting them to robots
                .then(users => this.setState({robots: users}));
        }
           
    // use arrow function syntax anytime you create you own method
    onSearchChange = (event) => {
        // update state---searchfield
        this.setState({ searchfield : event.target.value })
        // everytime the input changes
        // event.target.value gives us the value of searchfield
        // console.log(event.target.value);
        const filteredRobots = this.state.robots.filter(robot => {
            // this value refers to App
            return robot.username.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        // console.log(filteredRobots);
    }
    render () {
     // destructuring
     const {robots, searchfield} = this.state;

     const filteredRobots = robots.filter(robot => {
        // this value refers to App
        return robot.username.toLowerCase().includes(searchfield.toLowerCase());
     })

    // using ternary operator
    // if robots.length===0 return loading else return the robots
     return !robots.length ?
        <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                {/* children */}
                    <ErrorBoundary>
                        <Cardlist robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
 }

export default App;
