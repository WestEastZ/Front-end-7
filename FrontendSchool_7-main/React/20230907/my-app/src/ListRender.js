import "./ListRender.css";

const list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

// function ListItem({ data }) {
//   return <li className={data.visited ? "visited" : ""}>{data.area}</li>;
// }

function ListRender() {
  // const listArr = list.map((item) => <ListItem data={item} />);
  // return <ul className="list-area">{listArr}</ul>;
  const areas = list.map((item) => {
    return (
      <li key={item.no} className={item.visited ? "visited" : ""}>
        {item.area}
      </li>
    );
  });
  return <ul className="list-area">{areas}</ul>;
}

export default ListRender;
