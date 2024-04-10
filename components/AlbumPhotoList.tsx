"use client"

import { useQuery } from '@tanstack/react-query';
import Grid from '@mui/material/Grid';
import { getAlbumPhotos } from '../services/getAlbumPhotos';
import Image from 'next/image';

const AlbumPhotoList = () => {
  const { data: albumphotos, error, isFetched } = useQuery({
    queryKey: ['albumphotos'],
    queryFn: getAlbumPhotos
  });

  return (
    <main>
      {albumphotos?.length === 0 && <h1>Loading...</h1>}
      <Grid container spacing={2} justifyContent="center">
        {albumphotos?.map((photo) => (
          <Grid item key={photo.id}>
            <Image src={photo.thumbnailUrl} alt={photo.title} width={150} height={150} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default AlbumPhotoList;
