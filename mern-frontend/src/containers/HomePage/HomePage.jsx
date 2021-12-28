import { Container } from "react-bootstrap"
import { NavBar } from "../../components/NavBar/NavBar"
import { MenuHeader } from "../../components/MenuHeader/MenuHeader"

export const HomePage = () => {
    return (
        <div>
            <NavBar />
            <MenuHeader />
            <Container fluid>
            </Container>
        </div>
    )
}
