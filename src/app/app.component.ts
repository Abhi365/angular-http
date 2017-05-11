import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppServiceService } from './app-service.service';
import { Subject } from 'rxjs/subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: Observable<string[]>;
  constructor(private appService: AppServiceService){}
  // private searchTermStream = new Subject<string>();

 search (term: string) {
    this.items = this.appService.search(term);
    console.log(this.items);
  }

ngOnInit(){

}
  // search(term: string) { this.searchTermStream.next(term); }
  // ngOnInit() {
  //   this.items = this.searchTermStream
  //     .debounceTime(300)
  //     .distinctUntilChanged()
  //     .switchMap((term: string) => this.appService.search(term));
  // }
}
