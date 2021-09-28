import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import {selectDirectorySections } from '../../redux/directory/directory.selectors'
import MenuItem from '../menu-item/MenuItem';
import './directory.styles.scss'

const Directory = ({sections}) => {
     
        return (
            <div className="directory-menu">
                {
                    // this.state.sections.map(({title,imageUrl,id,size,linkUrl}) => (
                    //     <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                    //This Below Is same as above

                        sections.map(({id, ...otherSectionProps}) => (
                          <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
