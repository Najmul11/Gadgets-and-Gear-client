
const ProductReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                isLoading:true
            }
        
        case 'API_ERROR':
            return {
                ...state,
                isLoading:false,
                isError:true
            }

        case 'SET_API_DATA':
            const featured=action.payload.filter((p)=>p.featured===true)
            return {
                ...state,
                isLoading:false,
                featureProducts:featured,
                products:action.payload
            }
        
        default:
            return state;
    }
};

export default ProductReducer;