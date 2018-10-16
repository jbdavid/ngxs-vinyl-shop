import {Vinyl} from './vinyls';

export interface Band {

  id: number;
  name: string;
  releases: Array<Vinyl>;
}
