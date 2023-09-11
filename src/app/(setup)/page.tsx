import React from 'react';
import { initialProfile } from '@/lib/initial-profile';
import { db } from '@/lib/db';
import { redirect } from 'next/navigation';
import InitialModal from '@/components/modals/Initial-modal';

const SetupPage = async () => {
    const profile = await initialProfile();

    // GET SERVER THIS PROFILE IS MEMBER OF
    const server = await db.server.findFirst({
        where: {
            members: {
                some: {
                    profileId: profile.id,
                },
            },
        },
    });

    if (server) return redirect(`/servers/${server.id}`);

    return (
        <div>
            <InitialModal />
        </div>
    );
};

export default SetupPage;
