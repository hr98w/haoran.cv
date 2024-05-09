import Container from '@/components/layout/Container.tsx'
import BaseSeparator from '@/components/ui/BaseSeparator.tsx'
import BaseTextLink from '@/components/ui/BaseTextLink.tsx'

const data = [
  {
    heading: 'Hardware',
    list: [
      {
        label: 'Laptop',
        value: 'Apple MacBook Pro 13" (2020)',
      },
      {
        label: 'Monitor',
        value: 'Dell UltraSharp U2723QE',
        link: 'https://www.dell.com/en-us/shop/dell-ultrasharp-27-4k-usb-c-hub-monitor-u2723qe/apd/210-bdpf/monitors-monitor-accessories',
      },
      {
        label: 'Monitor Light',
        value: 'BenQ ScreenBar Halo',
        link: 'https://www.benq.com/en-us/lighting/monitor-light/screenbar-halo.html',
      },
      {
        label: 'Headphones',
        value: 'Sennheiser Momentum M3',
      },
      {
        label: 'Speakers',
        value: 'Audioengine A1 Wireless',
        link: 'https://audioengine.com/shop/wirelessspeakers/a1-wireless-speaker-system/',
      },
      {
        label: 'Mouse',
        value: 'Logitech MX Master 2S',
      },
    ],
  },
  {
    heading: 'Workspace',
    list: [
      {
        label: 'Chair',
        value: 'Herman Miller Mirra 2',
        link: 'https://www.hermanmiller.com/products/seating/office-chairs/mirra-2-chairs/',
      },
      {
        label: 'Standing Desk',
        value: 'Jarvis Bamboo',
        link: 'https://store.hermanmiller.com/standing-desks/jarvis-bamboo-standing-desk/2542428.html',
      },
      {
        label: 'Desk Pad',
        value: 'Grovemade Wool Felt',
        link: 'https://grovemade.com/product/wool-felt-desk-pad/',
      },
      {
        label: 'Desk Shelf',
        value: 'Grovemade Walnut',
        link: 'https://grovemade.com/product/wood-desk-shelf/',
      },
      {
        label: 'Desk Tray',
        value: 'Grovemade Tray',
        link: 'https://grovemade.com/desk-tray-organizers/',
      },
    ],
  },
  {
    heading: 'Dev Tools',
    list: [
      {
        label: 'IDE',
        value: 'Visual Studio Code',
        link: 'https://code.visualstudio.com/',
      },
      {
        label: 'Font',
        value: 'CamingoCode',
        link: 'https://janfromm.de/typefaces/camingocode/',
      },
      {
        label: 'Terminal',
        value: 'Warp',
        link: 'https://www.warp.dev/',
      },
      {
        label: 'Shell',
        value: 'Zsh',
        link: 'https://www.zsh.org/',
      },
      {
        label: 'Browser',
        value: 'Chrome',
        link: 'https://www.google.com/chrome/',
      },
      {
        label: 'Design',
        value: 'Figma',
        link: 'https://www.figma.com/',
      },
    ],
  },
  {
    heading: 'Productivity',
    list: [
      {
        label: 'Notes / Docs',
        value: 'Notion',
        link: 'https://www.notion.so/',
      },
      {
        label: 'Tasks',
        value: 'Notion',
        link: 'https://www.notion.so/',
      },
      {
        label: 'Todo',
        value: 'Microsoft To Do',
        link: 'https://to-do.office.com/tasks/',
      },
      {
        label: 'Time Tracker',
        value: 'Flow',
        link: 'https://www.flow.app/',
      },
      {
        label: 'Launcher',
        value: 'Raycast',
        link: 'https://www.raycast.com/',
      },
    ],
  },
]

export default function UsesPage() {
  return (
    <Container>
      <section className="mb-8">
        <h1 className="mb-1 font-bold text-heading-2 md:text-heading-1">Uses</h1>
        <p className="mb-4 text-body-2 md:mb-5 md:text-body-1">
          The stuff I use on my day-to-day basis.
        </p>
        <BaseSeparator />
      </section>

      <section className="grid gap-5 md:grid-cols-2 md:gap-6">
        {data.map(({ heading, list }) => (
          <section
            key={heading}
            className="px-6 pt-4 pb-6 bg-orange-500/15 rounded-xl dark:bg-dark-blue-950/50 sm:last:col-span-2 md:first:col-span-2 md:[&:nth-child(2)]:col-span-2"
          >
            <h2 className="mb-3 font-semibold text-heading-5 md:text-heading-4">{heading}</h2>
            <ul className="grid gap-y-3 md:gap-y-1.5">
              {list.map(({ label, link, value }) => (
                <li key={label} className="font-medium text-caption md:text-body-3">
                  {label}
                  <span className="font-normal md:font-[350]"> - </span>
                  {link ? (
                    <BaseTextLink
                      className="font-[375] md:font-[350]"
                      href={link}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {value}
                    </BaseTextLink>
                  ) : (
                    <span className="font-[375] md:font-[350]">{value}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <p className="mt-1 text-neutral-900 dark:text-slate-300 md:col-span-2 md:mt-2">
          <small className="font-[375] text-caption">
            <span className="text-orange-500">*</span> Inspired by{' '}
            <BaseTextLink href="https://wesbos.com/" rel="noreferrer" target="_blank">
              Wes Bos
            </BaseTextLink>{' '}
            and his cool project -{' '}
            <BaseTextLink href="https://uses.tech/" rel="noreferrer" target="_blank">
              https://uses.tech/
            </BaseTextLink>
          </small>
        </p>
      </section>
    </Container>
  )
}
