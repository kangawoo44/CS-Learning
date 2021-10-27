import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay'

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return <div>Latitude: {}</div>;
// };

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     lat: null,
  //     errorMessage: ''
  //   };
  // }
  state = {
    lat: null,
    errorMessage: ''
  };

  componentDidMount() {
    console.log("Component was rendered to the screen")
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat: position.coords.latitude});
        console.log(position);
      },
      err => {
        this.setState({errorMessage: err.message})
        console.log(err);
      }
    );
  }

  componentDidUpdate() {
    console.log("Component was updated")
  }

  render() {
    if(this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }

    return <div>Loading!</div>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
