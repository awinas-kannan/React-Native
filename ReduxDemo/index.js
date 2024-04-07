const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const reduxLogger = require('redux-logger')
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()


const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

const buyCakeAction = {
    type: BUY_CAKE,
    info: 'Buy cake action'
}

function buyCake() {
    // return buyCakeAction
    return {
        type: BUY_CAKE,
        info: 'Buy cake action'
    }
}


function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}

const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
}

// Single reducer to manage all actions

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

const store = createStore(reducer)

console.log('Initial State ', store.getState())
console.log({ initialState })

const unubscribe = store.subscribe(() => console.log('Updated State ', store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCakeAction)
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unubscribe()

//// Multiple Reducers to manage individual actions

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const combinedstore = createStore(rootReducer,applyMiddleware(logger))


// const unubscribeCombined = combinedstore.subscribe(() => console.log('Updated Combined State ', combinedstore.getState()))
const unubscribeCombined = combinedstore.subscribe(() => {})

combinedstore.dispatch(buyCake())
combinedstore.dispatch(buyCake())
combinedstore.dispatch(buyCake())

combinedstore.dispatch(buyIceCream())
combinedstore.dispatch(buyIceCream())
combinedstore.dispatch(buyIceCream())


console.log('Print ', combinedstore.getState().cake)

////