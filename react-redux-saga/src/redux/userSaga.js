import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_USERS_REQUEST, fetchUsersSuccess, fetchUsersFailure } from './userAction';
import { api } from './apis'; // Assuming you have an API service file

function* fetchUsersSaga() {
    try {
        const users = yield call(api.fetchUsers); // Call your API function to fetch users
        console.log(users)
        yield put(fetchUsersSuccess(users));
    } catch (error) {
        yield put(fetchUsersFailure(error.message));
    }
}

// function* watchFetchUsers() {
//     yield takeEvery(FETCH_USERS_REQUEST, fetchUsersSaga);
// }

export const userSagaWatcher = [
    takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga)
]
