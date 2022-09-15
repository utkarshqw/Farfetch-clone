import "./Lastb.css"

function LastB(){
    return (
        <div className="lastbcont">
         <h1>DOWNLOAD THE FARFETCH APP</h1>
         <p>Enjoy exclusive content on our app, including personalized product edits as well as our Visual Search tool for iOS. More about the app</p>
         <div className="lastbcont2">
            <div>
                <p>EMAIL ME</p>
                <p>Enter your email and we,ll send you a link to download the free app.</p>
                <input type="text" placeholder="Email address" />
                <button>send</button>
            </div>
            <div>
                <p>SCAN QR CODE</p>
                <img className="QRCODE" src="https://media.blackandwhite-ff.com/10000/2a0d5342-2544-4898-b2d4-8272235868d6_qr.png" alt="" />
            </div>
         </div>
        </div>
    )
}

export default LastB