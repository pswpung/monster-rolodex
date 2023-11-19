// // ---------- Class Components Method ----------
// import { Component } from "react";
// import "./search-box.styles.css"

// class SearchBox extends Component {
//     render() {
//         const { onChangeHandler, placeholder, className } = this.props;

//         return (
//             <input 
//                 className={`search-box ${className}`}
//                 type='search'
//                 placeholder={placeholder}
//                 onChange={onChangeHandler}
//             />
//         )
//     }
// }

// ---------- Functional Components Method ----------
import "./search-box.styles.css"

const SearchBox = ({ onChangeHandler, placeholder, className }) => {
    return (
        <input 
            className={`search-box ${className}`}
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}
        />    
    )
}


export default SearchBox;