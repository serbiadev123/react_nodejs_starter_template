import adminReducer from './AdminReducer'
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
  }

const persistCombinedReducers = persistCombineReducers(persistConfig, {adminReducer /*, moreReducers */});

export default persistCombinedReducers;