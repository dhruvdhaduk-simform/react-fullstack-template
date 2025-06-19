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
        <div className="flex items-center justify-center min-h-[70vh]">
            <div className="max-w-md w-full bg-white dark:bg-white/5 rounded-xl shadow-lg backdrop-blur-sm p-6 space-y-6 border border-white/20">
                {greetingQuery.isLoading && <p className="text-center">Loading . . .</p>}
                {greetingQuery.error && (
                    <p className="text-center text-red-600 dark:text-red-400">
                        Error: {greetingQuery.error.message}
                    </p>
                )}
                {greetingQuery.data && (
                    <p className="text-center text-3xl font-bold text-blue-600 dark:text-blue-400">
                        {greetingQuery.data.message}
                    </p>
                )}

                <div className="space-y-4 flex flex-col">
                    <Label>
                        <span className="text-sm/loose">Your Name</span>
                        <Input value={name} onChange={(e) => setName(e.currentTarget.value)} />
                    </Label>
                    <Button
                        className="bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80"
                        onClick={() => greetingQuery.refetch()}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
}
