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
        <div className="pt-10">
            <p className="text-center font-bold text-3xl mb-10">Math page</p>

            {squareQuery.isLoading && <p className="text-center">Calculating square of { num } . . .</p>}
            {squareQuery.error && (
                <p className="text-center text-red-500">Error: {squareQuery.error.message}</p>
            )}
            {squareQuery.data && (
                <p className="text-center font-bold">{squareQuery.data.result}</p>
            )}


            {sqrtQuery.isLoading && <p className="text-center">Calculating square root of { num } . . .</p>}
            {sqrtQuery.error && (
                <p className="text-center text-red-500">Error: {sqrtQuery.error.message}</p>
            )}
            {sqrtQuery.data && (
                <p className="text-center font-bold">{sqrtQuery.data.result}</p>
            )}

            <div className="max-w-80 flex flex-col gap-4 p-4 mx-auto">
                <Label>
                    <span className="text-sm">Enter a number :</span>
                    <Input
                        type="number"
                        value={num}
                        onChange={(e) => setNum(Number(e.currentTarget.value))}
                    />
                </Label>

                <Button onClick={() => {
                    squareQuery.refetch();
                    sqrtQuery.refetch();
                }}>Submit</Button>
            </div>
        </div>
    );
}
