
export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });

    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
    }
  };
};
/*
A thunk, in the context of programming, is a function that wraps an expression to delay its evaluation.
In the context of Redux and other state management libraries, 
a thunk is typically used to delay the evaluation of an action creator or to perform asynchronous logic before dispatching an action
*/
