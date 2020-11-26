import React, { Component } from 'react'
import {
    Jumbotron, Button
} from 'react-bootstrap'


 class Home extends Component {
     render() {
        console.log(this.props)
        return (
            <div>
              <Jumbotron>
                    <h1>{this.props.title}</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>  
            </div>
        )
    }
}
export default Home