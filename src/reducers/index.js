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