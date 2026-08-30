import { LibraryCard } from './LibraryCard'
import { mapApiDataToLibraryData } from './utils'
import { getVirusLibraryData } from '@/lib/virus-library'
import { ErrorBoundaryFallback } from './ErrorBoundaryFallback'

export async function LibraryDownloadSection() {
  try {
    const data = await getVirusLibraryData()
    const libraryData = mapApiDataToLibraryData(data.vul_db_list)
    const allowedUuids = data.allow_uuid_list

    return (
      <section className='h-[70vh] py-20 bg-gradient-to-b from-background via-gray-50/30 to-background'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
            {libraryData.map(library => (
              <LibraryCard
                key={library.id}
                libraryData={library}
                allowedUuids={allowedUuids}
              />
            ))}
          </div>
        </div>
      </section>
    )
  } catch (error) {
    return <ErrorBoundaryFallback error={error} />
  }
}
