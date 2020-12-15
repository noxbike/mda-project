import React from 'react';
import SkeletonElement from './SkeletonElement';

const SkeletonVideo = () => {
    return(
        <div className="skeleton-wrapper">
            <div className="skeleton-video">
                <div className="loader" style={{background:'#ddd', maxWidth:'310px', height:'250px'}}>
                </div>
                <div className='ml-auto mr-auto mt-4'>
                    <SkeletonElement type='title'/>
                    <SkeletonElement type='text'/>
                </div>
            </div>
        </div>
    )
}
export default SkeletonVideo;