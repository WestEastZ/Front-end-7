function FeelBtn({ menus, onFeelClick }) {
  return menus.map((item, index) => {
    return (
      <li key={index}>
        <button onClick={onFeelClick}>기분이: {item}</button>
      </li>
    );
  });
}

export default FeelBtn;
