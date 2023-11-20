import mountain from "../images/mount.webp";
import style from "../components/Banner.module.css";
const Banner = () => {
  return (
    <>
      <div className={style.contianer}>
        <img src={mountain} alt="" />
        <div className={style.text}>
          <h1>Botostart</h1>
          <p>we're learning React.js</p>
        </div>
      </div>
    </>
  );
};
export default Banner;
