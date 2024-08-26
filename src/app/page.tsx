import { SignedIn, SignedOut } from '@clerk/nextjs';
import Image from 'next/image';
import { getMyImages } from '~/server/queries';

// everytime this page is loaded, it will be rendered new data from server
export const dynamic = 'force-dynamic';

async function Images(){
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
        {images.map((item) => (
          <div key={item.id} className=" flex flex-col items-center justify-center w-48 p-4">
            <Image
              src={item.url}
              alt="Image"
              width={300}
              height={300}
              className="rounded-lg"
              priority
            />
            <span className="text-sm mt-3" >{item.name}</span> 
          </div>
        ))}
      </div>
  )
}

export default async function HomePage() {
 

  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl">
          Please sign in to view your images
        </div>
      </SignedOut>
      <SignedIn>
        <Images/>
      </SignedIn>
      
    </main>
  );
}
