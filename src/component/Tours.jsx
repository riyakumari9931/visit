import Card from "./Card";

function Tours({ tours, removeTour }) {
  return (
    <div className="container">
      <div>
        <h2 className="title">Visit plan with Riya😊</h2>
      </div>
      <div className="cards">

        {/* // sare data ko map kr diya card ke sath har ek data ke liye card bnega */}
        {tours.map((tour) => {
          return <Card {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
}
export default Tours;
