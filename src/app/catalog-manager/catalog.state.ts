import { Action, NgxsOnInit, State, StateContext } from '@ngxs/store';
import { Band } from './band';
import { HttpClient } from '@angular/common/http';
import { InitCatalog } from './catalog.actions';
import { tap } from 'rxjs/operators';

@State<Array<Band>>({
  name: 'bands',
  defaults: []
})
export class CatalogState implements NgxsOnInit {

  constructor(private http: HttpClient) {}

  ngxsOnInit(ctx: StateContext<Array<Band>>) {
    console.log('State initialized, now getting vinyls !');
    ctx.dispatch(new InitCatalog());
  }

  @Action(InitCatalog)
  initShop({setState}: StateContext<Array<Band>>, {}: InitCatalog) {
    return this.http.get<Band[]>('http://localhost:3000/catalog').pipe(
      tap(datas => setState(datas))
    );
  }
}
