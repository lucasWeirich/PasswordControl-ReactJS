import Button from '../Button/Button'
import * as H from './Header.styles'

export default function Header() {
  return <H.Wrapper>
    <div className="Container">
      <H.Logo>
        Password Control
      </H.Logo>

      <Button
        label='Create'
        variant='primary'
      />
    </div>
  </H.Wrapper>
}