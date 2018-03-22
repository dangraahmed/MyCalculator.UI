import { Observable } from 'rxjs/Observable';
import { combineReducers } from '@ngrx/store';
import { ActionReducer, ActionReducerMap } from '@ngrx/store';

import * as fromTaxSlab from '../../user/taxSlab/index';

export interface IAppState {
  tax: fromTaxSlab.ITaxSlabState;
}

export const appReducers: ActionReducerMap<IAppState> = {
  tax: fromTaxSlab.taxSlabReducer,
};

export function getTaxSlabs(state: IAppState) {
  return state.tax;
}

export function getSelectedTaxSlab(state: IAppState) {
  return state.tax.taxSlabs.filter(s => s.id === state.tax.selectedTaxSlabId)[0];
}

export function getSelectedTaxSlabsId(state: IAppState) {
  return state.tax.selectedTaxSlabId;
}