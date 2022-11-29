import React from "react";

function Rightcolumn(props) {
  return (
    <div className="col-md-8 col-lg-8 col-xl-8 col-sm-12 mt-4 mt-md-0 mt-lg-0 mt-xl-0">
      <div className="p-3 border shadow-sm rounded">
        <p
          className="p-2 bg-light"
          style={{ fontSize: `${props.size}px`, color: `${props.color}` }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem esse
          officia doloremque quam! Dolor atque obcaecati tempora reprehenderit
          ipsum totam culpa voluptatem, minima corrupti ullam saepe illo? Fugiat
          tempore quis, maiores libero illum debitis. Recusandae dolore quis
          odio libero suscipit! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Beatae incidunt sunt repellat reiciendis obcaecati
          consequuntur voluptates natus sequi nostrum autem. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Deserunt dolores, itaque rerum
          nam ea atque sunt. Sunt dolore voluptate, ut consectetur fugit
          consequatur itaque numquam eligendi placeat amet nihil iusto!
        </p>
      </div>
    </div>
  );
}

export default Rightcolumn;
