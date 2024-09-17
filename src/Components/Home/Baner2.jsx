import cooking from "../../assets/Imgs/cooking.webp";
import oil from "../../assets/Imgs/oil.webp";

function Baner2() {
  return (
    <div className="max-w-7xl mx-auto my-10 ">
      <div className="grid grid-cols-2 gap-2">
        <img src={cooking} alt="" />
        <img src={oil} alt="" />
      </div>
    </div>
  );
}

export default Baner2;
