import uuid from 'uuid'

export const Preset =  () => ({
  name: "",
  todos: [
  {id: uuid.v4(), title: 'Make todolist', description: 'Tødden Tøddvik has to make the todolist'},
  {id: uuid.v4(), title: 'Handle contacts', description: 'Ugle McUglesen \'boutta hook us up with contact info'},
  {id: uuid.v4(), title: 'Hans Vette', description: 'Slap him in the 4Head'}
  ],
  notes: [
    {id: uuid.v4(), title: 'This is a note', description: 'Take notes, kids'},
    {id: uuid.v4(), title: 'Shag me sideways', description: 'Granny bought me an apple'},
    {id: uuid.v4(), title: 'Flexbox', description: 'More like checkbox amirite? hehe_xd'}
  ],
  contacts: [
    {id: uuid.v4(), name: "Ugle McUglesen", email: "Ugle@gmail.com", phone: "12345678"},
    {id: uuid.v4(), name: "Tødden Tøddvik", email: "tødden@gmail.com", phone: "22334455"},
    {id: uuid.v4(), name: "Han Svette", email: "håvard@gmail.com", phone: "12121212"}
  ],
  eventList:[{
    'id'    :  uuid.v4(),
    'title' : 'Evaluate other students project',
    'start' : '2017-10-16 15:00:00',
    'end'   : '2017-10-16 17:00:00'
  },{
    'id'    :  uuid.v4(),
    'title' : 'Give group 45 full score',
    'start' : '2017-10-16 18:00:00',
    'end'   : '2017-10-16 20:00:00'
  }]
})
