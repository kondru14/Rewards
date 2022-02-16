import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { rewards } from './reducer';
import { getCustomerData } from './actions/actionTypes';
const RewardsCard = () => {
    const dispatch= useDispatch();
    const reward = useSelector(rewards);

    useEffect(()=> {
        dispatch(getCustomerData('sunil'));
    }, []);

    return(
        <div>
            Rewards: {reward}
        </div>
    )
}

export default RewardsCard;