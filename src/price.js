import React from 'react'

import getStore from './stores'

class Price extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			display: props.loading
		}
		this.setPrice = this.setPrice.bind(this)
	}
	componentDidMount(){
		this.store = getStore(this.props)

		// Change component by event
		this.store.addEvent(this.setPrice, {
			id: this.props.id
		})

		// Change component if price is already set
		let price = this.store.getFormattedPrice(this.props.id)
		if(price !== undefined){
			this.setPrice(price)
		}
	}
	setPrice(price) {
		if (price) {
			if (price === 'undefined') {
				return this.setState({ display: this.props.unavailable })
			}
			return this.setState({ display: price })
		}
	}
	render(){
		return (
			<div>{ this.state.display }</div>
		)
	}
}

Price.defaultProps = {
	loading: '',
	unavailable: '',
}

export default Price