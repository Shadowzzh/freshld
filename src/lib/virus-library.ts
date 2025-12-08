import { ApiVirusLibraryResponse } from '@/components/lib/types'

export async function getVirusLibraryData(): Promise<ApiVirusLibraryResponse> {
  try {
    const response = await fetch(
      'https://magicshield-dl.oss-cn-hangzhou.aliyuncs.com/vlb/vul-info.json',
      {
        next: { revalidate: 300 }, // 缓存5分钟
      },
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('获取病毒库数据失败:', error)
    throw new Error('无法获取病毒库数据')
  }
}
