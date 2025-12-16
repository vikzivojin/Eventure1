import defaultAvatar from "../../assets/avatar-default.svg";
import "./Avatar.scss";

const Avatar = ({
  imageSrc,
  altText,
  userInitials,
  className = "",
  children,
}) => {
  const avatarSrc = !imageSrc ? defaultAvatar : imageSrc;
  const imageClassModifier = !imageSrc
    ? "avatar__image avatar__image--default"
    : "avatar__image";
  const altDescription = !altText ? "" : altText;

  return (
    <div className={`avatar ${className}`.trim()}>
      {userInitials && !imageSrc ? (
        <p className="avatar__initials">{userInitials}</p>
      ) : (
        <img
          className={imageClassModifier}
          src={avatarSrc}
          alt={altDescription}
        />
      )}
      {children}
    </div>
  );
};

export default Avatar;
