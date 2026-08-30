export function LibraryLoadingFallback() {
  return (
    <section className='h-[70vh] py-20 bg-gradient-to-b from-background via-gray-50/30 to-background'>
      <div className='container mx-auto px-6'>
        <div className='flex items-center justify-center h-full'>
          <div className='text-center'>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4'></div>
            <p className='text-gray-600'>正在加载病毒库数据...</p>
          </div>
        </div>
      </div>
    </section>
  )
}
