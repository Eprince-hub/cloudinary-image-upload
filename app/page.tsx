import Image from 'next/image';
import { getImagesInsecure } from '../database/queries';
import ImageForm from './images/ImageForm';

export default async function Home() {
  const images = await getImagesInsecure();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold self-center">
          Upload Image to Cloudinary
        </h1>
        <div className="grid grid-cols-2 gap-6">
          {/* Display only images */}
          {images.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-center">Images</h2>
              <ul className="grid grid-cols-6 gap-4 mt-4">
                {images.map((image) => (
                  <li
                    key={`image-${image.id}`}
                    className="flex items-center flex-col"
                  >
                    <Image
                      src={image.url}
                      alt="Uploaded image"
                      className="w-16 h-16 rounded-full"
                      width={40}
                      height={40}
                    />
                    <span className="block text-sm text-center">
                      {image.type}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <ImageForm buttonTitle="API Upload" formTitle="Upload Image" />
        </div>
      </main>
    </div>
  );
}
