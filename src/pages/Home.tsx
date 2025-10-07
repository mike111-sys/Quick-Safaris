import Hero from '../sections/Hero'
import HomeSections from '../sections/HomeSections'

interface HomeProps {
  onHeroLoaded?: () => void
}

const Home = ({ onHeroLoaded }: HomeProps) => {
  return (
    <div>
      <Hero onHeroLoaded={onHeroLoaded} />
      <HomeSections />
    </div>
  )
}

export default Home
