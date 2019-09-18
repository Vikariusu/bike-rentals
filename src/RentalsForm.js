import React from 'react';
import ProductList from './ProductList';

class RentalsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProductIds: [],
            errorMessage: '',
            wasSubmitted: false
        }
    }

    // // checks if the product was selected
    isSelected = (product) => {
        return this.state.selectedProductIds.indexOf(product.id) >= 0;
    }

    // checks if at least one bike was selected
    // used as form validation on handleSubmit()
    hasBike = () => {
        const bikeIds = this.filterProducts('bike').map(product => product.id);
        let hasBike = false;

        this.state.selectedProductIds.forEach(productId => {
            if (bikeIds.indexOf(productId) >= 0) {
                hasBike = true;
            }
        });

        return hasBike;
    }

    // toggles selecting a product
    toggleSelect = (e, rental) => {
        e.preventDefault();

        if (this.isSelected(rental)) {
            const productRemoved = this.state.selectedProductIds.filter((productId) => { return rental.id !== productId })
            this.setState({ selectedProductIds: productRemoved })
        } else {
            const productAdded = [...this.state.selectedProductIds, rental.id]
            this.setState({ selectedProductIds: productAdded })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ errorMessage: '' });

        // sets the error message if no bikes were selected
        if (!this.hasBike()) {
            this.setState({ errorMessage: 'Please select a bike' });
            return;
        }

        // the form submission was successful
        this.setState({ wasSubmitted: true });
        // placeholder for network request
        console.log(this.state.selectedProductIds);

        // cleans up the form after a successful submission
        this.setState({
            selectedProductIds: []
        })
    }

    calculateTotal = () => {
        let total = 0;

        this.state.selectedProductIds.forEach((productId) => {
            const matchingProduct = this.props.products.find((product) => product.id === productId)
            total += matchingProduct.price

        })

        return total.toFixed(2);;
    }

    filterProducts = (productType) => {
        return this.props.products.filter((product) => {
            return product.product_type === productType
        });
    }

    render() {
        let hasErrors = this.state.errorMessage ? <div className="message message--error">{this.state.errorMessage}</div> : '';
        let wasSubmitted = this.state.wasSubmitted ? <div className="message message--success">Your request was submitted successfully!</div> : '';

        return (
            <form onSubmit={this.handleSubmit} className="rental-form">
                {hasErrors}
                {wasSubmitted}
                <ProductList
                    products={this.filterProducts('bike')}
                    selectedProductIds={this.state.selectedProductIds}
                    toggleSelect={this.toggleSelect}
                    isSelected={this.isSelected}
                    title='Bikes'
                />
                <ProductList
                    products={this.filterProducts('accessory')}
                    selectedProductIds={this.state.selectedProductIds}
                    toggleSelect={this.toggleSelect}
                    isSelected={this.isSelected}
                    title='Accessories'
                />
                <ProductList
                    products={this.filterProducts('addon')}
                    selectedProductIds={this.state.selectedProductIds}
                    toggleSelect={this.toggleSelect}
                    isSelected={this.isSelected}
                    title='Addons'
                />
                <h2>Total: ${this.calculateTotal()}</h2>
                <button type="submit" className="btn-primary">Submit</button>
            </form>
        )
    }
}

export default RentalsForm;