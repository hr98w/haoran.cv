import IconBrandsBluesky from '@/assets/icons/icon-brands-bluesky.svg'
import IconBrandsGithub from '@/assets/icons/icon-brands-github.svg'
import IconBrandsLinkedIn from '@/assets/icons/icon-brands-linkedin.svg'
import IconBrandsReddit from '@/assets/icons/icon-brands-reddit.svg'
// import IconBrandsUpwork from '@/assets/icons/icon-brands-upwork.svg'
import IconBrandsXTwitter from '@/assets/icons/icon-brands-x-twitter.svg'
import IconSolidArrowUpRightFromSquare from '@/assets/icons/icon-solid-arrow-up-right-from-square.svg'
import IconQrcode from '@/assets/icons/icon-solid-qr-code.svg'
import ScanLine from '@/assets/icons/scan-line.svg'
import Container from '@/components/layout/Container.tsx'
import BaseIcon from '@/components/ui/BaseIcon.tsx'
import BaseSeparator from '@/components/ui/BaseSeparator.tsx'
import BaseTextLink from '@/components/ui/BaseTextLink.tsx'
import links from '@/data/links.json'
import type { FC, SVGProps } from 'react'
import type { Metadata } from 'next'

const linksList: Array<{ href: string; label: string; Icon: FC<SVGProps<SVGElement>> }> = [
  {
    href: links.social.twitter,
    label: 'Twitter',
    Icon: IconBrandsXTwitter,
  },
  {
    href: links.social.bluesky,
    label: 'Bluesky',
    Icon: IconBrandsBluesky,
  },
  // {
  //   href: links.social.reddit,
  //   label: 'Reddit',
  //   Icon: IconBrandsReddit,
  // },
  // {
  //   href: links.social.linkedin,
  //   label: 'LinkedIn',
  //   Icon: IconBrandsLinkedIn,
  // },
  {
    href: links.social.github,
    label: 'GitHub',
    Icon: IconBrandsGithub,
  },
  // {
  //   href: links.social.upwork,
  //   label: 'Upwork',
  //   Icon: IconBrandsUpwork,
  // },
]

export const metadata: Metadata = {
  title: 'Haoran - haoran.cv',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <Container>
      <section className="mb-11 md:mb-14">
        <h1 className="mb-3 font-bold text-heading-2 dark:text-slate-100 md:text-heading-1">
          Hey, <br className="sm:hidden" />
          I’m <span className="text-orange-500">Haoran</span>!
        </h1>

        <p className="mb-4 text-body-2 sm:max-w-xl md:mb-5 md:max-w-none md:text-body-1">
          Backend engineer based in Beijing <br className="hidden md:block" />
          Building something as a solopreneur and indie developer <br className="hidden md:block" />
        </p>

        <BaseSeparator />
      </section>

      <section className="mb-11 md:mb-14">
        <h2 className="mb-4 font-semibold text-heading-4 dark:text-slate-100 md:mb-6 md:text-heading-3">
          Projects
        </h2>

        <div className="grid gap-8">
          <article>
            <h3 className="mb-1 font-semibold text-heading-5 dark:text-slate-100">
              DigitalMarketings
            </h3>
            <p className="mb-3 text-body-3 md:text-body-2">
              A curated directory of top digital marketing tools to help you drive product growth
              and maximize business impact.
            </p>
            <a
              className="inline-flex items-center gap-x-1.5 pb-1 font-medium text-body-3 dark:text-slate-100"
              href="https://digitalmarketings.io"
              target="_blank"
            >
              <span className="relative transition-colors hover:dark:text-slate-100 after:inline-block after:absolute after:bottom-0 after:inset-x-0 after:h-px after:bg-orange-500 after:transition-[height] hover:after:h-[0.1875rem]">
                Website
              </span>
              <BaseIcon
                as={IconSolidArrowUpRightFromSquare}
                className="size-4 text-dark-blue-950 transition-colors dark:text-slate-100 group-hover:text-dark-blue-950 dark:group-hover:text-white"
              />
            </a>
          </article>

          <article>
            <h3 className="mb-1 font-semibold text-heading-5 dark:text-slate-100 flex items-center gap-2">
              Wechat Official Account (微信公众号)
              <div className="group">
                <BaseIcon
                  as={IconQrcode}
                  className="size-6 text-dark-blue-950 transition-colors dark:text-slate-100 group-hover:text-dark-blue-950 dark:group-hover:text-white"
                />
                <img
                  src="/qr.webp"
                  alt="WeChat QR Code"
                  className="absolute hidden group-hover:block w-48 aspect-square left-1/2 -translate-x-1/2 mt-2 z-10 rounded-lg shadow-lg object-contain"
                />
              </div>
            </h3>
            <p className="mb-3 text-body-3 md:text-body-2">Writing and sharing.</p>
            <a
              className="inline-flex items-center gap-x-1.5 pb-1 font-medium text-body-3 dark:text-slate-100"
              href="https://mp.weixin.qq.com/s/wsoCBGVVq4XR9a8MWxpk_g"
              target="_blank"
            >
              <span className="relative transition-colors hover:dark:text-slate-100 after:inline-block after:absolute after:bottom-0 after:inset-x-0 after:h-px after:bg-orange-500 after:transition-[height] hover:after:h-[0.1875rem]">
                Read
              </span>
              <BaseIcon
                as={IconSolidArrowUpRightFromSquare}
                className="size-4 text-dark-blue-950 transition-colors dark:text-slate-100 group-hover:text-dark-blue-950 dark:group-hover:text-white"
              />
            </a>
          </article>

          {/* <article>
            <h3 className="mb-1 font-semibold text-heading-5 dark:text-slate-100">
              XXX
            </h3>
            <p className="mb-3 text-body-3 md:text-body-2">
              XXX
            </p>
            <a
              className="inline-flex items-center gap-x-1.5 pb-1 font-medium text-body-3 dark:text-slate-100"
              href="https://snowrank.com"
              target="_blank"
            >
              <span className="relative transition-colors hover:dark:text-slate-100 after:inline-block after:absolute after:bottom-0 after:inset-x-0 after:h-px after:bg-orange-500 after:transition-[height] hover:after:h-[0.1875rem]">
                Website
              </span>
              <BaseIcon
                as={IconSolidArrowUpRightFromSquare}
                className="size-4 text-dark-blue-950 transition-colors dark:text-slate-100 group-hover:text-dark-blue-950 dark:group-hover:text-white"
              />
            </a>
          </article> */}
        </div>
      </section>

      <section className="mb-11">
        <h2 className="mb-3 font-medium text-heading-5 dark:text-slate-100">Find me on</h2>
        <ul className="flex flex-wrap gap-x-4 gap-y-2.5 md:gap-6">
          {linksList.map(({ Icon, href, label }) => (
            <li key={label} className="group">
              <a
                className="flex items-center gap-x-2 min-w-[6.25rem] text-body-3 transition-colors dark:group-hover:text-white md:min-w-0"
                href={href}
                rel="noreferrer"
                target="_blank"
              >
                <BaseIcon
                  as={Icon}
                  className="size-5 text-dark-blue-950 transition-colors dark:text-slate-300 dark:group-hover:text-white"
                />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* <section>
        <h2 className="mb-1 font-medium text-heading-5 dark:text-slate-100">Contact</h2>
        <p className="text-body-3 md:text-body-2">
          You can reach me out anytime at{' '}
          <BaseTextLink
            className="font-medium dark:text-slate-100"
            href={`mailto:${links.contact.email}`}
          >
            {links.contact.email}
          </BaseTextLink>
        </p>
      </section> */}
    </Container>
  )
}
