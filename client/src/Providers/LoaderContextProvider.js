
// create providers
import { useReducer } from "react";
import LoaderContext from "../Context/LoaderContext";
import LoaderReducer from "../Reducers/LoderReducer";



     // initail state
  export const INITIAL_STATE = 0
   
    const LoaderContextProviders = ({children}) => {
    const [loaderState, loaderDispatch] = useReducer(LoaderReducer  , INITIAL_STATE)
    
    return(
     <LoaderContext.Provider 
      value={
        {
        loaderState,
        loaderDispatch 
      }}
     >
      { children }
     </LoaderContext.Provider>
    );
}

//export providers
export default LoaderContextProviders;