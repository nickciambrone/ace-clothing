  
import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux'
import './directory.styles.scss';

const Directory =({directory})=> {

    return (
      <div className='directory-menu'>
        {directory.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  
}

const mapStateToProps = state =>({
  directory: state.directory.sections
})

export default connect(mapStateToProps)(Directory);