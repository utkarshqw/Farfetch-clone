import "./Mid4.css";
var imgadd =
  "https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3670470/data/33a0f816875efd122994944c8bbd4f5e/1x1_messaging-side/637/data.jpeg";
export default function Mid4() {
  return (
    <>
      <div className="Mid4Container">
        <div>
          <div className="Mid4Container1">
            <div>
              <p>Wear-everywhere totes</p>
              <p>
                From the sleek Laurent Rive Gauche to the unmistakable Gaucci GG
              </p>
              <p>Supreme,find your next all-day, every-day bag here</p>
              <button>Shop Now</button>
            </div>
          </div>

          <div>
            <img src={imgadd} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
