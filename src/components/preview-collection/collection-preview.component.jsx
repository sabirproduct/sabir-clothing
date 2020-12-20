import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import {CollectionPreviewContainer, TitleContainer, PreviewContainer} from './preview-collection.styles';

const CollectionPreview = ({title, items}) => (

    <CollectionPreviewContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <PreviewContainer>
            {
                items
                .filter((item, idx) => idx<4 )
                .map(item => (
                    <CollectionItem key={item.id} item={item}></CollectionItem>
                ))
            }

        </PreviewContainer>
    </CollectionPreviewContainer>
)

export default CollectionPreview;