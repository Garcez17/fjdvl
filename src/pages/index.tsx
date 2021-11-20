import { Container } from '../styles/pages/home/styles';
import { SliderModel } from '../components/Slider';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <Container>
      <Header />
      <SliderModel />
    </Container>
  )
}
