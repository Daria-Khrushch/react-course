import Card from "./Card/Card";

import "./card-list.styles.css";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => {
        const { name, email, id } = monster;
        return <Card name={name} email={email} id={id} key={id} />;
      })}
    </div>
  );
};

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           const { name, email, id } = monster;
//           return <Card name={name} email={email} id={id} key={id} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
