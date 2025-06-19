import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { trpc } from '@/utils/trpc';
import { Label } from '@radix-ui/react-label';
import { useState } from 'react';

export function MathPage() {
    const [num, setNum] = useState<string>('');
    const parsedNum = Number(num);

    const squareQuery = trpc.math.square.useQuery(parsedNum, {
        enabled: false,
    });

    const sqrtQuery = trpc.math.sqrt.useQuery(parsedNum, {
        enabled: false,
    });

    return (
        <div className="flex items-center justify-center min-h-[70vh]">
            <div className="max-w-md w-full bg-white dark:bg-white/5 rounded-xl shadow-lg backdrop-blur-sm p-6 space-y-6 border border-white/20">
                <p className="text-center text-2xl font-bold text-black dark:text-white">
                    Math Page
                </p>

                {squareQuery.isLoading && (
                    <p className="text-center italic text-blue-600 dark:text-blue-400">
                        Calculating square of {num}...
                    </p>
                )}
                {squareQuery.error && (
                    <p className="text-center text-red-600 dark:text-red-400">
                        Error: {squareQuery.error.message}
                    </p>
                )}
                {squareQuery.data && (
                    <p className="text-center text-xl font-semibold text-green-600 dark:text-green-400">
                        Result: {squareQuery.data.result}
                    </p>
                )}

                {sqrtQuery.isLoading && (
                    <p className="text-center italic text-blue-600 dark:text-blue-400">
                        Calculating √{num}...
                    </p>
                )}
                {sqrtQuery.error && (
                    <p className="text-center text-red-600 dark:text-red-400">
                        Error: {sqrtQuery.error.message}
                    </p>
                )}
                {sqrtQuery.data && (
                    <p className="text-center text-xl font-semibold text-green-600 dark:text-green-400">
                        Result: {sqrtQuery.data.result}
                    </p>
                )}

                <div className="space-y-4">
                    <Label className="block">
                        <span className="text-sm">Enter a number:</span>
                        <Input
                            type="number"
                            value={num}
                            placeholder=""
                            onChange={(e) => setNum(e.currentTarget.value)}
                            className="mt-1"
                        />
                    </Label>

                    <Button
                        className="w-full bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80"
                        disabled={!num}
                        onClick={() => {
                            if (!num) return;
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
