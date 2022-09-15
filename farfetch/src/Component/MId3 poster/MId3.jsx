import "./MId3.css"



export default function MId3({d1,data}){
    return(
        <>
        <div className="Mid3cont">
         <div className="Mid3cont2">

            <div className="fhrb">{d1}</div>
             <div className="Mid3card">
                {
                    

                    data.map((elem)=>(
                    <div key={elem.id}>
                     <img src={elem.img} alt="#"/>
                     <p>{elem.one}</p>
                     <p>{elem.two}</p>
                     </div>
                    

                      
                    ))
                    
                }
             </div>
         </div>

        </div>
        



        </>
    )
}