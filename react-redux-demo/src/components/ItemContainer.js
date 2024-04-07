import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'


function ItemContainer(props) {
    return (
        <>
            <h2>Item ({props.item_name}) - {props.item}</h2>
            <div>
                <button onClick={props.buyItem}>Buy Items</button>
            </div>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake
        ? state.cake.numOfCakes
        : state.iceCream.numOfIceCreams
    const itemName = ownProps.cake
        ? 'CAKE'
        : 'ICE'
    return {
        item: itemState,
        item_name: itemName
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
        ? () => dispatch(buyCake())
        : () => dispatch(buyIceCream())
    return {
        buyItem: dispatchFunction
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemContainer)