import { NextSeo } from 'next-seo'
import Script from 'next/script'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'

export default function Layout({ children }) {
  const description = 'Vinh Pham is a Full Stack in Houston, TX that uses React and Vue to build web applications and NestJS for API backends'
  return (
    <>
      <NextSeo
        title='Vinh Pham Full-Stack Developer'
        titleTemplate = 'Vinh Pham | %s'
        description={description}
        canonical="https://vinh.cloud/"
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
        ]}
        openGraph={{
          url: 'https://vinh.cloud/',
          title: 'Vinh Pham',
          type: 'website',
          description,
          images: [
            {
              url: 'https://vinh.cloud/og-graph.png',
              width: 1200,
              height: 628,
              alt: 'Elvee Studio Website',
              type: 'image/png',
            },
          ],
          site_name: 'Vinh Pham',
        }}
      />
      {/* <Script defer data-domain="elvee.studio" src="https://analytics.elvee.studio/js/plausible.js" /> */}
      {/* <Header /> */}
      <main className="bg-gray-bg text-gray-300">{children}</main>
      {/* <Footer /> */}
    </>
  )
}
