import React from "react";

function Content(props) {
  console.log("Mise à jour");
  return (
    <div>
      <div className="content">
        <h1>{props.num}</h1>
      </div>
    </div>
  );
}
export default React.memo(Content);
