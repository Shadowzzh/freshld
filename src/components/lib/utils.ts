import { ApiVirusLibraryItem, LibraryData } from './types'

export function mapApiDataToLibraryData(
  apiItems: ApiVirusLibraryItem[],
): LibraryData[] {
  return apiItems.map(item => {
    // 使用 MD5 作为唯一ID
    const id = item.md5

    // 确定平台
    const platform = item.os_type === 'linux' ? 'Linux' : 'Windows'

    return {
      id,
      title: item.title,
      platform,
      updateDate: item.release_time,
      fileMd5: item.md5,
      fileSha1: item.sha1,
      downloadUrl: item.download_url,
      platformIcon: null,
    }
  })
}
