import {API_BASE_URL} from 'react-native-dotenv';
import {ENDPOINTS} from './endpoints';
import {ApiService} from './apiService';

export enum FILE_CATEGORY {
  AVATARS = 'AVATARS',
  POSTS = 'POSTS',
}

const apiService = new ApiService();

export const getLinkS3ToSaveImage = async (
  fileName: string,
  fileCategory: keyof typeof FILE_CATEGORY,
) => {
  const {data} = await apiService.get<string>(
    `${API_BASE_URL}${ENDPOINTS.getLinkS3ToSaveImage}`,
    {params: {fileName: fileName, fileCategory: fileCategory}},
  );
  return data;
};

export const saveImageToS3 = async (
  fileName: string,
  fileCategory: keyof typeof FILE_CATEGORY,
  pathFile: string,
) => {
  const linkS3ToSaveImage = await getLinkS3ToSaveImage(fileName, fileCategory);

  const response = await fetch(pathFile);
  const imgBlob = await response.blob();

  await fetch(linkS3ToSaveImage, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/octet-stream',
    },
    body: imgBlob,
  });

  return linkS3ToSaveImage.split('?')[0];
};
