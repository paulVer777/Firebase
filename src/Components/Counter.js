import React from 'react'
import {database} from '../firebase'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {mapObjectToArray} from "../utils";
import MenuItem from 'material-ui/MenuItem';

class Counter extends React.Component {

    state = {
        user: "Paweł",
        newMessage: "",
        messages:[]
    };


    componentDidMount() {

        database.ref('/chat') //wskazuje na miejsce w bazie danych, wystarczy ukosnik bo glowny adres zapisany jest w firebase js.
            .on( //jesli stan sie zmieni, zrob cos raz(once) lub (cyklicznie)
                'value',
                (snapshot) => { //zawiera migawke aktualnego stanu z bazy danych, aktualny stan

                    this.setState({

                        messages: mapObjectToArray(snapshot.val()).reverse(), //konwertuje na tablice z obiektami

                    })
                }
            )
    }


    addMessage = () => database.ref('/chat').push({


        message: this.state.newMessage,
        user: this.state.user,
        timestamp: Date.now()


    })


    saveMessage = (event, value) => (

        this.setState({

            newMessage: value

        })
    );

    render() {

        return (

            <div>

                <TextField

                    onChange={this.saveMessage}

                />
                <RaisedButton onClick={this.addMessage}

                              label={"Send"}
                              primary={true}

                />



                <div>

                    {

                        this.state.messages.map((value)=>(


                            <MenuItem>{`${value.user}:${value.message}`}</MenuItem>



                        )  )





                    }

                </div>











            </div>
        )
    }
}

export default Counter