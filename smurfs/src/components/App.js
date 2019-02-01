import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
  getSmurfs, 
  addNewSmurf, 
  updateSmurf,
  deleteSmurf 
} from '../actions';
import './App.css';
import UpdateForm from './UpdateForm';
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
  addSmurf = () => {
    const smurf = { name: this.state.name, age: this.state.age, height: this.state.height }
    this.props.addNewSmurf(smurf);
    this.setState({ name: '', age: '', height: '' });
  }

  deleteSmurf = (e, id) => {
    e.preventDefault();
    this.props.deleteSmurf(id)
  }

  updateSmurf = id => {
    const smurf = { name: this.state.name, age: this.state.age, height: this.state.height };
    this.props.updateSmurf(id, smurf);
    this.setState({ name: '', age: '', height: '' });
  }

  handleSumbit = e => {
    e.preventDefault();
    if(this.state.updatingSmurf){
      this.updateSmurf(this.state.smurfId)
    } else {
      this.addSmurf();
    }
  }


  populateForm = (e, id)=> {
    e.preventDefault();
    const tempSmurf = this.props.smurfs.find(smurf => smurf.id === id);
    this.setState({ 
      name: tempSmurf.name,
      height: tempSmurf.height,
      age: tempSmurf.age,
      smurfId: tempSmurf.id,
      updatingSmurf: true
    });
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSumbit}>
          <input type="text" placeholder="Name" onChange={this.handleInput} value={this.state.name}/>
          <input type="number" placeholder="Age" onChange={this.handleInput} value={this.state.age}/>
          <input type="number" placeholder="Height" onChange={this.handleInput} value={this.state.height}/>
          <button>{this.state.updatingSmurf ? 'Update Smurf' : 'Add Smurf'}</button>
        </form>
        <ul className="smurfs-list">
          {this.props.smurfs.map(smurf => {
            return (
                <div className="smurf" key={smurf.id}> 
                  <h2>{smurf.name}</h2>
                  <li>Age: {smurf.age}</li>
                  <li>Height: {smurf.height}</li>
                  <button onClick={e => this.populateForm(e, smurf.id)}>Update</button>
                  <button className="delete-btn" onClick={e => this.deleteSmurf(e, smurf.id)}>Delete</button>
                </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  updatingSmurf: state.updatingSmurf
})
export default connect(
  mapStateToProps, 
  { getSmurfs, 
    addNewSmurf, 
    updateSmurf, 
    deleteSmurf })(App);
