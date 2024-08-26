import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const TopNav = () => {
    return (
        <nav className="flex items-center justify-between w-full px-4 py-2 text-xl font-semibold ">
          <div>Anime watched</div>
          <div>
            <SignedOut>
                <SignInButton/>
            </SignedOut>
            <SignedIn>
                <UserButton/>
            </SignedIn>
          </div>
        </nav>
    );
}

export default TopNav
