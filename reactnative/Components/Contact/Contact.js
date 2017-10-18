import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

export class Contact extends React.Component{

    deleteContact(id){
      this.props.onDelete(id);
    }

    render(){
      return(
      <View style={styles.Item}>
        <Text style={styles.Header}>{this.props.contact.name}: </Text>
        <Text style={styles.Description}> {this.props.contact.email}</Text>
        <Text style={styles.Description}> {this.props.contact.phone}</Text>
          <Button
            backgroundColor="red"
            title="Delete"
            raised
            borderRadius= {5}
            icon={{name:'contacts'}}
            onPress={this.deleteContact.bind(this, this.props.contact.id)} />
      </View>
      );
    }
  }

  const styles = StyleSheet.create({
  Item : {
    paddingLeft: 20,
    paddingTop: 20,
  },
  Header:{
    fontWeight : 'bold',
    fontSize :16,
  },
  Description:{
    fontSize: 12,
  }
  });
