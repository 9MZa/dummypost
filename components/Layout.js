import { Navbar, Container, Heading } from 'react-bulma-components'
import Link from 'next/link'
function Layout({ children }) {
    return (
        <div>
            <Navbar color="warning">
                <Navbar.Brand>
                    <Link href={'/'} passHref>
                        <Navbar.Item  >
                            <Heading>Dummy Post</Heading>
                        </Navbar.Item>
                    </Link>
                    <Navbar.Burger />
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Container>
                        <Link href='/search' passHref>
                            <Navbar.Item >
                                Seach
                            </Navbar.Item>
                        </Link>
                        <Link href='/api/post' passHref>
                            <Navbar.Item >
                                API
                            </Navbar.Item>
                        </Link>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
            {children}
        </div>
    )
}

export default Layout
