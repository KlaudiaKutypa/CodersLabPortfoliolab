import React from 'react';
import '../scss/ThreeColumns.scss';



function ThreeColumns() {
    return (
       
        <div className="ThreeColumns">
            <div className="Column">
                <h1>10</h1>
                <h3>ODDANYCH WORKÓW</h3>
                <p>Lorem ipsum dolor sit ament, consectetur adipisc Pellentesque vel enim a elit viverra elementurna. Aliquam erat volutpat.</p>
            </div>
            <div className="Column">
                <h1>5</h1>
                <h3>WSPARTYCH ORGANIZACJI</h3>
                <p>Lorem ipsum dolor sit ament, consectetur adipisc Pellentesque vel enim a elit viverra elementurna. Aliquam erat volutpat.</p>
            </div>
            <div className="Column">
                <h1>7</h1>
                <h3>ZORGANIZOWANYCH ZBIÓREK</h3>
                <p>Lorem ipsum dolor sit ament, consectetur adipisc Pellentesque vel enim a elit viverra elementurna. Aliquam erat volutpat.</p>
            </div>
        </div>
       
    )
};

export default ThreeColumns;