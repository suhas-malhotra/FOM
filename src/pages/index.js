import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { Layout } from "../components/Layout";
import { HeroSlider } from "../components/HeroSlider";
import { CategoryGrid } from "../components/Category";
import { getProducts } from "../lib/product";
import { BlogPostSlider } from "../components/Blog";
import { SectionTitle } from "../components/SectionTitle";
import { ImageCta } from "../components/Cta";
import { CountdownTimer } from "../components/Countdown";
import { ProductSlider } from "../components/ProductSlider";
import blogData from "../data/blog-posts/blog-post-one.json";
import heroSliderData from "../data/hero-sliders/hero-slider-six.json";

const Home = ({ products }) => {
  return (
    <Layout aboutOverlay={false}>
      {/* hero slider */}
      <HeroSlider sliderData={heroSliderData} />
      <div className="space-mb--r100"></div>

      {/* category grid */}
      <div className="section-title-container">
        <Container>
          <Row className="space-mb--50">
            <Col xs={6}>
              <div className="section-title__label">
                <p>
                  SS-2020 <span className="line">84</span>
                </p>
              </div>
            </Col>
            <Col xs={6} className="text-right">
              <div className="section-title__label">
                <p>
                  INNOVATIVE <br /> DESIGN
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="col-lg-12">
              <SectionTitle title="Clever & unique ideas" />
            </div>
          </Row>
        </Container>
      </div>
      <CategoryGrid spaceBottomClass="space-mb--r100" />

      {/* countdown */}
      <CountdownTimer
        title="Deal of the day"
        image="/assets/images/countdown/countdown-3.jpg"
        dateTime="July 07, 2020 12:12:00"
        url="/shop/left-sidebar"
        buttonText="Only $39"
        spaceBottomClass="space-mb--r100"
        containerType="normal"
      />

      {/* product slider */}
      <ProductSlider products={products} />

      {/* image cta */}
      <ImageCta spaceBottomClass="space-mb--r100" />

      {/* blog post slider */}
      <BlogPostSlider blogData={blogData} spaceBottomClass="space-mb--r100" />
    </Layout>
  );
};

const mapStateToProps = (state) => {
  const products = state.productData;
  return {
    products: getProducts(products, "furniture", "popular", 10),
  };
};

export default connect(mapStateToProps)(Home);
