import { Component, OnInit } from '@angular/core';
import { AlbumsService, Album } from '../albums.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  newAlbumTitle: string = '';

  constructor(private albumsService: AlbumsService, private router: Router) {}

  ngOnInit(): void {
    this.fetchAlbums();
  }

  fetchAlbums(): void {
    this.albumsService.getAlbums().subscribe(data => {
      this.albums = data;
    });
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }

  viewAlbum(id: number): void {
    this.router.navigate([`/albums/${id}`]);
  }

  createAlbum(): void {
    if (this.newAlbumTitle.trim()) {
      const newAlbum: Album = { userId: 1, id: Date.now(), title: this.newAlbumTitle };
      this.albumsService.createAlbum(newAlbum).subscribe(album => {
        this.albums.push(album);
        this.newAlbumTitle = '';
      });
    }
  }
}

