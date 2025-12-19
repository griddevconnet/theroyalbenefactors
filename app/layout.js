import './globals.css'

export const metadata = {
  title: 'Royal Benefactors - Making a Difference',
  description: 'A charitable organization dedicated to making positive impacts in communities',
  icons: {
    icon: '/images/logo-modified.png',
    apple: '/images/logo-modified.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
