const mongoose = require("mongoose");
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/mentormap"
);

const userSeed = [
  {
    username: 'MentorTom',
    password: 'HiimTom1',
    email: 'test1@gmail.com',
    online: true,
    dateCreated: new Date(Date.now()),
    fullName: 'Tom Smith',
    mentee: false,
    mentor: true,
    location: 'Chicago, IL',
    industry: 'Software Development',
    yrsExp: 10,
    linkedin: 'mentortom1',
    img: 'https://www.pexels.com/photo/man-in-crew-neck-shirt-555790/',
    about: 'Hello, My Name is Tom! I am a Software Developer. Schedule a mentoring session with me'
  },
  {
    username: 'MentorAnn',
    password: 'HiimAnn1',
    email: 'test2@gmail.com',
    online: true,
    dateCreated: new Date(Date.now()),
    fullName: 'Ann Jones',
    mentee: false,
    mentor: true,
    location: 'Chicago, IL',
    industry: 'Artist',
    yrsExp: 6,
    linkedin: 'mentorAnn1',
    img: 'https://www.pexels.com/photo/fashion-photography-of-woman-hands-on-chin-with-glitter-makeup-1081685/',
    about: "Hello, My Name is Ann! I'm an artist. Schedule a mentoring session with me!"
  },
  {
    username: 'MentorMark',
    password: 'HiimMark1',
    email: 'test3@gmail.com',
    online: true,
    dateCreated: new Date(Date.now()),
    fullName: 'Mark Cuban',
    mentee: false,
    mentor: true,
    location: 'Chicago, IL',
    industry: 'Entrepreneur',
    yrsExp: 20,
    linkedin: 'mentorMatt1',
    img: 'https://images.pexels.com/photos/1858512/pexels-photo-1858512.jpeg?cs=srgb&dl=adult-black-and-white-dark-1858512.jpg&fm=jpg',
    about: "Hello, My Name is Mark! I'm an entrepreneur. Schedule a mentoring session with me."
  },
  {
    username: 'MenteeMaria',
    password: 'HiimMaria1',
    email: 'test4@gmail.com',
    online: true,
    dateCreated: new Date(Date.now()),
    fullName: 'Maria Sanchez',
    mentee: true,
    mentor: false,
    location: 'Chicago, IL',
    industry: 'Finance',
    yrsExp: 2,
    linkedin: 'mentorMaria1',
    img: 'https://images.pexels.com/photos/1707795/pexels-photo-1707795.jpeg?cs=srgb&dl=adult-art-beautiful-1707795.jpg&fm=jpg',
    about: "Hello, My Name is Maria! I'm an Invenstment Banker. Seeking mentorship"
  },
  {
    username: 'MenteeMike',
    password: 'HiimMike1',
    email: 'test5@gmail.com',
    online: true,
    dateCreated: new Date(Date.now()),
    fullName: 'Mike Sharp',
    mentee: true,
    mentor: false,
    location: 'Chicago, IL',
    industry: 'Business',
    yrsExp: 1,
    linkedin: 'menteeMike1',
    img: 'https://images.pexels.com/photos/1707795/pexels-photo-1707795.jpeg?cs=srgb&dl=adult-art-beautiful-1707795.jpg&fm=jpg',
    about: 'Hello, My Name is Mike! I am Software Developer. Seeking mentorship'
  },
  {
    username: 'MentorRay',
    password: 'HiimRay1',
    email: 'test6@gmail.com',
    online: true,
    dateCreated: new Date(Date.now()),
    fullName: 'Tom Smith',
    mentee: false,
    mentor: true,
    location: 'Chicago, IL',
    industry: 'Software Development',
    yrsExp: 15,
    linkedin: 'mentortom1',
    img: 'https://www.pexels.com/photo/man-in-plaid-sport-shirt-1058476/',
    about: 'Hello, My Name is Ray! I am a Software Developer. Schedule a mentoring session with me'
  },
  {
    username: 'MentorKim',
    password: 'HiimKim1',
    email: 'test7@gmail.com',
    online: true,
    dateCreated: new Date(Date.now()),
    fullName: 'Kim Lee',
    mentee: false,
    mentor: true,
    location: 'Chicago, IL',
    industry: 'Medicine',
    yrsExp: 15,
    linkedin: 'mentorKim',
    img: 'https://www.pexels.com/photo/adult-doctor-girl-healthcare-355934/',
    about: "Hello, My Name is Kim! I'm an Doctor. Schedule a mentoring session with me!"
  },
  {
    username: 'MentorMing',
    password: 'HiimMing1',
    email: 'test8@gmail.com',
    online: true,
    dateCreated: new Date(Date.now()),
    fullName: 'Ming Pondoyo',
    mentee: false,
    mentor: true,
    location: "Chicago, IL",
    industry: 'Finance',
    yrsExp: 1,
    linkedin: 'mentorMaria1',
    img: 'https://www.pexels.com/photo/woman-sitting-on-gray-chair-1543895/',
    about: "Hello, My Name is Ming! I'm a bussieness women. Offering mentorship"
  },
  {
    username: 'MenteeMandy',
    password: 'HiimMandy1',
    email: 'test9@gmail.com',
    online: true,
    dateCreated: new Date(Date.now()),
    fullName: 'Mandy Smith',
    mentee: true,
    mentor: false,
    location: 'Chicago, IL',
    industry: 'Web Development',
    yrsExp: 2,
    linkedin: 'mentorMandy1',
    img: 'https://www.pexels.com/photo/photo-of-woman-using-her-laptop-935756/',
    about: "Hello, My Name is Mandy! I'm a Web Developer. Seeking mentorship"
  },
  {
    username: 'MentorMonroe',
    password: 'HiimMonroe',
    email: 'test10@gmail.com',
    online: true,
    dateCreated: new Date(Date.now()),
    fullName: 'Mike Sharp',
    mentee: true,
    mentor: false,
    location: 'Chicago, IL',
    industry: 'Business',
    yrsExp: 1,
    linkedin: 'menteeMike1',
    img: 'https://images.pexels.com/photos/1707795/pexels-photo-1707795.jpeg?cs=srgb&dl=adult-art-beautiful-1707795.jpg&fm=jpg',
    about: 'Hello, My Name is Mike! I am Software Developer. Seeking mentorship'
  },
  
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " users inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
