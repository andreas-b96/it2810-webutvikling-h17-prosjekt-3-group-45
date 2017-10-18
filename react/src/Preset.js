import uuid from 'uuid'

export const Preset =  () => ({
  name: "",
  todos: [
  {id: uuid.v4(), title: 'These are your todos', description: 'Here you can add and remove more todos'},
  {id: uuid.v4(), title: 'Write good notes', description: 'What to do though?'},
  {id: uuid.v4(), title: 'Anton has the perfect idea', description: 'Navy Seals Copypasta ought to do the trick'}
  ],
  notes: [
    {id: uuid.v4(), title: 'Take notes, kids', description: 'Yellow sticky notes, wow! This CSS is impressive.'},
    {id: uuid.v4(), title: 'What the fuck did you', description: 'just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.'},
    {id: uuid.v4(), title: 'Sorry', description: 'About the previous note :)'}
  ],
  contacts: [
    {id: uuid.v4(), name: "Pizzabakern", email: "pizzabakern@pb.no", phone: "71 21 23 23"},
    {id: uuid.v4(), name: "Mypare Ntshatedme", email: "EmailMcEmail@gmail.com", phone: "46 21 56 45"},
    {id: uuid.v4(), name: "Areyo Uevenreadi Ngthis", email: "i.give.up.exe@hotmail.com", phone: "49 98 00 22"}
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
});
