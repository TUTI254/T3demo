"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { UploadButton } from '~/utils/uploadthing';

const TopNav = () => {
  const router = useRouter();
    return (
        <nav className="flex items-center justify-between w-full px-4 py-2 text-xl font-semibold ">
          <div>Anime watched</div>
          <div>
            <SignedOut>
                <SignInButton/>
            </SignedOut>
            <SignedIn>
              <UploadButton
                endpoint='imageUploader'
                onClientUploadComplete={() => {
                  router.refresh();
                }}
              />
                <UserButton/>
            </SignedIn>
          </div>
        </nav>
    );
}

export default TopNav
