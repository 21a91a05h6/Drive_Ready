import React, { Component } from 'react'
import Name from './fruit'

class FruitsContainer extends Component {
    render() {
        return (
            <div>
                {this.props.names.map(name => <Name name = {name}/>)}
            </div>
        )
    }
}

export default FruitsContainer