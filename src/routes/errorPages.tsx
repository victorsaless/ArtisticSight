import errorPage from "../assets/pxfuel.jpg";

const QuatroZeroQuatro = () => {
  return (
    <div>
      <img
        src={errorPage}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
    </div>
  );
};
export default QuatroZeroQuatro;
