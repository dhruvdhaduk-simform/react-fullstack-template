export function AboutPage() {
    return (
        <div className="flex items-center justify-center min-h-[70vh] p-4">
            <div className="max-w-2xl w-full bg-white dark:bg-white/5 rounded-xl shadow-lg backdrop-blur-sm p-8 space-y-6 border border-white/20">
                <h1 className="text-3xl font-bold text-black dark:text-white text-center">
                    About This Template
                </h1>
                <p className="text-base text-black/80 dark:text-white/80">
                    This project is a fullstack starter template integrating modern tools for rapid
                    web development with end-to-end type safety and minimal styling setup.
                </p>
                <ul className="list-disc list-inside space-y-2 text-black dark:text-white">
                    <li>React + Vite with fast hot module replacement</li>
                    <li>TypeScript for robust, typed code</li>
                    <li>
                        <a
                            href="https://trpc.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-blue-600 dark:text-blue-400"
                        >
                            tRPC
                        </a>{' '}
                        on client and server for zero-API-layer type safety
                    </li>
                    <li>Tailwind CSS with ShaCN.</li>
                    <li>Monorepo managed by pnpm for frontend & backend</li>
                </ul>
                <p className="text-sm italic text-black/60 dark:text-white/60">
                    For setup and usage, see the README in the project root.
                </p>
                <p className="text-base text-black/80 dark:text-white/80">
                    Full documentation, examples, and deployment tips are available in the README:
                    <a
                        href="https://github.com/dhruvdhaduk-simform/react-fullstack-template"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-600 dark:text-blue-400"
                    >
                        GitHub Repository
                    </a>
                </p>
                <ul className="list-disc list-inside space-y-2 text-black dark:text-white">
                    <li>
                        Deploy easily to Vercel (clear the Root Directory setting after the first
                        failed build)
                    </li>
                    <li>Built with tRPC for seamless end-to-end TypeScript type safety</li>
                </ul>
            </div>
        </div>
    );
}
