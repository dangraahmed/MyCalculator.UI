import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Rx';

import * as fromStore from '../../../modules/shared/ngrx/index';
import { TaxSlab } from '../../../modules/user/taxSlab/actions/index';
import { ITaxSlab } from '../../../modules/user/taxSlab/index';


@Component({
    moduleId: module.id,
    selector: 'cal-tax-slab-detail',
    templateUrl: 'taxSlab.detail.view.component.html',
    styleUrls: ['taxSlab.detail.view.component.scss']
})
export class TaxSlabViewDetailComponent implements OnInit, OnDestroy {
    public taxSlab: ITaxSlab;
    private _ngUnsubscribe: Subject<void> = new Subject<void>();
    private selectedId: number;
    constructor(
        private store: Store<fromStore.IAppState>) {
    }

    ngOnInit() {
        this.store.select(fromStore.getSelectedTaxSlabsId)
        .takeUntil(this._ngUnsubscribe)
        .subscribe(selectedTaxSlabsId => {
            this.selectedId = selectedTaxSlabsId;
        });

        this.store.select(fromStore.getSelectedTaxSlab)
            .takeUntil(this._ngUnsubscribe)
            .subscribe(taxSlab => {
                if (!taxSlab.taxSlabDetail) {
                    this.store.dispatch(new TaxSlab.LoadTaxSlabDetailAction(this.selectedId));
                }
                this.taxSlab = taxSlab;
            });
    }

    ngOnDestroy() {
        this._ngUnsubscribe.next();
        this._ngUnsubscribe.complete();
    }
}
