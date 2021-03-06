import React from "react";
import { connect } from "react-redux";
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'

const CollectionsOverview = ({collections}) => {
  console.log(collections)
  return (
    <div className="collections-overview">

{
        collections.map(({ id, ...OtherProps }) => (
        <CollectionPreview key={id} {...OtherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state)=>({
    collections:selectCollectionsForPreview(state)
})

export default connect(mapStateToProps)(CollectionsOverview)

