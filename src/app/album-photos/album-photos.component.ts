import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService, Photo } from '../albums.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    if (albumId) {
      this.albumsService.getPhotos(albumId).subscribe(photos => {
        this.photos = photos;
      });
    }
  }

  goBack(): void {
    this.router.navigate([`/albums/${this.route.snapshot.paramMap.get('id')}`]);
  }
}