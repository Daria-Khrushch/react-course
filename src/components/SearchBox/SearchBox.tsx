import "./search-box.styles.css";
import { ChangeEventHandler } from 'react';
// interface ISearchBox {
//   className: string;
//   placeholder?: string;
//   onChangeHandler: (a: string) => void;
// }

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => {
  return (
    <div>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

// class SearchBox extends Component {
//   render() {
//     return (
//       <div>
//         <input
//           className={`search-box ${this.props.className}`}
//           type="search"
//           placeholder={this.props.placeholder}
//           onChange={this.props.onChangeHandler}
//         />
//       </div>
//     );
//   }
// }

export default SearchBox;
