
import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'


export default class PersonalWorkoutRegimen extends Component {
    constructor(props){
        super(props)
        this.state = {
            workoutsArray:[]
        }
    }


async componentDidMount() {
    
        const result = await axios.get(`http://localhost:3001/workouts/regimen/all`)
        const workoutsArray = result.data.result

        this.setState({
          workoutsArray
    })
}


render() {


        return (
            <div>
            {this.state.workoutsArray.map(workout => 
              <div>
               <Link to={`/regimen/all/${workout.categoryId}/workout/${workout.id}/edit`}><h3>{workout.name}</h3></Link>
               <p>Description: {workout.description}</p>
               <p>Duration: {workout.duration}</p>
               <p>Difficulty: {workout.difficulty}</p>
              </div>
            )}

                  </div>
        )
    }
}

>>>>>>> fd5f2f4260e4c755af1ff87d57bed436283e1e94
