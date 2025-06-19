import { trpc } from '@/utils/trpc';

export function HomePage() {
    const greetingQuery = trpc.greeting.useQuery('Dhruv');

    return (
        <div>
            <div>
                {greetingQuery.isLoading && <p>Loading . . .</p>}
                {greetingQuery.error && (
                    <p className="text-red-500">Error: {greetingQuery.error.message}</p>
                )}
                {greetingQuery.data && <p>{greetingQuery.data.text}</p>}
            </div>
        </div>
    );
}
