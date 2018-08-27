import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../../shared/provider/api.service';
import { ITaxSlabState, ITaxSlabDetail, ITaxSlab } from '../states/taxSlab.state';

@Injectable()
export class TaxSlabService {

    constructor(private http: ApiService) {

    }

    getTaxSlabs(): Observable<ITaxSlabState> {
        return this.http.get({}, 'taxSlab/listTaxSlabs')
            .map(res => res)
            .catch(this.handleError.bind(this));
    }

    getTaxSlabDetail(id: number): Observable<Array<ITaxSlabDetail>> {
        return this.http.get({}, 'taxSlab/listTaxSlabDetail/' + id)
            .map(res => res)
            .catch(this.handleError.bind(this));
    }

    addUpdateTaxSlab(taxSlab: ITaxSlab): Observable<ITaxSlab> {
        return this.http.post(taxSlab, 'taxSlab/insertUpdateTaxSlab')
            .map(res => res)
            .catch(this.handleError.bind(this));
    }

    deleteTaxSlab(id: number): Observable<boolean> {
        return this.http.post(null, 'taxSlab/deleteTaxSlab/' + id)
            .map(res => res)
            .catch(this.handleError.bind(this));
    }


    private handleError(error: any): Observable<any> {
        return Observable.throw(error.message || error);
    }
}
