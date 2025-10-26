import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  width: 330px;
  height: 420px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`

const Issuer = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary + 80};
`

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`

const Button = styled.button`
  margin-top: auto;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.primary + 'cc'};
  }
`

const CertificateCard = ({ certificate }) => {
  return (
    <Card data-category={certificate.category}>
      <Image src={certificate.image} alt={certificate.title} />
      <Title>{certificate.title}</Title>
      <Issuer>{certificate.issuer}</Issuer>
      {certificate.description && (
        <Description>{certificate.description}</Description>
      )}
      <Button
        onClick={() => {
          window.open(certificate.link, '_blank')
        }}
      >
        View Certificate
      </Button>
    </Card>
  )
}

export default CertificateCard
