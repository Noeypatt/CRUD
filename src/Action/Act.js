import axios from 'axios'

// ========  action (As Dispatcher) ==========
export const add = () => ({type: 'ADD'})
export const add2 = (number) => ({type: 'ADD2', number})
export const minus = () => ({ type: 'MINUS'})

export const getBearsSuccess = bears => ({
   type: 'GET_BEARS_SUCCESS',
   bears
});
export const getBearsFailed = () => ({ type: 'GET_BEARS_FAILED'});

export const getBears = () => async (dispatch) => {
   try {
       console.log('get bear new')
       const response = await axios.get(`http://localhost/api/bears`)
       const responseBody = await response.data;
       console.log('response: ', responseBody)
       dispatch(getBearsSuccess(responseBody));
   } catch (error) {
       console.error(error);
       dispatch(getBearsFailed());
   }
}

//ADD
export const addbear = (bearname, weight) => async (dispatch) => {
    try {
        console.log('Add Bear New')
        if (bearname != undefined && weight != undefined) {
            await axios.post(`http://localhost/api/bears`, { name: bearname, weight: weight })
            const response = await axios.get(`http://localhost/api/bears`)
            const responseBody = await response.data;
            console.log('response: ', responseBody)
            dispatch(getBearsSuccess(responseBody))
        }
    } catch (error) {
        console.error(error);
        dispatch(getBearsFailed());
    }
}

//Update
export const updateBear = (id, bearname, weight) => async (dispatch) => {
    try {
      console.log('Update Bear')
      console.log("ID:",id)
      
      if (id!= undefined && bearname != undefined && weight != undefined) {
        await axios.put(`http://localhost/api/bears/${id}`, { name: bearname, weight: weight })
        const response = await axios.get(`http://localhost/api/bears/`)
        const responseBody = await response.data;
        console.log('response: ', responseBody)
        dispatch(getBearsSuccess(responseBody))
      }
    } catch (error) {
      console.error(error)
      dispatch(getBearsFailed())
    }
  }
  
  //Delete
  export const deleteBear = (id) => async (dispatch) => {
    try {
      console.log('Delete Bear')
      if(id != undefined){
        await axios.delete(`http://localhost/api/bears/${id}`)
        const response = await axios.get(`http://localhost/api/bears/`)
        const responseBody = await response.data;
        console.log('response: ', responseBody)
        dispatch(getBearsSuccess(responseBody))
      }
    }catch (error) {
      console.error(error)
      dispatch(getBearsFailed())
    }
  }
