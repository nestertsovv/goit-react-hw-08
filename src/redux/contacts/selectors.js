export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectCurrentContact = (state) => state.contacts.currentContact;
export const selectContactForDelete = (state) =>
  state.contacts.contactForDelete;
