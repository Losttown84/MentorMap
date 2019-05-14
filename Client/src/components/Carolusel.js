import React from "react";


class Carol extends React.Component {
    render() {
        return (
        <React.Fragment>
            <h1>Scrolling Gallery</h1>
            <div className="hide-scrollbar">
            <div className="gallery">
                <div className="gallery__box">Start</div>
                {getDummyContent()}
                <div className="gallery__box">End</div>
            </div>
            </div>
        </React.Fragment>
        )
    }
    }
    
    const getDummyContent = () =>
    Array.from({ length: 10 }, (_, i) => (
        <a href="/">
        <img src={`https://picsum.photos/{imgDims(i)}/?random&${Math.random()}`} />
        </a>
    ))
    
    const imgDims = i => (
    i % 2 === 0
    ? '600/400'
    : i % 3 === 0
    ? '400/600'
    : '400/400'
    )
    
export {Carol, getDummyContent, imgDims};
    