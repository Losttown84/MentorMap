import axios from 'axios';

export default {
    // saves user message for review
    saveContact: function(contactData) {
        return axios.post('/api/contact', contactData);
    },
    // login/authentication
    auth: function(user) {
        return axios.post('/api/signup', user);
    },
    // save mentoring session
    saveSession: function(session) {
        return axios.post('/api/session', session)
    },
};