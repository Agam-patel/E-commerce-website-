import {compose,createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from './root-reducer';


const persistConfig={
  key:'root',
  storage,
  blacklist:['user']
}
const peristedReducer=persistReducer(persistConfig,rootReducer);

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
    Boolean
  );
  const composeEnhancer=(process.env.NODE_ENV!=='production'&&window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)||compose;
const composedEnhancer=composeEnhancer(applyMiddleware(...middleWares));

// export const store=createStore(rootReducer,undefined,composedEnhancer);
export const store=createStore(peristedReducer,undefined,composedEnhancer);
export const persistor=persistStore(store);

