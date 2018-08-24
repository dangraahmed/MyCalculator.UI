import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Rx';

import * as fromStore from '../../../modules/shared/ngrx/index';
import { TaxSlab } from '../../../modules/user/taxSlab/actions/index';
import { ITaxSlabState } from '../../../modules/user/taxSlab/index';

@Component({
    moduleId: module.id,
    selector: 'cal-tax-slab',
    templateUrl: 'taxSlab.view.component.html',
    styleUrls: ['taxSlab.view.component.scss']
})

export class TaxSlabViewComponent implements OnInit, OnDestroy {
    public listOfTaxSlab: ITaxSlabState;
    private _ngUnsubscribe: Subject<void> = new Subject<void>();

    constructor(private store: Store<fromStore.IAppState>
        , private router: Router) {
    }

    ngOnInit() {
        this.store.select(fromStore.getTaxSlabs)
            .takeUntil(this._ngUnsubscribe)
            .subscribe(taxSlabs => {
                if (!taxSlabs) {
                    this.store.dispatch(new TaxSlab.LoadTaxSlabAction());
                }
                this.listOfTaxSlab = taxSlabs;
            });
    }

    curdOperation(selectedTaxSlabId: number, action: string) {
        this.store.dispatch(new TaxSlab.SelectTaxSlab(selectedTaxSlabId));

        if (action === 'view') {
            this.router.navigate(['/admin/taxSlab/viewDetail']);
        } else if (action === 'edit') {
            this.router.navigate(['/admin/taxSlab/addEdit']);
        } else if (action === 'delete') {
            this.store.dispatch(new TaxSlab.DeleteTaxSlabAction(selectedTaxSlabId));
        }
    }

    ngOnDestroy() {
        this._ngUnsubscribe.next();
        this._ngUnsubscribe.complete();
    }
}
