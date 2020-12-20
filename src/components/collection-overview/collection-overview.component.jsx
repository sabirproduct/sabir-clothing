import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../preview-collection/collection-preview.component';

import { CollectionOverviewContainer } from './collection-overview.styles';

const CollectionOverview = ({collections}) => (
    <CollectionOverviewContainer>
    {
        collections.map(({id, ...otherCollectionsProps}) => (
            <CollectionPreview key={id} {...otherCollectionsProps}></CollectionPreview>
        ))
    }
    </CollectionOverviewContainer>
);

const mapSTateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
});


export default connect(mapSTateToProps)(CollectionOverview);