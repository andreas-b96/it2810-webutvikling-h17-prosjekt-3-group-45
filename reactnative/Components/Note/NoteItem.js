import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

class NoteItem extends Component{

  deleteNote(id){
    this.props.onDelete(id);
  }

  render(){
    return(
    <View style={styles.Item}>
      <Text style={styles.Header}>{this.props.note.title}: </Text>

      <Text style={styles.Description}> {this.props.note.description}</Text>
      <Button
        backgroundColor="red"
        title="Delete"
        raised
        borderRadius= {5}
        icon={{name:'note'}}
        onPress={this.deleteNote.bind(this, this.props.note.id)} />
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
  fontSize :18,
},
Description:{
  fontSize: 14,
}
});

export default NoteItem;
