import "./header.css";
import image from "../header/image.jpg";
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={image} alt="" />
    </div>
  );
}
