import cloudinary, { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';

export function uploads(
    file: string,
    public_id?: string,
    overwrite?: boolean,
    invalidate?: boolean
  ): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
    return new Promise(async (resolve) => {
      try {
        const result = await cloudinary.v2.uploader.upload(
          file,
          {
            public_id,
            overwrite,
            invalidate,
            resource_type: 'auto' // zip, images
          }
        );
  
        resolve(result);
      } catch (error: any) {
        resolve(error);
      }
    });
  }
  
export function videoUpload(
    file: string,
    public_id?: string,
    overwrite?: boolean,
    invalidate?: boolean
  ): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
    return new Promise(async (resolve) => {
      try {
        const result = await cloudinary.v2.uploader.upload(
          file,
          {
            public_id,
            overwrite,
            invalidate,
            chunk_size:20000,
            resource_type: 'video' 
          }
        );
  
        resolve(result);
      } catch (error: any) {
        resolve(error);
      }
    });
  }
  