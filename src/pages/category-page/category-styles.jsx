import styled from "styled-components"

import { StyledCollectionItem } from "../../components/collection-item/collection-item.styles"

export const StyledCategoryPage = styled.div`
    display: flex;
    flex-direction: column;
`
export const Title = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
`
export const Items = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    & ${StyledCollectionItem} {
      margin-bottom: 30px;
    }    
`