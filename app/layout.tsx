import Head from 'next/head'
import ClientLayout from './ClientLayout'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}