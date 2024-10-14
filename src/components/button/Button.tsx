import styles from "./Button.module.css";

export interface ButtonProps {
  /* Background color for button */
  bgColor: string;
  /* Text color for button */
  textColor: string;
  /* Label displayed on the button */
  label: string;
  /* Display size for the button */
  size?: "small" | "medium" | "large";
  /* Click handler function */
  onClick: () => void;
}

export const Button = ({
  bgColor,
  textColor,
  label,
  size = "medium",
  ...props
}: ButtonProps) => {
  /* revert to default "medium" size if incorrect value */
  const sizeClass = styles[size] || styles.medium;
  return (
    <button
      type="button"
      className={`${styles.thisbutton} ${sizeClass}`}
      style={{ backgroundColor: bgColor, color: textColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
