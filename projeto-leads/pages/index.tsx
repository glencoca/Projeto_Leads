import type { NextPage } from 'next'
import { IndexBody, IndexLink, IndexText } from '../components/index/_index_style'

const Home: NextPage = () => {
  return (
 <IndexBody>
   <IndexText>
     Em construção ...
   </IndexText>
   <IndexLink href="/login">
     Vá para a tela de Login
   </IndexLink>
 </IndexBody>
  )
}

export default Home
