// API 数据格式
export interface ApiVirusLibraryItem {
  os_type: string
  title: string
  download_url: string
  md5: string
  sha1: string
  release_time: string
}

export interface ApiVirusLibraryResponse {
  vul_db_list: ApiVirusLibraryItem[]
  allow_uuid_list: string[]
}

// 组件使用的数据格式
export interface LibraryData {
  id: string
  title: string
  platform: 'Linux' | 'Windows'
  updateDate: string
  fileMd5: string
  fileSha1: string
  downloadUrl: string
  platformIcon?: React.ComponentType<{ className?: string }> | null
}
