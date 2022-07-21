import "./Mid2.css";



function Midtwo({data,d1}) {
  return (
    <>
      <div className="MidtwoCont">
        <div className="MidtwoCont2">
            <div><p>{d1}</p></div>
             <div className="Mid2Card">


            {

              data.map((elem)=>(
                <div key={elem.id} className="Mid2Card2">
                    <img src={elem.img} alt="#" />
                    <p>{elem.one}</p>
                    <p>{elem.two}</p>
                    <p>{elem.three}</p>
                    <p>{elem.four}</p>

                </div>
              ))




            }


             </div>
             <div><button>Shop Now</button></div>
        </div>
      </div>
    </>
  );
}

export default Midtwo;
