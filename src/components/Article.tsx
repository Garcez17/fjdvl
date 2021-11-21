import Image from 'next/image';
import Aos from 'aos';
import { useEffect } from 'react';

import { Container, Wrapper, Info } from "../styles/components/Article/styles";

export function Article() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  }, []);

  return (
    <Container>
      <Wrapper data-aos="fade-up">
        <Image src="/forjadovale_title.jpg" alt="forja do vale" width={550} height={500} />
        <Info>
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Modi excepturi sit ipsa fuga. Ducimus possimus ipsa rem vitae adipisci.
            Suscipit magnam ex cupiditate expedita necessitatibus numquam, eos cum officia neque.
          </p>
        </Info>
      </Wrapper>
    </Container>
  )
}