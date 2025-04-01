import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 ">
        <h1 className=" text-center text-muted">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.7", fontSize: "1.1em" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/My_Pic.jpeg"
            style={{ borderRadius: "80%", width: "40%" }}
          />
          <h4 className="mt-3">Jasdeep Singh</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Jasdeep bootstrapped and founded StockPulse in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            StockPulse has changed the landscape of the Indian broking industry.</p>
            <p> 
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).</p> 
            
            <p>Playing basketball is his zen. </p>
            <p style={{textDecoration:"none"}}> Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
