import Link from 'next/link'
import { connect } from 'react-redux'
import Clock from './Clock'
import AddCount from './AddCount'
import withRoot from '../lib/material-ui/withRoot';
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const Red = styled.span`
  color: blue;
`

export default connect(state => state)(withRoot(({ title, linkTo, lastUpdate, light }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <p><Red>Hello</Red> from Next.js</p>
        <Button onClick={(e) => console.log(e, "clicked")} variant="raised">
          Click Me
        </Button>
      </div>
      <Clock lastUpdate={lastUpdate} light={light} />
      <AddCount />
      <nav>
        <Link href={linkTo}><a>Navigate</a></Link>
      </nav>
    </div>
  )
}))
