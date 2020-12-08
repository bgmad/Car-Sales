import ACTION from './../actions/index';

export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const rootReducer = (state = initialState, action = {type: null}) => {
    switch (action.type) {
        case ACTION.ADD_FEATURE: //There could be a ADD_TO_TOTAL case but if a feature is added, the price should be added as well
            return ({
                ...state,
                additionalPrice: state.additionalFeatures
                    .map(item => 
                        (item.id === action.payload) ? item.price : 0)
                    .reduce((acc, val) => 
                        acc + val, state.additionalPrice),
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features,
                        state.additionalFeatures
                            .filter(item => 
                                item.id === action.payload)[0]
                    ],
                },
                additionalFeatures: [
                    // ...state.additionalFeatures,
                    ...state.additionalFeatures
                        .filter(item => 
                            item.id !== action.payload)
                ]
            });
        case ACTION.REMOVE_FEATURE: //Likewise with removing an item. The price should be removed from the total. 
            return ({
                ...state,
                additionalPrice: state.car.features
                    .map(item => 
                        (item.id === action.payload) ? item.price : 0)
                    .reduce((acc, val) => 
                        acc - val, state.additionalPrice),
                car: {
                    ...state.car,
                    features: [
                        // ...state.car.features,
                        ...state.car.features
                            .filter(item => 
                                item.id !== action.payload)
                    ],
                },
                additionalFeatures: [
                    ...state.additionalFeatures,
                    state.car.features
                        .filter(item => 
                            item.id === action.payload)
                ]
            });
        
        default:
            return (state);
    }
}
