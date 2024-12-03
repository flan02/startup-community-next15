'use client' // Error boundaries must be Client Components

// $ This global error does less impact over local errors (error.tsx)

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: ErrorProps) {
  return (
    // ! global-error must include html and body tags
    <html>
      <body>
        <h2 className="text-red-500 text-4xl">Global Error</h2>
      </body>
    </html>
  )
}