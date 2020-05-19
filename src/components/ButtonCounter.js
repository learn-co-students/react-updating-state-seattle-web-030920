import React from 'react'

class ButtonCounter extends React.Component {
    constructor() {
        super()

        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        // let newCount = this.state.count + 1
        // this.setState({
        //     count: newCount
        // })
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Add to Count</button>
            </div>
        )
    }
}

export default ButtonCounter;