import "../ColorCss/color-menu.css";
const ColorMenu = ({ handleMenu }) => {
  const ColorMenuOptions = [
    "Rename",
    "Duplicate",
    "Delete",
    "Move Up",
    "Move down",
  ];

  return (
    <div className={`color-menu-menu`}>
      {ColorMenuOptions.map((option, index) => (
        <span
          key={index}
          onClick={() => handleMenu(option)}
          className={`color-menu-text${index + 1}`}
        >
          {option}
        </span>
      ))}
    </div>
  );
};

export default ColorMenu;
