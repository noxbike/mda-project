import React from 'react'
import '../../style/skeleton.css';

const SkeletonElement = ({ type }) => {
    return (
        <div className={`skeleton ${type} loader`}></div>
    )
}
export default SkeletonElement