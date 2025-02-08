import React, { Component } from 'react';
import Profile from './components/Profile';
import Timer from './components/Timer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                fullName: "Harley",
                bio: "Passionné de développement web",
                imgSrc: "img/man-01.png",
                profession: "Développeur Full Stack junior"
            },
            show: false,
            timeInterval: 0
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState(prevState => ({
            timeInterval: prevState.timeInterval + 1
            }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    toggleShow = () => {
        this.setState(prevState => ({
            show: !prevState.show
        }));
    }

    render() {
        const { person, show, timeInterval } = this.state;

        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h1>Mon Application</h1>
        
                <button onClick={this.toggleShow}
                    style={{ padding: '10px', margin: '10px' }}>
                    {show ? "Masquer le profil" : "Afficher le profil"}
                </button>

                {show && <Profile person={person} />}
                <Timer time={timeInterval} />
            </div>
        );
    }
}

export default App;