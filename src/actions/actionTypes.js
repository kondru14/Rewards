import axios from 'axios';

export const getData = 'GET_DATA';
export const getRewards = 'GET_REWARDS';
export const getError = 'API_ERROR';

export const getCustomerData = (name) => async dispatch => {
    dispatch({type: getData});
    try {
      const res = await axios(`https://reqres.in/api/users?page=${name}`);
      dispatch({
          type: getRewards,
          payload: {
              name: 'Sunil',
              purchase: 120,
              date: new Date()
          }
      });
    } catch (err) {
      dispatch({
          type: getError,
          message: err.message
      });
    }
  }