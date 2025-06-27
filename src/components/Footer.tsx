import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react'

export const Footer = () => {
  const footerSections = [
    {
      title: '产品',
      links: [
        { name: 'NGEP 端点防护', href: '/products/ngep' },
        { name: 'CNAPP 云原生安全', href: '/products/cnapp' },
        { name: 'CDG 防勒索系统', href: '/products/cdg' },
        { name: '产品对比', href: '/' },
      ],
    },
    {
      title: '公司',
      links: [
        { name: '关于我们', href: '/about' },
        { name: '客户案例', href: '/cases' },
        { name: '联系我们', href: '/contact' },
        { name: '职业机会', href: '/' },
      ],
    },
    {
      title: '解决方案',
      links: [
        { name: '企业安全', href: '/' },
        { name: '云安全', href: '/' },
        { name: '终端安全', href: '/' },
        { name: '威胁检测', href: '/' },
      ],
    },
    {
      title: '资源',
      links: [
        { name: '技术文档', href: '/' },
        { name: '白皮书', href: '/' },
        { name: '安全报告', href: '/' },
        { name: '最佳实践', href: '/' },
      ],
    },
    {
      title: '支持',
      links: [
        { name: '技术支持', href: '/contact' },
        { name: '产品演示', href: '/contact' },
        { name: '培训服务', href: '/' },
        { name: '合作伙伴', href: '/' },
      ],
    },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '/' },
    { name: 'Twitter', icon: Twitter, href: '/' },
    { name: 'LinkedIn', icon: Linkedin, href: '/' },
    { name: 'YouTube', icon: Youtube, href: '/' },
    { name: 'Instagram', icon: Instagram, href: '/' },
  ]

  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8'>
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className='text-lg font-semibold mb-4 text-white'>
                {section.title}
              </h3>
              <ul className='space-y-2'>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className='text-gray-300 hover:text-white transition-colors duration-200 text-sm'
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media Links */}
        <div className='border-t border-gray-700 pt-8 mb-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='mb-4 md:mb-0'>
              <div className='flex items-center mb-2'>
                <span className='text-xl font-bold'>明焰安全</span>
              </div>
              <p className='text-gray-400 text-sm max-w-md'>
                全球领先的云端原生端点保护平台，保护企业免受最先进的威胁攻击。
              </p>
            </div>

            <div className='flex space-x-4'>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className='text-gray-400 hover:text-primary transition-colors duration-200'
                  aria-label={social.name}
                >
                  <social.icon className='w-6 h-6' />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className='border-t border-gray-700 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center text-sm text-gray-400'>
            <div className='mb-4 md:mb-0'>
              <p>&copy; 2025 明焰安全, Inc. 保留所有权利。</p>
            </div>
            <div className='flex flex-wrap justify-center md:justify-end space-x-6'>
              <Link
                href='/'
                className='hover:text-white transition-colors duration-200'
              >
                隐私政策
              </Link>
              <Link
                href='/'
                className='hover:text-white transition-colors duration-200'
              >
                使用条款
              </Link>
              <Link
                href='/'
                className='hover:text-white transition-colors duration-200'
              >
                Cookie 政策
              </Link>
              <Link
                href='/'
                className='hover:text-white transition-colors duration-200'
              >
                法律声明
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
