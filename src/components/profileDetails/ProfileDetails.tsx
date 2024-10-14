import styles from "./ProfileDetails.module.css";
import { WorkIcon, MailIcon, LocationIcon } from "../../assets/icons";

export interface ProfileDetailsProps {
  title: string;
  email: string;
  location: string;
  bg1?: string; // bg color gradient (from)
  bg2?: string; // bg color gradient (to)
  icon?: string; // color of icons
}

export const ProfileDetails = ({
  title = "Title",
  email = "email@email.com",
  location = "City, Country",
  bg1 = "#333333",
  bg2 = "#111111",
  icon = "#ffffff",
}: ProfileDetailsProps) => {
  const background = `linear-gradient(to right, ${bg1}, ${bg2})`;

  return (
    <div className={styles.profileContainer} style={{ background }}>
      <ul className={styles.detailList}>
        <li className={styles.detailItem}>
          {/* Profession Title and Icon */}
          <span className={styles.iconPlaceholder}>
            <WorkIcon style={{ fill: icon }} />
          </span>
          <span className={styles.detailText}>{title}</span>
        </li>
        <div className={styles.separator}></div>
        <li className={styles.detailItem}>
          {/* Email and Icon */}
          <span className={styles.iconPlaceholder}>
            <MailIcon />
          </span>
          <span className={styles.detailText}>{email}</span>
        </li>
        <div className={styles.separator}></div>
        <li className={styles.detailItem}>
          <span className={styles.iconPlaceholder}>
            <LocationIcon />
          </span>
          <span className={styles.detailText}>{location}</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDetails;
