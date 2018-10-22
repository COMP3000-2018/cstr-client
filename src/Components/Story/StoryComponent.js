import React, { Component } from "react";

import Progress from '../../Progress';

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

  checkProgress() {
    console.log(`Trophy count: ${Object.keys(Progress.trophies).length}`)
    if (Object.keys(Progress.trophies).length === 7) {
      Progress.completed = true;
      this.retrieveSlide('a678dac8-3097-414a-864d-10bda308ca17') // please forgive me
    }
  }

  componentDidMount() {
    console.log('Mounted');
    const { initialSlideId, currentSlide } = this.state;

    this.retrieveSlide(currentSlide && Object.keys(currentSlide).length !== 0 ? currentSlide.id : initialSlideId);
  }

  retrieveSlide(slideId) {
    fetch(`/mock/slides/${slideId}`)
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

    if(!Progress.completed) {
      this.checkProgress(); // this should NOT be in render; TODO
    }



    if (loading) {
      return <div>
        <h1>Story</h1>
          Loading!</div>;
    }

    const { title, text, buttons, trophy } = currentSlide;

    console.log('New slide information:', title, buttons);

    return (
      <Slide
        changeSlide={slideId => this.changeSlide(slideId)}
        title={title}
        text={text}
        buttons={buttons}
        trophy={trophy}
      />
    );
  }
}

export default StoryComponent;
