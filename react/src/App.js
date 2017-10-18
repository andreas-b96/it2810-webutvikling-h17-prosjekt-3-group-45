import React, { Component } from 'react';
import { Grid, Segment, Header, Icon } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom'
import uuid from 'uuid';
import './App.css';
import { Preset } from './Preset'
import Contacts from './Components/Contacts/Contacts';
import { Calendar } from './Components/Calendar/BigCalendar'
import Todos from './Components/Todos/Todos.jsx';
import Notes from './Components/Notes/Notes.jsx';
import SetName from './Components/SetName';
import Navbar from "./Components/Navbar";
import Notification from './Components/Notification/Notification.jsx'
import moment from 'moment'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name: "",
      todos: [],
      notes: [],
      contacts: [],
      eventList:[]
    }
  }

  componentWillMount(){
    const data = localStorage.getItem('store');
    if (data){
      this.setState(JSON.parse(data))
    } else{
      this.setState(Preset);
    }
  }


  componentDidMount(){
    localStorage.setItem('store', JSON.stringify(this.state));
  }

  handleAdd(key, value){
    let oldVals;
    if (key === "contacts"){
      oldVals = this.state.contacts;
    } else if (key === "todos") {
      oldVals = this.state.todos;
    } else if (key === "notes") {
      oldVals = this.state.notes;
    } else {
      console.log(key + " is not a value in this.state");
      return
    }
    oldVals.push(value);
    this.setState({key} : oldVals);
    localStorage.setItem('store', JSON.stringify(this.state));
  }

  handleDelete(key, id){
    let oldVals;
    let index;
    if (key === "todos") {
      oldVals = this.state.todos;
      index = oldVals.findIndex(x => x.id === id);
    } else if (key === "notes") {
      oldVals = this.state.notes;
      index  = oldVals.findIndex(x => x.id === id);
    } else if (key === "contacts") {
      oldVals = this.state.contacts;
      index  = oldVals.findIndex(x => x.id === id);
    } else {
      console.log(key + " is not a value in this.state");
      return
    }
    oldVals.splice(index, 1);
    this.setState({key}: oldVals);
    localStorage.setItem('store', JSON.stringify(this.state));
  }

  handleSetName(name){
    this.setState({name:name});
    let state = this.state;
    state.name = name;
    localStorage.setItem('store', JSON.stringify(state));
  }

  getUpcomingEvents() {
    let eventList = this.state.eventList;
    let fromDate = moment().subtract(10, 'minute');
    let toDate = moment().add(10, 'minute');
    let upcomingEvents = [];
    let i;
    let len = eventList.length;
    for (i = 0; i < len; i++) {
      let startDate = moment(eventList[i].start);
      if (startDate.isBetween(fromDate, toDate)) {
        upcomingEvents.push(eventList[i]); //Need entire object
      }
    }
    return upcomingEvents;
  }

  handleAddEvent(event){
    let events = this.state.eventList;
    events.push(event);
    this.setState({eventList:events});
    localStorage.setItem('store', JSON.stringify(this.state));
  }

  handleRemoveEvent(event){
    let updatedEvent = this.state.eventList;
    for(let i = 0; i < updatedEvent.length; i++){
      if(updatedEvent[i].id === event.id){
        updatedEvent.splice(i, 1);
      }
    }
    this.setState({ eventList : updatedEvent });
    localStorage.setItem('store', JSON.stringify(this.state));
  }

  render() {
    if(this.state.name === ""){
      return(
        <SetName setName={this.handleSetName.bind(this)} />
      )
    }
    return (
      <div className="App">
        <div>
          <Header as='h2' icon textAlign='center'>
            <Icon name='calendar' circular />
            <Header.Content>
              Hello { this.state.name }
            </Header.Content>
          </Header>
        </div>
        {/* Notification component goes here */}
        <Notification events={this.getUpcomingEvents()}/>
          <Navbar s={this.state}/>
            <div id="content">
              {/* VARIABLE CONTENT IS DISPLAYED HERE */}
              <Switch>
                <Route exact path='/' render= {() => (
                  <Calendar events={this.state.eventList}
                            addEvent={this.handleAddEvent.bind(this)}
                            rmEvent={this.handleRemoveEvent.bind(this)}/>
                )}/>
                <Route exact path='/todos' render= {() => (
                  <Todos todos={this.state.todos} addTodo={this.handleAdd.bind(this)} onDelete={this.handleDelete.bind(this)}/>
                )}/>
                <Route exact path='/contacts' render= {() => (
                  <Contacts contacts={this.state.contacts}
                            addContact={this.handleAdd.bind(this)}
                            onDelete={this.handleDelete.bind(this)} />
                )}/>
                <Route exact path='/notes' render= {() => (
                  <Notes notes={this.state.notes}
                         addNote={this.handleAdd.bind(this)}
                         onDelete={this.handleDelete.bind(this)}/>
                )}/>
              </Switch>
            </div>
      </div>
    );
  }
}

export default App;
