// create reducer

const LoaderReducer = (state, {type, payload}) => {

    switch (type) {
        case 'LOADING_START':
            return 100;

             
            case 'LOADING_END':
            return 0;
           
        
        default:
        return state;
        
    }
}

// export AuthReducer
export default LoaderReducer;