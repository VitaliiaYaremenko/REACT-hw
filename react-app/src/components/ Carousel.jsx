import React from "react";
import cn from "classnames";

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                { id: 1, url: 'url-1', alt: 1, active: true },
                { id: 2, url: 'url-2', alt: 2, active: false },
                { id: 3, url: 'url-3', alt: 3, active: false }
            ]
        }
    }

    handleSlide = (increment) => {
        this.setState(prevState => {
            const images = [...prevState.images];
            const activeIndex = images.findIndex(item => item.active);
            const newIndex = (activeIndex + increment + images.length) % images.length;
            images[activeIndex].active = false;
            images[newIndex].active = true;
            return { images };
        });
    }

    handlePrev = () => {
        this.handleSlide(-1);
    }

    handleNext = () => {
        this.handleSlide(1);
    }

    render() {
        return (
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {this.state.images.map((item) => {
                        const classes = cn({
                            'carousel-item': true,
                            'active': item.active
                        });

                        return (
                            <div key={item.id} className={classes}>
                                <img src={item.url} className="d-block w-100" alt={item.alt} />
                            </div>
                        );
                    })}
                </div>
                <button onClick={this.handlePrev} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button onClick={this.handleNext} className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}

export default Carousel;

