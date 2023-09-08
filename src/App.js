import React, { Component } from 'react';
import image from './components/images/WhatsApp Image 2023-05-31 at 00.10.25.jpg'



class App extends Component {
  state = {
    person: {
      fullName: 'Adetola',
      bio: 'A passionate developer',
      imgSrc: 'url-to-image',
      profession: 'Web Developer'
    },
    show: false,
    interval: 0
  };

  toggleProfile = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ interval: prevState.interval + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, show, interval } = this.state;

    return (
      <div>
        <button onClick={this.toggleProfile}>Toggle Profile</button>
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={image} alt={person.fullName} width={300} height={300} />
            <p>{person.profession}</p>
          </div>
        )}
        <p>Time interval since last component mount: {interval} seconds</p>
      </div>
    );
  }
}

export default App;
