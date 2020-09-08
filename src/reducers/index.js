export const TOGGLE_FEATURE = "TOGGLE_FEATURE";



export const carReducer = (state,action) => {
    switch(action.type){
        case TOGGLE_FEATURE:
            return{
                ...state,
                additionalFeatures:state.additionalFeatures.map(feature => {
                    if(feature.id === action.payload){
                        return{
                            ...feature,
                            added: !feature.added
                        }
                    }else{
                        return feature
                    }
                })
            }

        default:
            return state
    }
}

/*
I don't get the need for redux when you have custom hooks

I am under the assumption that all of the global business logic needs to be stored in redux

What is the proper way to store the added features? a list or should I just add an attribute to the initial state's 'additionalFeatures'

*/