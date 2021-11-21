import { Container } from '../styles/pages/home/styles';

import { Header } from '../components/Header';
import { SliderModel } from '../components/Slider';
import { Article } from '../components/Article';

export default function Home() {
  return (
    <Container>
      <Header />
      <SliderModel />
      <Article />
    </Container>
  )
}
