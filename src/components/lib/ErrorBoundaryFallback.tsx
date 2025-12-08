'use client'

interface ErrorBoundaryFallbackProps {
  error: unknown
}

export function ErrorBoundaryFallback({ error }: ErrorBoundaryFallbackProps) {
  const errorMessage = error instanceof Error ? error.message : '加载失败'

  return (
    <section className='h-[70vh] py-20 bg-gradient-to-b from-background via-gray-50/30 to-background'>
      <div className='container mx-auto px-6'>
        <div className='flex items-center justify-center h-full'>
          <div className='text-center'>
            <p className='text-red-600 mb-4'>加载失败: {errorMessage}</p>
            <button
              onClick={() => window.location.reload()}
              className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
            >
              重新加载
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
