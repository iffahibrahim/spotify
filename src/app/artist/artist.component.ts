import { Component, OnInit } from '@angular/core';
import {SpotifyService } from '../spotify.service';
import { Artist } from '../../Artist';
import { Album } from '../../Album';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id : string;
  artist : Artist[];
  album : Album[];

  constructor(private sServe:SpotifyService) { }

  ngOnInit() {
  }

}
