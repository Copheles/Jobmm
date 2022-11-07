import { Logo } from '../components'
import main from '../assets/images/main-alternative.svg'
import Wrapper from '../assets/wrappers/Testing'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>job <span>tracking</span> App</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim in sapiente fugit tenetur pariatur voluptatem eum qui mollitia, iure quidem corrupti doloribus, numquam nostrum ullam.</p>

          <Link className='btn btn-hero' to='/register'>Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img"/>
      </div>
    </Wrapper>
  )
}

export default Landing