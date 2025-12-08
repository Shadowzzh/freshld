import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch(
      'https://magicshield-dl.oss-cn-hangzhou.aliyuncs.com/vlb/vul-info.json',
      {
        cache: 'no-store', // 确保获取最新数据
      },
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error('获取病毒库数据失败:', error)
    return NextResponse.json({ error: '无法获取病毒库数据' }, { status: 500 })
  }
}
