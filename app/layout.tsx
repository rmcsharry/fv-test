import ClientLayout from './ClientLayout'

export const metadata = {
  title: 'Fanvue\'s Frontend coding challenge 💻',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}