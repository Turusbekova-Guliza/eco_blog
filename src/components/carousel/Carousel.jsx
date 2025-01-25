import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";
import firstImage from "../../assets/firstimage.png";
import thirdImage from "../../assets/third.png";
import secondImage from "../../assets/second.png";
const Carousel = () => {
  const newsItems = [
    {
      title: "\u00abЭкодвор\u00bb в Ош",
      description:
        "Праздник \u00abЭкодвор\u00bb в городе Ош объединит соседей для решения проблемы отходов",
      image: firstImage,
    },
    {
      title: "Лагерь волонтеров Кыргызстан",
      description:
        "В Кыргызстане прошел международный лагерь \u00abШкола лесных волонтеров\u00bb",
      image: secondImage,
    },
    {
      title: "Лес восстановлен Forest Day",
      description:
        "Более 5000 деревьев на месте погибшего леса посадили в городе Бишкеке участники Forest Day",
      image: thirdImage,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Новости</h2>
      <Slider {...settings}>
        {newsItems.map((item, index) => (
          <div key={index} className="carousel-slide">
            <img src={item.image} alt={item.title} className="carousel-image" />
            <div className="carousel-content">
              <h3 className="carousel-item-title">{item.title}</h3>
              <p className="carousel-item-description">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
