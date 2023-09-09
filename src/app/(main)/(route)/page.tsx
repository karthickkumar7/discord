// import { Button } from '@/components/ui/button';

import ModeToggle from '@/components/mode-toggle';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
    return (
        <main className="">
            <p className="">this is a protected route</p>
            <UserButton afterSignOutUrl="/" />
            <ModeToggle />
        </main>
    );
}
