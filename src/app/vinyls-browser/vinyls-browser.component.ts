import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Band } from '../catalog-manager/band';

@Component({
  selector: 'app-vinyl-browser',
  templateUrl: './vinyls-browser.component.html',
  styleUrls: ['./vinyls-browser.component.css']
})
export class VinylsBrowserComponent implements OnInit {

  @Select(state => state.bands)
  bands$: Observable<Array<Band>>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

}
