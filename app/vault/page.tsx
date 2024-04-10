import React from 'react'
import { getAlbumPhotos } from '../../services/getAlbumPhotos';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import AlbumPhotoList from '../../components/AlbumPhotoList';

export const metadata = {
  title: 'Example Feed for Vault',
  description: 'This is an example feed of a vault (collection) returned from jsonplaceholder.typicode.com',
}

const Vault = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['albumphotos'],
    queryFn: getAlbumPhotos
  });

  return (
    <main>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AlbumPhotoList />
      </HydrationBoundary>
    </main>
  )
}

export default Vault