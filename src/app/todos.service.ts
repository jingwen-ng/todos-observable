import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  items = ['abc', 'abc']

  constructor() {}
}
