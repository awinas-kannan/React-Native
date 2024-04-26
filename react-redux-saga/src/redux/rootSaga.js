import { all } from 'redux-saga/effects';
import {userSagaWatcher} from './userSaga';

export default function* rootSaga() {
    yield all([
        ...userSagaWatcher,
        // Add other sagas here if needed
    ]);
}