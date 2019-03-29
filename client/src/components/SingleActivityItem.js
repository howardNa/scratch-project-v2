import React from "react";
import { Link } from "react-router-dom";
import "../styles/SingleActivityItem.css";

const SingleActivityItem = props => {
  return (
    <div className="activity-item-container">
      <div className="img-box">
        <img className="host-img" src="images/anon-user-icon.png" />
      </div>
      <div className="description-box">
        <h3 className="description-item">{props.title}</h3>
        <h4 className="description-item">{props.location}</h4>
        <h4 className="description-item">
          <i>{props.start}</i>
        </h4>
        <p className="description-item">{props.description}</p>
      </div>
      <div className="button-box">
        <button
          onClick={e => {
            props.viewActivity(e);
            props.viewActivityPage();
          }}
          id={props.id}
          status="searched"
          className="details-button"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default SingleActivityItem;

// const SingleActivityItem = (props) => {
//   return (
//     <div className="activity-item-container">
//       <div className="activity-item-row">
//         <div className="host-column">
//           <img className="host-img" src="images/anon-user-icon.png"></img>
//           <h5 className="host-name"></h5>
//         </div>
//         <div className="description-column">
//           <h3 className="description-item">{props.title}</h3>
//           <h4 className="description-item">{props.location}</h4>
//           <h4 className="description-item"><i>{props.start}</i></h4>
//           <p className="description-item">{props.description}</p>
//         </div>
//         <button
//           onClick={(e) => {
//             props.viewActivity(e)
//             props.viewActivityPage()
//           }}
//           id={props.id}
//           status="searched"
//           className="details-button"
//         >View</button>
//       </div>
//     </div>
//   )
// }

// export default SingleActivityItem;
