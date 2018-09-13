import React, { Component } from "react";

import { Container, Segment, Button } from "semantic-ui-react";

class StoryComponent extends Component {
  render() {
    const buttonFlavours = [
      "Physical Exam",
      "Other Thing",
      "Please don't die you have so much to live for",
      "Why are you so burnt",
      "No really that does not look healthy"
    ];

    return (
      <Segment>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
          ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
          ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
        {buttonFlavours.map(flavour => {
          return <Button>{flavour}</Button>;
        })}
      </Segment>
    );
  }
}

export default StoryComponent;