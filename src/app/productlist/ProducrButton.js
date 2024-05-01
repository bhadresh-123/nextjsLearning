"use client";

const ProducrButton = ({ price }) => {
  return (
    <div>
      <button onClick={() => alert(`Price : ${price}`)}>Check Price</button>
    </div>
  );
};

export default ProducrButton;
