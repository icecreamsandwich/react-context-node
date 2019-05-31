import React, { Component } from 'react';
class DynoAddRemove extends Component {
  state = {
    countries: [],
  };

  handlechange(e, index) {
    var currSate = [...this.state.countries];
    currSate[index] = e.target.value;
    this.setState({
      countries: currSate,
    });
  }
  addCountries(e) {
    this.setState({
      countries: [...this.state.countries, ''],
    });
  }
  removeCountries(index) {
    console.log(this.state.countries);
    //remove item from the array
    this.state.countries.splice(index, 1);
    console.log(this.state.countries);
    //update the state
    this.setState({
      countries: this.state.countries,
    });
  }
  handleSubmit(e) {
    //Submit handler
    console.log(this.state.countries);
  }
  render() {
    // console.log(this.state.countries, "$$$$")
    return (
      <div>
        <h2>The Form</h2>
        <React.Fragment>
          {this.state.countries.map((item, index) => {
            return (
              <div key={index}>
                <label>Country Name</label>
                <input
                  onChange={e => this.handlechange(e, index)}
                  value={item}
                />
                <button onClick={() => this.removeCountries(index)}>
                  Remove country
                </button>
                <br />
                <br />
              </div>
            );
          })}
        </React.Fragment>
        <br />
        <br />
        <button onClick={e => this.addCountries(e)}>Add country</button>
        <br />
        <br />
        <button onClick={e => this.handleSubmit(e)}>Submit</button>
      </div>
    );
  }
}

export default DynoAddRemove;
