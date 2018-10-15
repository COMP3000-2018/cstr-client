import React, { Component } from "react";

import Slide from "./Slide";

class StoryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialSlideId: "8ac3bcb9-5b6a-496b-b31a-c4ce706e87e2",
      currentSlide: JSON.parse(localStorage.getItem('currentSlide')),
      loading: true
    };
  }

  componentDidMount() {
    console.log('Mounted');
    const { initialSlideId, currentSlide } = this.state;

    this.retrieveSlide(currentSlide && Object.keys(currentSlide).length !== 0 ? currentSlide.id : initialSlideId);
  }

  retrieveSlide(slideId) {
    fetch(`https://cstr.uqcloud.net/mock/slides/${slideId}`)
      .then(response => {
        return response.json();
      })
      .then(currentSlide => {
        localStorage.setItem('currentSlide', JSON.stringify(currentSlide));
        this.setState({
          loading: false,
          currentSlide
        });
      });
  }

  changeSlide(slideId) {
    this.retrieveSlide(slideId);
  }

  render() {
    const { loading, currentSlide } = this.state;

    if (loading) {
      return <div>
        <h1>Story</h1>
          Loading!</div>;
    }

    const { title, text, buttons } = currentSlide;

    console.log('New slide information:', title, buttons);

    return (
      <Slide
        changeSlide={slideId => this.changeSlide(slideId)}
        title={title}
        text={text}
        buttons={buttons}
      />
    );
  }
}

export default StoryComponent;
