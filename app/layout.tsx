import Header from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Carana',
  description: 'Rent your best car with Carana!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className="relative">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
