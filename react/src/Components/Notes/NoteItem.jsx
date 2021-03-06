import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import "./notes.css";

class NoteItem extends Component{

  deleteNote(id){
    this.props.onDelete(id);
  }

  render(){
    return (

      <div className="NoteList">
        <div className="Note">
          <h2>
            <Button className="btn" size="mini" color="red" title="Delete" circular icon="trash outline" onClick={this.deleteNote.bind(this, this.props.note.id)} />
            {this.props.note.title}
          </h2>
          <p>{this.props.note.description}</p>
        </div>
      </div>

    );
  }
}

export default NoteItem;
