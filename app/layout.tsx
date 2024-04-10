import ClientLayout from './ClientLayout'
import ReactQueryClientProvider from './utils/ReactQueryClientProvider'

export const metadata = {
  title: 'Fanvue\'s Frontend coding challenge 💻',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body>
          <ClientLayout>{children}</ClientLayout>
        </body>
      </html>
    </ReactQueryClientProvider>
  )
}