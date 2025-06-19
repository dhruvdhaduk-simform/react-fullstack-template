import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { trpc } from '@/utils/trpc';
import { Label } from '@radix-ui/react-label';
import { useState } from 'react';

export function HomePage() {
    const [name, setName] = useState('');
    const greetingQuery = trpc.greeting.useQuery(name, {
        enabled: false,
    });

    return (
        <div className="pt-14">
            {greetingQuery.isLoading && <p className="text-center">Loading . . .</p>}
            {greetingQuery.error && (
                <p className="text-center text-red-500">Error: {greetingQuery.error.message}</p>
            )}
            {greetingQuery.data && (
                <p className="text-center font-bold text-3xl">{greetingQuery.data.message}</p>
            )}

            <div className="max-w-80 flex flex-col gap-4 p-4 mx-auto">
                <Label>
                    <span className="text-sm">Your Name</span>
                    <Input value={name} onChange={(e) => setName(e.currentTarget.value)} />
                </Label>
                <Button onClick={() => greetingQuery.refetch()}>Submit</Button>
            </div>
        </div>
    );
}
