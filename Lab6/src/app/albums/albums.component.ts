import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  newAlbum: Album = {
    userId: 0,
    id: 0,
    title: '',
  };
  idIterator: number;
  constructor(private albumsService: AlbumsService) {
    this.idIterator = 100;
    this.albums = [];
    this.newAlbum = {} as Album;
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }
  deleteAlbum(id: number) {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter((album) => album.id !== id);
    });
  }
  onSubmit() {
    this.albumsService.createAlbum(this.newAlbum).subscribe((album) => {
      album.id = ++this.idIterator;
      this.albums.push(album);
    });
  }
}
