import React from 'react';

class ProductList extends React.Component {
    // toggles selecting a product
    handleSelect = (e, rental) => {
        e.preventDefault();

        if (this.props.isSelected(rental)) {
            const productRemoved = this.props.selectedProductIds.filter((productId) => { return rental.id !== productId })
            this.setState({ selectedProductIds: productRemoved })
        } else {
            const productAdded = [...this.props.selectedProductIds, rental.id]
            this.setState({ selectedProductIds: productAdded })
        }
    }

    // maps through products and displays a list
    displayOptions = (data) => {
        return data.map((rental) => {
            let isSelected = this.props.isSelected(rental);

            return (
                <div className="rental-option" key={rental.id}>
                    <div className="rental-option__inner">
                        <img className="rental-option__inner__image" src={rental.image} alt={rental.product_type} />
                        <div className="rental-option__inner__details">
                            <h4 className="rental-option__inner__title">{rental.name}</h4>
                            <div className="rental-option__inner__price">${rental.price}</div>
                        </div>
                    </div>
                    <button
                        onClick={(e) => this.props.toggleSelect(e, rental)}
                        className={'btn-select ' + (isSelected ? ' selected' : '')}>
                        {isSelected ? 'Selected' : 'Select'}
                    </button>
                </div>
            )
        })
    }

    render() {
        return (
            <>
                <h3>{this.props.title}</h3>
                <div className="rental-options">
                    {this.displayOptions(this.props.products)}
                </div>
            </>
        )
    }
}

export default ProductList;