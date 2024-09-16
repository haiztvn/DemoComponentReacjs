import "../css/Header.css";
function Header() {
  return (
    <div id="templatemo_header_wrapper">
      <div id="templatemo_header">
        <div id="site_logo">
          <p>
            <b>TravelSlim</b>
          </p>
        </div>
        <div id="templatemo_menu">
          <div id="templatemo_menu_left">
            <ul>
              <li>
                <a href="/" className="current">
                  Home
                </a>
              </li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">Gallery</a>
              </li>
              <li>
                <a href="/">Company</a>
              </li>
              <li>
                <a href="/" className="last">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
