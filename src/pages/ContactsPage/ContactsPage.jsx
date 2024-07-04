import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  ContactForm,
  ContactList,
  Loader,
  SearchBox,
  Container,
  ChangeContact,
} from "components";

import {
  selectContacts,
  selectCurrentContact,
  selectError,
  selectLoading,
} from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import s from "./ContactsPage.module.css";

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const currentContact = useSelector(selectCurrentContact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <div className={s.wrapper}>
        <h1 className="text-[#E76F51] text-4xl font-bold mb-5 text-center">
          Phonebook
        </h1>
        {currentContact ? <ChangeContact /> : <ContactForm />}

        {loading && !error && <Loader />}
        {contacts.length > 0 && !error && <SearchBox />}
        {contacts.length > 0 && !error && <ContactList />}
        {!contacts.length && !error && !loading && (
          <div className={s.defaultDiv}>There is no contacts</div>
        )}
        {error && !loading && <div className={s.defaultDiv}>{error}</div>}
      </div>
    </Container>
  );
};

export default ContactsPage;
