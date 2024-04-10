import { AlbumPhoto } from '../types/AlbumPhoto';

export async function getAlbumPhotos(): Promise<AlbumPhoto[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
  if (!res.ok) throw new Error("Failed to fetch");

  const albumPhotos: AlbumPhoto[] = await res.json();

  return albumPhotos;
}