import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Todos from './Components/Todo/Todos';
import Notes from './Components/Note/Notes';
import Contacts from './Components/Contact/Contacts';
import AgendaScreen from './Components/Agenda/Agenda'

const MainScreenNavigator = TabNavigator({
  Todo: {
    screen: Todos,
    navigationOptions:{
      tabBarIcon: ({tintColor}) =>
        <Icon
          name='check-box'/>
    }
  },
  Notes: {
    screen: Notes,
    navigationOptions:{
      tabBarIcon: ({tintColor}) =>
        <Icon
          name='note'/>
    }
  },
  Contacts: {
    screen : Contacts,
    navigationOptions:{
      tabBarIcon: ({tintColor}) =>
        <Icon
          name='contacts'/>
    }
  },
  Agenda: {
     screen: AgendaScreen,
     navigationOptions:{
       tabBarIcon: ({tintColor}) =>
         <Icon
           name='perm-contact-calendar'/>
     }
   }},
  {
    tabBarOptions : {
      showIcon: true,
      scrollEnabled:true,
      activeTintColor: '#FFFFFF',
    }
  });

const PersonalManager = StackNavigator({
    Home: {
      screen: MainScreenNavigator,
      navigationOptions: {
        title: 'Personal manager',
      },
    },
  },
  {
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
      backgroundColor: '#F5F5F5',
    }
  }
);

export default class App extends React.Component {

  render() {
      return (
          <PersonalManager style = {{backgroundColor: '#F5F5F5'}} ref={nav => {this.navigator = nav;}}/>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
