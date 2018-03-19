import { combineReducers } from '@ngrx/store';
import { ActionReducerMap } from '@ngrx/store';

import * as fromTaxSlab from '../taxSlab/index';

export interface IAppState {
    tax: fromTaxSlab.ITaxSlabState;
}

export const reducers: ActionReducerMap<IAppState> = {
    tax: fromTaxSlab.taxSlabReducer,
};

// const rootReducer = combineReducers(reducers);

// export function AppReducer(state: any, action: any) {
//   return rootReducer(state, action);
// }

export function getTaxSlabs(state: IAppState) {
    return state.tax;
  }
  
  export function getSelectedTaxSlab(state: IAppState) {
    return state.tax.taxSlabs.filter(s=>s.id === state.tax.selectedTaxSlabId)[0];
  }
  
  export function getSelectedTaxSlabsId(state: IAppState) {
    return state.tax.selectedTaxSlabId;
  }