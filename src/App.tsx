import React from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/redusers/UserSlice';

function App() {
    const { count } = useAppSelector(state => state.userReducer);
    const { increment } = userSlice.actions;
    const dispatch = useAppDispatch();
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment(10))}>Жми</button>
        </div>
    );
}

export default App;
