import React from 'react';
import './App.scss';
import * as rentals from './bikerentals.json';
import RentalsForm from './RentalsForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
      ]
    }
  }

  // Exists as independent function
  // so can be converted to network call later
  fetchRentals = () => {
    const products = rentals.default.products;
    this.setState({ products })
  }

  componentDidMount = () => {
    this.fetchRentals();
  }

  render() {
    return (
      <div>
        <h1 className="header-main">Bike rental</h1>
        <RentalsForm
          products={this.state.products}
        />
      </div>
    )
  }
}

export default App;
