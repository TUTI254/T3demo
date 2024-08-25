import Image from 'next/image';
import { db } from '~/server/db';

// everytime this page is loaded, it will be rendered new data from server
export const dynamic = 'force-dynamic';

const mockUrls = [
  'https://utfs.io/f/9ead65c2-e18e-4994-abf0-7893cdd18607-ex4y7s.jpg',
  'https://utfs.io/f/d305356a-51bd-4ed6-ab5e-3ef66d8eb43e-8yiwgi.jpg',
  'https://utfs.io/f/e83972da-02af-415a-b11b-01e69b2eab03-68d5zn.jpg',
  'https://utfs.io/f/74689394-92f6-4d86-82c5-d3c3d2b180be-2a5e44.jpg',
  'https://utfs.io/f/6084419c-165b-4860-ac7a-e67f6e19f0f6-heqaxb.jpg',

];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((item) => (
          <div key={item.id} className="w-48 p-2">
            {/* <Image
              src={image.url}
              alt="Image"
              width={300}
              height={300}
              className="rounded-lg"
              priority
            /> */}
            {item.name}
          </div>
        ))}
      </div>
    </main>
  );
}
