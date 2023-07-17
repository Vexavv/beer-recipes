import '../styles/globals.css'
export const metadata = {
    title: 'Beer recipes',
    description: 'Best beer recipes',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <main className='app'>{children}</main>
        </body>
        </html>
    )
}
