import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AppServiceService {

  constructor(private _http: Http,private jsonp: Jsonp) { }

  getPost() {
    this._http.get("http://jsonplaceholder.typicode.com/posts");
  }


  search (term : string) {
    let url='https://api.spotify.com/v1/search?type=artist&q='+term;
    
    // let params = new URLSearchParams();
    // params.set('search',term);
    // params.set('action', 'opensearch');
    // params.set('format', 'json');
    // params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp.get(url).map(response => <string[]> response.json()[1]);

}
}
