import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs, addNewSmurf } from '../actions';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  state = {
      name: '',
      age: '',
      height: '' 
  };

  handleInput = e => {
    let target = e.target.placeholder.toLowerCase();

    switch(target){
      case 'name':
        return this.setState({ name: e.target.value });
      case 'age':
        return this.setState({ age: e.target.value });
      case 'height':
        return this.setState({ height: e.target.value });
      default: 
        return "invalid input";
    }
  }
  addSmurf = e => {
    e.preventDefault();
    const smurf = { name: this.state.name, age: this.state.age, height: this.state.height }
    this.props.addNewSmurf(smurf);
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={e => this.addSmurf(e)}>
          <input type="text" placeholder="Name" onChange={this.handleInput}/>
          <input type="number" placeholder="Age" onChange={this.handleInput}/>
          <input type="number" placeholder="Height" onChange={this.handleInput}/>
          <button>Add Smurf</button>
        </form>
        <ul className="smurfs-list">
          {this.props.smurfs.map(smurf => {
            return (
                <div className="smurf" key={smurf.id}> 
                  <h2>{smurf.name}</h2>
                  <li>Age: {smurf.age}</li>
                  <li>Height: {smurf.height}</li>
                </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
})
export default connect(
  mapStateToProps, 
  { getSmurfs, addNewSmurf })(App);
