import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService, Album } from '../albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editedTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.albumsService.getAlbum(id).subscribe(album => {
        this.album = album;
        this.editedTitle = album.title;
      });
    }
  }

  saveChanges(): void {
    if (this.album) {
      this.album.title = this.editedTitle;
      this.albumsService.updateAlbum(this.album).subscribe(() => {
        alert('Album updated!');
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}