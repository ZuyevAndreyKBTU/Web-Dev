import {Component, OnInit} from '@angular/core';
import {Photo} from "../photo";
import {AlbumsService} from "../albums.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: Photo[];

  constructor(private route: ActivatedRoute, private photoService: AlbumsService) {
    this.photos = [];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.photoService.getPhotos(id).subscribe((photos: Photo[]) => {
        this.photos = photos;
      });
    });
  }

  returnBack(){
    window.history.back();
  }
}
