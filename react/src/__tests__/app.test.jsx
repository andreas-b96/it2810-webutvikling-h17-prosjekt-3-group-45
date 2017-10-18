import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {shallow} from 'enzyme'



describe('App', () => {

  const CONTACT = {id: 1, name: "Ugle McUglesen", email: "Ugle@gmail.com", phone: "12345678"};
  const TODO = {id: 1, title: 'Make todolist', description: 'Teste kode'};
  const NOTE = {id: 1, title: 'This is a note', description: 'Take notes, kids'};
  const EVENT = {
    id: 1,
    'title': 'Evaluate other students project',
    'start': '2017-10-16 15:00:00',
    'end': '2017-10-16 17:00:00'
  };

  it('should be able to run tests', () => {
    expect(1 + 2).toEqual(3);
    shallow(<App/>)
  });

  it('should add a contacts to state', () => {
    const wrapper = shallow(<App/>);
    const before = wrapper.instance().state;
    wrapper.instance().handleAdd("contacts", CONTACT);
    const after = wrapper.instance().state;
    expect(before).not.toEqual(after)

  });
  it('should add a TODO to state', () => {
    const wrapper = shallow(<App/>);
    const before = wrapper.instance().state;
    wrapper.instance().handleAdd("todos", TODO);
    expect(before).not.toEqual(wrapper.instance().state);
  });

  it('should add a note to state', () => {
    const wrapper = shallow(<App/>);
    const before = wrapper.instance().state;
    wrapper.instance().handleAdd("notes", NOTE);
    const after = wrapper.instance().state;
    expect(before).not.toEqual(after);
  });

  it('should not add to state due to wrong key', () => {
    const wrapper = shallow(<App/>);
    const before = wrapper.instance().state;
    wrapper.instance().handleAdd("mnameisjeff", NOTE);
    const after = wrapper.instance().state;
    expect(before).toEqual(after);
  });

  it('should delete a contact from state', () => {
    const wrapper = shallow(<App/>);
    wrapper.instance().setState({ contacts:[CONTACT] });
    const before = wrapper.instance().state;
    wrapper.instance().handleDelete("contacts", CONTACT.id);
    const after = wrapper.instance().state;
    expect(before).not.toEqual(after);
  });

  it('should delete a TODO from state', () => {
    const wrapper = shallow(<App/>);
    wrapper.instance().setState({ todos:[TODO] });
    const before = wrapper.instance().state;
    wrapper.instance().handleDelete("todos", TODO.id);
    const after = wrapper.instance().state;
    expect(before).not.toEqual(after);
  });

  it('should delete a note from state', () => {
    const wrapper = shallow(<App/>);
    wrapper.instance().setState({ notes:[NOTE] });
    const before = wrapper.instance().state;
    wrapper.instance().handleDelete("notes", NOTE.id);
    const after = wrapper.instance().state;
    expect(before).not.toEqual(after);
  });

  it('should note delete anything', () => {
    const wrapper = shallow(<App/>);
    wrapper.instance().setState({ contacts:[CONTACT] });
    const before = wrapper.instance().state;
    wrapper.instance().handleDelete("jeff", CONTACT.id);
    const after = wrapper.instance().state;
    expect(before).toEqual(after);
  });

  it('should add a name to state', () => {
    const wrapper = shallow(<App/>);
    const before = wrapper.instance().state.name;
    wrapper.instance().handleSetName("jeff");
    const after = wrapper.instance().state.name;
    expect(before).not.toEqual(after);
  });


  it('should add an event to state', () => {
    const wrapper = shallow(<App/>);
    const before = wrapper.instance().state.eventList;
    wrapper.instance().setState({ eventList : [] });
    wrapper.instance().handleAddEvent(EVENT);
    const after = wrapper.instance().state.eventList;
    expect(before).not.toEqual(after);
  });

  it('should remove an event from state', () => {
    const wrapper = shallow(<App/>);
    wrapper.instance().setState({eventList : [EVENT]});
    const before = wrapper.instance().state.eventList;
    wrapper.instance().handleRemoveEvent(EVENT);
    const after = [];
    expect(before).toEqual(after);
  });

});
