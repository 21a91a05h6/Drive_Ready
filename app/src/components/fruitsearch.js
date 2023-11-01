import React from 'react'
import FruitsContainer from './fruitscontainer'
class FruitSearch extends React.Component {
    state = {
    names: [
    'Banana',
    'Apple',
    'Orange',
    'Mango',
    'Pineapple', 
    'Watermelon',
    ],
    searchTerm: ""
    }
    editSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
    }
    dynamicSearch =() => {
    return this.state.names.filter(name=> name.toLowerCase().includes (this.state.searchTerm.toLowerCase()))
    }
    render() {
    return (
    <div style={{textAlign: 'center', paddingTop: '30vh'}}>
    <label>Search:</label>
    <input type='text' value = {this.state.searchTerm} onChange = {this.editSearchTerm}/>
    <br/><br/>
    <FruitsContainer names = {this.dynamicSearch()}/>
    </div>
    );
    }
    }
    export default FruitSearch;
