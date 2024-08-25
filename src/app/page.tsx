import Image from 'next/image';
import { db } from '~/server/db';

// everytime this page is loaded, it will be rendered new data from server
export const dynamic = 'force-dynamic';

export default async function HomePage() {

  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id),
  });

  return (
    <main className="">
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
    </main>
  );
}
