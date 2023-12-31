// Write your code here

import {Component} from 'react'
import './index.css'

class ClickCounter extends Component{
    state={
        count:0,
    }
    clickMe=()=>{
        this.setState(prevState=>({count:prevState.count+1}))
    }

    render(){
        const {count}=this.state
        return(
                <div className="container">

                    <h1 className="heading">The Button has been clicked <span className="count">{count}</span> Times</h1>
                    <p className="description">Click the button to increase count</p>
                    <div className="button-container">
                    <button
                        type="button"
                        className="button"
                        onClick={this.clickMe}
                        >
                        Click Me!
                    </button>
                    </div>
                </div>

        )
    }
}

export default ClickCounter
