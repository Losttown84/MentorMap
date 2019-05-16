import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import RulerIMG from './Images/ruler.jpeg';
import PaintingIMG from './Images/painting.jpeg';
import PhotoIMG from './Images/photos.jpeg';
import CodingIMG from './Images/coding.jpeg';


class ControlledCarousel extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
        index: 0,
        direction: null,
        };
    }
    
    handleSelect(selectedIndex, e) {
        this.setState({
        index: selectedIndex,
        direction: e.direction,
        });
    }
    
    render() {
        const { index, direction } = this.state;
    
        return (
        <Carousel
            className="carousel w-50"
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
        >
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={RulerIMG}
                alt="First slide"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={PaintingIMG}
                alt="Third slide"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={PhotoIMG}
                alt="Third slide"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={CodingIMG}
                alt="Fourth slide"
            />
            </Carousel.Item>
        </Carousel>
        );
    }
    }
    export default ControlledCarousel;