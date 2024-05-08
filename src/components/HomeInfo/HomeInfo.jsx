import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import css from "./HomeInfo.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const HomeInfo = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to Contacts Keeper</h1>
      <p className={css.text}>
        Manage your contacts easily with Contacts Keeper. Keep all your
        important contacts in one place and access them anytime, anywhere.
      </p>

      <ul className={css.list}>
        <li className={css.infoItem}>
          <h3 className={css.itemTitle}>• Create Contacts •</h3>
          <p className={css.itemText}>
            Add new contacts with ease. Enter details such as name, phone
            number, email, and more.
          </p>
        </li>

        <li className={css.infoItem}>
          <h3 className={css.itemTitle}>• Search •</h3>
          <p className={css.itemText}>
            Quickly find any contact using the powerful search feature. Search
            by name or phone number.
          </p>
        </li>

        <li className={css.infoItem}>
          <h3 className={css.itemTitle}>• Sync •</h3>
          <p className={css.itemText}>
            Sync your contacts across multiple devices to ensure you always have
            the latest information.
          </p>
        </li>
      </ul>

      {isLoggedIn || (
        <>
          <h2 className={css.loginTitle}>Get Started</h2>

          <p className={css.text}>
            Sign up or log in to get started with Contacts Keeper. Start adding
            your contacts and experience hassle-free contact management today.
          </p>
          <AuthNav />
        </>
      )}
    </div>
  );
};

export default HomeInfo;
