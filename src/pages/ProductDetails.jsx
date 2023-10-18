import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/zoom";
import "swiper/css/pagination";
import { Navigation, Zoom, Pagination } from "swiper/modules";
// CONTEXT
import { HeaderContextProvider } from "../utils/HeaderContext";
// COMPONENTS
import AnnoncementBar from "../components/AnnoncementBar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShopifySection from "../components/sections/ShopifySection";

const ProductDetails = () => {
  // Sizes
  const [selectedSize, setSelectedSize] = useState("XS");
  const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
  // Quantity
  const [productCount, setProductCount] = useState(1);
  // Slide-Track
  const [productImages, setProductImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [swiper, setSwiper] = useState(null);
  const slideTo = (index) => {
    swiper.slideTo(index);
  };
  const handleSlideChange = (e) => {
    setSelectedImage(productImages[e.activeIndex]);
  };
  // Get product data
  const navigate = useNavigate();
  const { productId } = useParams({
    productImage: "uploads/item1.webp",
  });
  const [productData, setProductData] = useState({});
  const getSingleProductData = async () => {
    await axios
      .get(`${process.env.REACT_APP_ALL_PRODUCTS}/${productId}`)
      .then((response) => {
        setProductData(response.data);
        document.title = `${response.data.name} - Real Madrid CF | EU Store`;
        const imageUrl =
          `${process.env.REACT_APP_DOMAIN}/${response.data.productImage}`.toString();
        setProductImages([...productImages, imageUrl]);
      })
      .catch((error) => {
        console.warn(error);
        navigate("/error");
      });
  };
  useEffect(() => {
    getSingleProductData();
  }, []);
  return (
    <>
      <AnnoncementBar />
      <HeaderContextProvider>
        <Header />
      </HeaderContextProvider>
      <section className="product_details">
        <div className="container">
          <div className="row">
            <div className="breadcrumb">
              <Link to="/">HOME /</Link>
              <Link to="/shop">ALL /</Link>
              <Link> {productData.name}</Link>
            </div>
            <div className="product">
              <div className="media">
                <div className="slide_track">
                  {productImages.map((image, index) => {
                    return (
                      <div
                        key={index}
                        className={`slide_image ${
                          selectedImage === image ? "active" : ""
                        }`}
                      >
                        <img
                          src={image}
                          id={index}
                          alt="product_image"
                          onClick={(e) => {
                            setSelectedImage(image);
                            slideTo(e.target.id);
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="product_image">
                  <Swiper
                    navigation={true}
                    modules={[Zoom, Navigation, Pagination]}
                    className="mySwiper"
                    zoom={true}
                    onSwiper={setSwiper}
                    onSlideChange={handleSlideChange}
                  >
                    {productImages.map((image, index) => {
                      return (
                        <SwiperSlide>
                          <div
                            key={index}
                            className="slide_item swiper-zoom-container"
                          >
                            <img src={image} alt="product_img" />
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
              <div className="product_info">
                <h2 className="product_title">{productData.name}</h2>
                <p className="product_price">{productData.price}€</p>
                <div className="size_content">
                  <span className="size_title">SELECT SIZE</span>
                  <div className="sizes">
                    {sizes.map((size, index) => {
                      return (
                        <span
                          key={index}
                          className={`size ${
                            selectedSize === size ? "active" : ""
                          }`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="quantity_content">
                  <span className="title">QUANTITY</span>
                  <div className="quantity">
                    <span
                      className="decrement"
                      onClick={() => {
                        if (productCount <= 1) return;
                        setProductCount(productCount - 1);
                      }}
                    >
                      -
                    </span>
                    <span className="count">{productCount}</span>
                    <span
                      className="increment"
                      onClick={() => setProductCount(productCount + 1)}
                    >
                      +
                    </span>
                  </div>
                </div>
                <button className="add_to_cart">ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="description">
        <div className="container">
          <div className="row">
            <div className="title">
              <div className="title_text">
                <h2 className="f-size-35">PRODUCT DESCRIPTION</h2>
              </div>
              <div className="diogonal_lines deg45"></div>
            </div>
            <div className="text">
              <p>{productData.details}</p>
            </div>
          </div>
        </div>
      </section>
      <ShopifySection
        title={"YOU MIGHT ALSO LIKE"}
        id={"one"}
        titleFontSize={"35"}
      />
      <Footer />
    </>
  );
};

export default ProductDetails;
