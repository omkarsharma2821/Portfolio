import React, { useState } from 'react'
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
} from './CertificateStyle'
import CertificatesCard from '../Cards/CertificatesCard'
import { certificates } from '../../data/constants'

const Certificates = () => {
  const [toggle, setToggle] = useState('all')

  return (
    <Container id="certificates">
      <Wrapper>
        <Title>Certificates</Title>
        <Desc>
          Here are some of the certifications I’ve earned throughout my journey,
          demonstrating my dedication to continuous learning and professional
          growth.
        </Desc>
        <CardContainer>
          {toggle === 'all' &&
            certificates.map((certificate, index) => (
              <CertificatesCard
                key={index}
                certificate={certificate}
              />
            ))}
          {certificates
            .filter((item) => item.category === toggle)
            .map((certificate, index) => (
              <CertificatesCard
                key={index}
                certificate={certificate}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Certificates
