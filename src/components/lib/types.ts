export interface LibraryData {
  id: 'linux' | 'windows-lite' | 'windows-full'
  title: string
  platform: 'Linux' | 'Windows'
  updateDate: string
  fileMd5: string
  fileSha1: string
  downloadUrl: string
  platformIcon?: React.ComponentType<{ className?: string }> | null
}
