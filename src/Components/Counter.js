import React from 'react'
import {database} from '../firebase'
import TextField from 'material-ui/TextField'

class Counter extends React.Component {

    state = {

        counter: null,
        data:""
    };

    send = () => (

        fetch('https://isa-sandbox-88427.firebaseio.com/counter/.json',

            {
                method: 'PUT',
                body: JSON.stringify(this.state.counter)

            }
        )
    );

    sendfi = () => (

        fetch('https://isa-sandbox-88427.firebaseio.com/dane/.json',

            {
                method: 'PUT',
                body: JSON.stringify(this.state.data)

            }
        )
    );

    tki=(event,value)=>(

        this.setState({

            data:value

        },this.sendfi)
    );

    componentDidMount() {

        fetch('https://isa-sandbox-88427.firebaseio.com/counter/.json')
            .then(response => response.json())
            .then(data => this.setState({

                counter: data

            }));

        fetch('https://isa-sandbox-88427.firebaseio.com/dane/.json')
            .then(response => response.json())
            .then(data => this.setState({

                data: data

            }))
    }

    inc = () => (

        this.setState({
            counter: this.state.counter + 1
        }, this.send)

    );

    dec = () => (
        this.setState({
            counter: this.state.counter - 1
        }, this.send)
    );

    render() {

        return (

            <div>

                {
                    this.state.counter === null ?

                        <h1>Trwa ładowanie</h1>
                        :
                        <h1>{this.state.counter}</h1>
                }

                <TextField onChange={this.tki}/>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>

            </div>
        )
    }
}

export default Counter