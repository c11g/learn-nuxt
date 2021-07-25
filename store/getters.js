const getters = {
  getContacts(state) {
    return state.contacts;
  },
  getContact(state) {
    const no = parseInt(state.no);
    const contact = state.contacts.filter(c => c.no === no);

    return contact.length ? contact[0] : {};
  },
};

export default getters;