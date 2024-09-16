import "../css/Banner.css";
import imagBanner from "../banner.jpg";
function Banner() {
  return (
    <div id="templatemo_banner_wrapper">
      <div id="templatemo_banner">
        <div id="templatemo_banner_image">
          <div id="templatemo_image">
            <div id="templatemo_banner_image_wrapper">
              <div className="image-container">
                <img src={imagBanner} alt="art1" />
              </div>
            </div>
          </div>

          <div className="content">
            <p>
              <h1>
                <b> Sự Thú Vị Của Điện Thoại </b>
              </h1>
              <a>
                Trong thế giới hiện đại, điện thoại không chỉ là một phương tiện
                liên lạc mà còn là một công cụ đa năng, giải trí và làm việc.
                Với sức mạnh của công nghệ di động, điện thoại ngày nay không
                chỉ đơn giản là một thiết bị, mà là người bạn đồng hành đáng tin
                cậy, mang lại trải nghiệm thú vị và tiện ích không ngừng.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
