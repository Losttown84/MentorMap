const mongoose = require("mongoose");
const db = require('../../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
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
    username: 'MentorMaria',
    password: 'HiimMaria1',
    email: 'test4@gmail.com',
    online: true,
    dateCreated: new Date(Date.now()),
    fullName: 'Maria Sanchez',
    mentee: false,
    mentor: true,
    location: 'Chicago, IL',
    industry: '',
    yrsExp: 10,
    linkedin: 'mentortom1',
    img: 'https://www.pexels.com/photo/man-in-crew-neck-shirt-555790/',
    about: 'Hello, My Name is Tom! I am Software Developer. Schedule a mentoring session with me'

  },
  {
    username: 'MentorTom',
    password: 'Hiimtom1',
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
    about: 'Hello, My Name is Tom! I am Software Developer. Schedule a mentoring session with me'

  },
  {
    username: 'MentorTom',
    password: 'Hiimtom1',
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
    about: 'Hello, My Name is Tom! I am Software Developer. Schedule a mentoring session with me'

  },
  {
    username: 'MentorTom',
    password: 'Hiimtom1',
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
    about: 'Hello, My Name is Tom! I am Software Developer. Schedule a mentoring session with me'

  },
  {
    username: 'MentorTom',
    password: 'Hiimtom1',
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
    about: 'Hello, My Name is Tom! I am Software Developer. Schedule a mentoring session with me'

  },
  {
    username: 'MentorTom',
    password: 'Hiimtom1',
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
    about: 'Hello, My Name is Tom! I am Software Developer. Schedule a mentoring session with me'

  },
  {
    username: 'MentorTom',
    password: 'Hiimtom1',
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
    about: 'Hello, My Name is Tom! I am Software Developer. Schedule a mentoring session with me'

  },
  {
    username: 'MentorTom',
    password: 'Hiimtom1',
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
    about: 'Hello, My Name is Tom! I am Software Developer. Schedule a mentoring session with me'

  },
];

db.User
  .remove({})
  .then(() => db.Book.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " users inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
