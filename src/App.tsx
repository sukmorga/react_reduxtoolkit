import { is } from 'immer/dist/internal';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/redusers/ActionCreators';
import { userSlice } from './store/redusers/UserSlice';

function App() {
    const dispatch = useAppDispatch();
    const { users, isLoading, error } = useAppSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>{error}</h1>}
            {JSON.stringify(users, null, 2)}
        </div>
    );
}

export default App;
