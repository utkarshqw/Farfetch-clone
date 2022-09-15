import "./Newin.css"
import { newindata } from "./Newindata"

export default function NewIn(){
    return (
        <>
         <div className="newcont" >
          <div className="newcont1"><h1>NEW IN</h1></div>
          <div className="newcont2">
            <div>
                <div className="side1">
                   <p style={{fontWeight:"550"}}>Category</p>
                   <hr />
                   <div>
                    <p>Accessories</p>
                    <p>Activewear</p>
                    <p>Bags</p>
                    <p>Clothing</p>
                    <p>Fine Jewelry</p>
                    <p>Home</p>
                    <p>Lingerie & Nightwear</p>
                    <p>Shoes</p>

                     </div>
           </div>

           <div className="side2">
                   <p style={{fontWeight:"550"}}>Brand</p>
                   <hr />
                   <div>
                   <input style={{height:"25px"}} type="text" placeholder="Search 103 brands" />
                   <br />

                     <input type="checkbox" />
                     <label >Aeon</label>
                     <br />

                     <input type="checkbox" />
                     <label >Aeon</label>
                     <br />
                     <input type="checkbox" />
                     <label >Aje</label>
                     <br />
                     <input type="checkbox" />
                     <label >Alanui</label>
                     <br />
                     <input type="checkbox" />
                     <label >Alessandra Rich</label>
                     <br />
                     <input type="checkbox" />
                     <label >Alex Perry</label>
                     <br />
                     <input type="checkbox" />
                     <label >Alexander McQueen</label>
                     <br />
                     <input type="checkbox" />
                     <label >Alexander Wang</label>
                     <br />
                     <input type="checkbox" />
                     <label >Alexandra Miro</label>
                     <br />
                     <input type="checkbox" />
                     <label >Amina Muaddi</label>
                     <br />
                     <input type="checkbox" />
                     <label >Aquazzura</label>
                     <br />
                     <input type="checkbox" />
                     <label >adidas Yeezy</label>
                     <br />
                     <input type="checkbox" />
                     <label >BY FAR</label>
                     <br />
                     <input type="checkbox" />
                     <label >Balenciaga</label>
                     <br />
                     <input type="checkbox" />
                     <label >Balmain</label>
                     <br />
                     <input type="checkbox" />
                     <label >Blumarine</label>
                     <br />
                     <input type="checkbox" />
                     <label >Borgo De Nor</label>
                     <br />
                     <input type="checkbox" />
                     <label >Bottega Veneta Eyewear</label>
                     <br />
                     <input type="checkbox" />
                     <label >Castaner</label>
                     <br />
                     <input type="checkbox" />
                     <label >Chloe</label>
                     <br />
                     <input type="checkbox" />
                     <label >Christopher Kane</label>
                     <br />
                     <input type="checkbox" />
                     <label >Courreges</label>
                     <br />
                     <input type="checkbox" />
                     <label >De La Vali</label>
                     <br />
                     <input type="checkbox" />
                     <label >Dolce & Gabbana</label>
                     <br />
                    
                    
                   

                     </div>
           </div>


           <div className="side3">
                   <p style={{fontWeight:"550"}}>Color</p>
                   <hr />
                   <div className="colorcard">
                    <div> <div style={{backgroundColor:"black"}}></div><p>Black</p> </div>
                    <div> <div style={{backgroundColor:"blue"}}></div><p>Blue</p> </div>
                    <div> <div style={{backgroundColor:"brown"}}></div><p>Brown</p> </div>
                    <div> <div style={{backgroundColor:"gold"}}></div><p>Gold</p> </div>
                    <div> <div style={{backgroundColor:"green"}}></div><p>Green</p> </div>
                    <div> <div style={{backgroundColor:"grey"}}></div><p>Grey</p> </div>
                    <div> <div style={{backgroundColor:"magenta"}}></div><p>Metallic</p> </div>
                    <div> <div style={{backgroundColor:"orange"}}></div><p>Orange</p> </div>
                    <div> <div style={{backgroundColor:"pink"}}></div><p>Pink</p> </div>
                    <div> <div style={{backgroundColor:"purple"}}></div><p>Purple</p> </div>
                    <div> <div style={{backgroundColor:"red"}}></div><p>Red</p> </div>
                    <div> <div style={{backgroundColor:"silver"}}></div><p>Silver</p> </div>
                    <div> <div style={{backgroundColor:"white"}}></div><p>White</p> </div>
                    <div> <div style={{backgroundColor:"yellow"}}></div><p>Yellow</p> </div>
                    

                     </div>
           </div>


            </div>


            {/* product map */}
            <div className="Newprodcard">

             {
                newindata.map((elem)=>(
                   <div className="Newprodcard1" key={elem.id}>
                     <img src={elem.img} alt="" />
                    <p>{elem.one}</p>
                    <p>{elem.two}</p>
                    <p>{elem.three}</p>
                    <p>{elem.four}</p>

                   </div> 
                ))
             }


            </div>
          </div>
         </div>
        </>
    )
}