import { getRewards } from '../actions/actionTypes';

const initialState = {
    name: '',
    purchase: 0,
    date: new Date(),
    rewards: 0
};


const calculateRewards = (purchasedT) => {
  let totalRewards = 0;
  if(50 < purchasedT && purchasedT < 100) {
    let getRewards1 = purchasedT - 50;
      totalRewards += getRewards1;
  }
  if(purchasedT > 100) {
    let getRewards2 = (purchasedT - 100) * 2;
    totalRewards += getRewards2;
  }
  return totalRewards;
}

export const myReducer = (state=initialState, action) => {
    const newState = {...state};
    if(action.type === getRewards) {
        newState.rewards = calculateRewards(action.payload.purchase);
        newState.name = action.payload.name;
        newState.purchase = action.payload.purchase;
        newState.date = action.payload.date;
        return newState;
    }
    return newState;
}


  export const rewards = state => state.rewards;