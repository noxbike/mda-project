import React from 'react';
import SkeletonElement from './SkeletonElement';

const SkeletonArticle = () => {
    return (
        <div className="skeleton-wrapper">
            <div className="skeleton-article">
                <div className='article row col-12  col-sm-10 col-md-12 mb-4'>
                                
                    <div className='paper-article'></div>

                    <div className='col-md-6' style={{padding:'0px'}}>
                        <div className='image-article loader' style={{background:'#ddd'}}>
                        </div>
                    </div>

                    <div className='article-body d-flex flex-column justify-content-between col-md-6'>
                        <div className='mt-2'>
                            <SkeletonElement type='title' />
                        </div>
                            
                        <div className='article-bottom row'>
                            <div className='col-md-6 col-12'>
                                <SkeletonElement type='text' />
                            </div>
                            <div className='col-md-6 col-12'>
                                <SkeletonElement type='text' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonArticle
