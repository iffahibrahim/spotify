import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SpotifyService} from '../spotify.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SpotifyService]
})
export class SearchComponent {
  searchStr : string;
  listRes = null;
  searchKeyupStream$ = new Subject();
  @Output() emitSearchKey = new EventEmitter();

  constructor(private sServ: SpotifyService) {}

  searchMusic(){
    this.sServ.searchMusic(this.searchStr)
    .subscribe((response: any) => {
      console.log(response);
      this.listRes = response.artists.items;
      console.log(this.listRes, "test");
      },
      err => {
        console.log(err);
      },
      () =>
        console.log("completed"));
    }
  }
