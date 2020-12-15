import React from 'react';
import SkeletonElement from './SkeletonElement';

const SkeletonEvent = () => {
    return(
        <div className="skeleton-wrapper">
            <div className="skeleton-event">
                <div className='mb-4 row cart'>
                    <div className='row loader' style={{background:'#ddd',backgroundRepeat:'no-repeat', backgroundSize:'cover', height:'80%', width:'100%'}} ></div>
                    <div className='face2 row flex-column justify-content-around'>
                        <div className='text-center ml-2 loader' style={{fontWeight:'bolder',fontSize:'1.1em', width:'20%', background:'#ddd'}}>
                            <SkeletonElement type='title'/>
                        </div>
                        <div className='ml-auto mr-auto' style={{width:'70%'}}>
                            <SkeletonElement type='title' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SkeletonEvent;