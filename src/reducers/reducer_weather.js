import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    // return state.concat([action.paload.data]);
    return [ action.payload.sata, ...state ]; // [ city, city, city ] not [city, [ city, city ] ]
  }
  return state;
}
