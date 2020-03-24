import React from 'react';

class GuessForm extends React.Component {
   
    state = {
      value: ''
    };
     
    
    handleChange=(event)=>{
      this.setState({
          value: event.target.value
        });
    }
  
    handleSubmit=(event)=>{
        // if (this.state.value === props.title){
      alert('You where right ' + this.state.value);
      event.preventDefault();
     
        // }
    }

showTitle = (event,props)=>{
if (this.state.value === this.props.title){
  alert('hello its true')
}else {
alert ('try again')

}
 event.preventDefault()
    }
    render() {
      return (
        <div>
        <form onSubmit={this.handleSubmit} >
          <label>
            Nombre de la cancion
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          {/* <input type="submit" value="Submit" /> */}
        </form>
        <button onClick = {this.showTitle}>click</button>
        </div>
      )
    }
  }

 export default GuessForm