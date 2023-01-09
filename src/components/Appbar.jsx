
import styled from 'styled-components'
import { GitHub, Reddit, Facebook,Twitter } from '@mui/icons-material';
import {Link} from 'react-router-dom'

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  background: rgb(2,0,36);
  color:#fff;
  font-size: 20px;
  gap:0.7em;
  Link {
    display: block;
    text-align: center;
    color: blue;
    text-decoration: none;
    &:hover {
      color: red;
    }
  }
  /* Add a style for medium screens */
  @media (min-width: 768px) {
    flex-direction: row;
    Link {
      display: inline-block;
      text-align: left;
      color: blue;
      text-decoration: none;
      &:hover {
        color: red;
      }
    }
  }
`;


const Appbar = () => {
  return (
    <Navbar>
        <Link to='/Layout'>Computing Notes</Link>
        <Link to='/PrimarySix'>Basic 6</Link>
    </Navbar>
  )
}

export default Appbar