import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';


class TodoItem extends Component{

  deleteTodo(id){
    this.props.onDelete(id);
  }

  render(){
    return (
      <View style={styles.Item}>
        <Text style={styles.Header}>{this.props.todo.title}: </Text>

        <Text style={styles.Description}> {this.props.todo.description}</Text>
        <Button
          backgroundColor="red"
          title="Done"
          raised
          borderRadius= {5}
          icon={{name:'check-box'}}
          onPress={this.deleteTodo.bind(this, this.props.todo.id)} />
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

export default TodoItem;
