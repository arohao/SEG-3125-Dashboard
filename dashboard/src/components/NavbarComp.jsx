import { Navbar, Nav, Container, Button, Form } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export default function NavbarComp({ currency, setCurrency, unit, setUnit }) {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Food Dashboard</Navbar.Brand>

        <Nav className="ms-auto d-flex align-items-center gap-2">
          <Form.Select
            size="sm"
            value={currency}
            onChange={e => setCurrency(e.target.value)}
            style={{ width: '90px' }}
          >
            <option value="CAD">CAD</option>
            <option value="EUR">EUR</option>
          </Form.Select>

          <Form.Select
            size="sm"
            value={unit}
            onChange={e => setUnit(e.target.value)}
            style={{ width: '90px' }}
          >
            <option value="kg">kg</option>
            <option value="lb">lb</option>
          </Form.Select>

          <Button
            size="sm"
            variant="outline-light"
            onClick={toggleLanguage}
          >
            {i18n.language === 'en' ? 'Français' : 'English'}
          </Button>
        </Nav>
      </Container>
    </Navbar>
  )
}
