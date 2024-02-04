import { SSiteFooter } from './SiteFooter.styled'
import { Container } from '../Container'

export const SiteFooter = () => (
  <SSiteFooter>
    <Container>
      <p>
        <i className="fa fa-copyright" /> <strong>Asher Stoppard Limited</strong>{' '}
        {new Date().getFullYear()}
      </p>
      <p>
        <small>
          <strong>Asher Stoppard Limited</strong> is a company registered in England and Wales.
          Registered number: 1033320. Registered office: 28 Wellingtonia Crescent, Edwalton,
          Nottingham, NG12 4GU.
        </small>
      </p>
    </Container>
  </SSiteFooter>
)
