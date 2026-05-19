import {call, put, takeEvery} from 'redux-saga/effects';
import { setData, setError, setLoading } from './slice';
import { fetchCategoriesData } from './api';
import { GET_CATEGORIES } from './constants';

function* fetchCategoriesApiDataSaga(): any{
 try {
  yield put(setLoading());
  const data = yield call(fetchCategoriesData);
  yield put(setData(data));
 } catch (error: any) {
  yield put(setError(error.message))
 }
}

function* categoriesSaga(): any{
 yield takeEvery(GET_CATEGORIES, fetchCategoriesApiDataSaga);
}

export default categoriesSaga;
