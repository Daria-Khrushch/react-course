import "./card.styles.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
};

// class Card extends Component {
//   render() {
//     const { id, name, email } = this.props;
//     return (
//       <div className="card-container">
//         <img
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//           alt="monster"
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default Card;
