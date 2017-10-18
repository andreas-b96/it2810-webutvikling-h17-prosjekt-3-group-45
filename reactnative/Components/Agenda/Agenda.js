import React, {Component} from 'react';
import { StyleSheet, Text, View, Form, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import uuid from 'uuid';

class AgendaScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      date: moment(),
      newAgenda: {},
      agendas:[{id: uuid.v4(), title: 'IT2810', description:'Innleveringsfrist', date: moment().add(3,'days')},
               {id: uuid.v4(), title: 'Jobberintervju', description:'Intervju med NAV', date: moment().add(1,'days')},
               {id: uuid.v4(), title: 'Hackerspace', description:'Skal på møte', date: moment().add(2,'days')}
              ]
    }
  }

  state = {
    isDateTimePickerVisible:false
  }

  showDateTimePicker = () => this.setState({isDateTimePickerVisible : true})

  handleDateTimePicker = () => this.setState({isDateTimePickerVisible : false})

  handleDatePicked = date => {
    this.setState({date});
    this.handleDateTimePicker();
  }

  checktitle(){
    const {date} = this.state;
    if(date > moment()){
      return moment(date).format('MMMM Do YYYY, h:mm')
    }
    return "Pick a date"
  }

  checkIfButtonSubmitDisable(){
    const {title, description, date} = this.state;
    if (title.length > 0 && description.length > 0 && date > moment()) {
      return false;
    }
    return true
  }

  changeTitle = title => this.setState({title})
  changeDescription = description => this.setState({description})

  handleSubmit(e) {
        this.setState({
          newAgenda: {
            title: this.state.title,
            description: this.state.description,
            date : this.state.date
          }
        }, function () {
          let agendas = this.state.agendas
          agendas.push(this.state.newAgenda)
          this.setState({title : '', description: '', date : moment()})
          this.textInputRef1.clear();
          this.textInputRef2.clear();
        });
  }

  handleDeleteAgenda(id){
    let agendas = this.state.agendas;
    let index = agendas.findIndex(x => x.id === id);
    agendas.splice(index, 1);
    this.setState({agendas: agendas});
  }


  Agendas() {
    this.state.agendas.sort(function(a,b){
      return (a.date - b.date);
    })

    return this.state.agendas.map(function(agenda, i){
      return(
        <View key={i}>
          <Text style={styles.Header}>{agenda.title}</Text>
          <View>
            <Text>{agenda.description}</Text>
            <Text>{moment(agenda.date).format('MMMM Do YYYY, h:mm').toString()}</Text>
          </View>

        </View>
      );
    });
  }

  render() {
    return(
    <View style={styles.container}>
      <ScrollView>
      <Text>Here you can add a new event to your agenda</Text>
      <TextInput
      label = "Title"
      placeholder = "Enter title!"
      autoCapitalize = 'sentences'
      onChangeText = {(text) => this.setState({title:text})}
      ref={ref => this.textInputRef1 = ref}
      value={this.state.title}
      />

      <TextInput
      label = "Description"
      placeholder = "Enter description!"
      autoCapitalize = 'sentences'
      onChangeText = {(text) => this.setState({description:text})}
      ref={ref => this.textInputRef2 = ref}
      value={this.state.description}
      />

      <Button
        onPress = {this.showDateTimePicker}
        title = {this.checktitle()}
        backgroundColor = '#1e90ff'
        borderRadius = {5}
        />

      <DateTimePicker
      isVisible = {this.state.isDateTimePickerVisible}
      onConfirm={this.handleDatePicked}
      onCancel = {this.handleDateTimePicker}
      mode="datetime"
      backgroundColor = 'red'
      />

      <Button
        title = "Submit!"
        disabled = {this.checkIfButtonSubmitDisable()}
        onPress = {() => this.handleSubmit()}
        backgroundColor = 'red'
        borderRadius={5}
        />

        {this.Agendas()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    justifyContent: 'center',
    alignSelf : 'center',
    width : 300,
    paddingTop : 50,
    paddingBottom: 30,
  },
  Header:{
    fontWeight : 'bold',
    fontSize :16,
    paddingTop: 5,
    paddingBottom:2,
  },
});

export default AgendaScreen;
