import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { trpc } from '@/utils/trpc';
import { Label } from '@radix-ui/react-label';
import { useState } from 'react';

export function MathPage() {
    const [num, setNum] = useState(0);

    const squareQuery = trpc.math.square.useQuery(num, {
        enabled: false,
    });

    const sqrtQuery = trpc.math.sqrt.useQuery(num, {
        enabled: false,
    });

    return (
        <div className="flex items-center justify-center min-h-[70vh]">
            <div className="max-w-md w-full bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-xl backdrop-blur-lg p-6 space-y-6">
                <p className="text-center text-2xl font-bold text-indigo-600 dark:text-indigo-400">Math Page</p>

                {squareQuery.isLoading && (
                    <p className="text-center italic">Calculating square of {num}...</p>
                )}
                {squareQuery.error && (
                    <p className="text-center text-red-500">Error: {squareQuery.error.message}</p>
                )}
                {squareQuery.data && (
                    <p className="text-center text-xl font-semibold text-green-600">Result: {squareQuery.data.result}</p>
                )}

                {sqrtQuery.isLoading && (
                    <p className="text-center italic">Calculating √{num}...</p>
                )}
                {sqrtQuery.error && (
                    <p className="text-center text-red-500">Error: {sqrtQuery.error.message}</p>
                )}
                {sqrtQuery.data && (
                    <p className="text-center text-xl font-semibold text-green-600">Result: {sqrtQuery.data.result}</p>
                )}

                <div className="space-y-4">
                    <Label className="block">
                        <span className="text-sm">Enter a number:</span>
                        <Input
                            type="number"
                            value={num}
                            onChange={(e) => setNum(Number(e.currentTarget.value))}
                            className="mt-1"
                        />
                    </Label>

                    <Button
                        className="w-full"
                        onClick={() => {
                            squareQuery.refetch();
                            sqrtQuery.refetch();
                        }}
                    >
                        Compute
                    </Button>
                </div>
            </div>
        </div>
    );
}
