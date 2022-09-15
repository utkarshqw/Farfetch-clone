import "./lasta.css"


let data = [
    {
        id:1,
        one:"HOW TO SHOP",
        two:"Your guide to shopping and placing orders"
     },
     {
        id: 2,
        one:"FAQS",
        two:"Your question answered"
     },
     {
        id: 3,
        one:"NEED HELP?",
        two:"Contact our global Customer service team"
     }
     
]

export default function Lasta(){
    return (
        <div className="lastacont">
           {
            data.map(elem=>(
                <div key={elem.id}>
                  <p>{elem.one}</p>
                  <p>{elem.two}</p>
                </div>
            ))
           } 
           


        </div>
    )
}




