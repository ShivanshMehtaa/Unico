import "./Banner.scss";
import PNGEGG from "../../../assets/pngegg.png"


const Banner = () => {
    return (
    <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>UNICO</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quas consectetur dolorem cumque non earum veritatis asperiores temporibus nesciunt voluptas.
                </p>
                <div className="ctas">
                    <div className="banner-cta">About</div>
                    <div className="banner-cta v2">Categories</div>
                </div>
            </div>
            <img className="banner-img" src={PNGEGG} alt="" />
        </div>
    </div>
    );
};

export default Banner;
