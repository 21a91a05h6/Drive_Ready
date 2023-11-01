import React, { Component } from 'react'

class Fruit extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default Fruit