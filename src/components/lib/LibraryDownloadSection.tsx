import { LibraryCard } from './LibraryCard'
import { LibraryData } from './types'

export function LibraryDownloadSection() {
  const libraryData: LibraryData[] = [
    {
      id: 'linux',
      title: 'Linux终端标准库',
      platform: 'Linux',
      updateDate: '2025-12-03 08:27',
      fileMd5: '7f7af89a17d837dee8abfcd200a51a32',
      fileSha1: '841b4ebd21dfdd5d5cf9cea1628936644478e89c',
      downloadUrl:
        'https://magicshield-dl.oss-cn-hangzhou.aliyuncs.com/vlb/antic-5.2.1.20251203-linux-lib.zip',
      platformIcon: null,
    },
    {
      id: 'windows-lite',
      title: 'Windows终端精简库',
      platform: 'Windows',
      updateDate: '2025-12-03 08:27',
      fileMd5: '427bd799129b47bd2fc5bbe3a34efba9',
      fileSha1: 'd133c74d3fd13827b578e3521f08ed3d45e360a8',
      downloadUrl:
        'https://magicshield-dl.oss-cn-hangzhou.aliyuncs.com/vlb/antic-5.2.1.20251203_lite-win-lib.zip',
      platformIcon: null,
    },
    {
      id: 'windows-full',
      title: 'Windows终端增强库',
      platform: 'Windows',
      updateDate: '2025-12-03 08:27',
      fileMd5: '582cf563c63325a20a90f8ea7e8b856b',
      fileSha1: 'bd6aa818642b7e9fbcabc44b3a95564b4944ba10',
      downloadUrl:
        'https://magicshield-dl.oss-cn-hangzhou.aliyuncs.com/vlb/antic-5.2.1.20251203-win-lib.zip',
      platformIcon: null,
    },
  ]

  return (
    <section className='h-[70vh] py-20 bg-gradient-to-b from-background via-gray-50/30 to-background'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {libraryData.map(library => (
            <LibraryCard key={library.id} libraryData={library} />
          ))}
        </div>
      </div>
    </section>
  )
}
