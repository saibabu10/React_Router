import React, { Component } from 'react'

class FormComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         nameOfStudent: ' ',
         ageOfStudent: ' ',
         addressOfStudent: ' '
      }
    }
    nameChangeHandler = event =>{
        this.setState({nameOfStudent:event.target.value})
    }
    ageChangeHandler = event =>{
        this.setState({ageOfStudent:event.target.value})
    }
    addressChangeHandler = event =>{
        this.setState({addressOfStudent:event.target.value})
    }
    selectChangeHandler = event =>{
        this.setState({selectOfStudent:event.target.value})
    }
    formSubmitEventHandler = event =>
    {
        event.preventDefault();
        const{nameOfStudent,ageOfStudent,addressOfStudent,selectOfStudent}=this.state;
        alert(`Name:${nameOfStudent}\nAge:${ageOfStudent}\nAddress:${addressOfStudent}\nSection:${selectOfStudent}`);
    }
  render() {
    const {nameOfStudent,ageOfStudent,addressOfStudent,selectOfStudent}=this.state;
    return (
        <form onSubmit={this.formSubmitEventHandler}>
        <div>
        <label>Name</label>
        <input type="text" value={nameOfStudent}onChange={this.nameChangeHandler}/>
        </div>
        <div>
        <label>Age</label>
        <input type="text" value={ ageOfStudent} onChange={this.ageChangeHandler}/>
        </div>
        <div>
        <label>Address</label>
<textarea value={addressOfStudent} onChange={this.addressChangeHandler}></textarea>
        </div>
        <div>
        <label>Selection</label>
        <select value={selectOfStudent} onChange={this.selectChangeHandler}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
        </select>
        </div>
        <button type="submit">Submit</button>
    </form>
        )
    }
}
export default FormComponent