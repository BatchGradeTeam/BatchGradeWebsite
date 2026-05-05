import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="text-6xl font-extrabold text-zinc-900 mb-4">404</h1>
        <p className="text-2xl font-semibold text-zinc-700 mb-6">Page not found.</p>
        <p className="text-zinc-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link
            href="/"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors"
          >
            Go home
          </Link>

          <Link
            href="/docs"
            className="text-zinc-600 hover:text-zinc-900 px-4 py-2 rounded-lg transition-colors"
          >
            Browse docs
          </Link>
        </div>
      </div>
    </main>
  );
}
