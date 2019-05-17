import axios from 'axios';

export default {
    // saves user message for review
    saveContact: function(contactData) {
        return axios.post('/api/contact', contactData);
    }
};