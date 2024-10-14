import styles from "./ProfileImage.module.css";

export interface ImageProps {
  src: string;
  alt: string;
  border: string; // color
  bg1?: string; // color
  bg2?: string; // color
  shadow?: string; // color
}

export const ProfileImage = ({
  src,
  alt,
  border = "#000000",
  bg1 = "#333333",
  bg2 = "#111111",
  shadow = "rgba(0, 0, 0, 0.1)",
}: ImageProps) => {
  const background = `linear-gradient(to right, ${bg1}, ${bg2})`;
  const boxShadow = `0 4px 6px ${shadow}`;
  const borderColor = `${border}`;
  return (
    <div className={styles.profileContainer}>
      <div
        className={`${styles.profileWrapper}`}
        style={{
          background,
          boxShadow,
          borderColor,
        }}
      >
        <img src={src} alt={alt} className={styles.profileImage} />
      </div>
    </div>
  );
};

export default ProfileImage;
