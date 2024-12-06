import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {name}: {phone}
      <button onClick={() => dispatch(deleteContact(id))}>Видалити</button>
    </li>
  );
};

export default Contact;
