import { useSelector } from "react-redux";

import { Contact } from "components";

import { selectFilteredContacts } from "../../redux/contacts/slice";
import s from "./ContactList.module.css";

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  if (!filteredContacts.length) {
    return <div className={s.contactNotFound}>Contact not found</div>;
  }

  return (
    <>
      <ul className={s.list}>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={s.item}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};
