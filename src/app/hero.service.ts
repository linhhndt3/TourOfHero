import { Injectable } from '@angular/core';
import {Hero} from './hero';
import { HEROES } from './mock-heroes';
@Injectable()
export class HeroService {

  private Heroes : Hero[];

  getHeroes() : Hero[] {
    console.log('service asd');
    console.log(HEROES);
    return HEROES;
  }
}
