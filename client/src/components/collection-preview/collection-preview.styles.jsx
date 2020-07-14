import styled from 'styled-components'

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 100%;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  margin-top: 0;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`

export const PreviewContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 15px; 

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
