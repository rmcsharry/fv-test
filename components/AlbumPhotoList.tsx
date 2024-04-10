"use client"

import { useQuery } from '@tanstack/react-query';
import Grid from '@mui/material/Grid';
import { getAlbumPhotos } from '../services/getAlbumPhotos';
import Image from 'next/image';
import { useState } from 'react';
import { Box, Modal } from '@mui/material';
import { AlbumPhoto } from '../types/AlbumPhoto';

const AlbumPhotoList = () => {
  const { data: albumphotos, error, isFetched } = useQuery({
    queryKey: ['albumphotos'],
    queryFn: getAlbumPhotos
  });
  const [selectedImage, setSelectedImage] = useState<string | null>('');

  const handleOpen = (url: string) => {
    setSelectedImage(url);
  };

  const handleClose = () => {
    console.log('close');
    setSelectedImage(null);
  };

  return (
    <main>
      {albumphotos?.length === 0 && <h1>Loading...</h1>}
      <Grid container spacing={2} justifyContent="center">
        {albumphotos?.map((photo) => (
          <Grid item key={photo.id}>
            <Image src={photo.thumbnailUrl}
              alt={photo.title}
              width={150}
              height={150}
              onClick={() => handleOpen(photo.url)}
            />
          </Grid>
        ))}
      </Grid>
      <Modal
        open={!!selectedImage}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box onClick={handleClose} sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image src={selectedImage as string}
            alt="selected"
            width={600}
            height={600}
            onClick={(e) => {
              e.stopPropagation();
              handleOpen(selectedImage as string)
            }}
          />
        </Box>
      </Modal>
    </main>
  );
};

export default AlbumPhotoList;
