import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ".//Events.scss";
import event1Img from "../../assets/img/imgfirst.png";
import event2Img from "../../assets/img/imgsecond.png";
import event3Img from "../../assets/img/imgthird.png";

const Event = () => {
  const eventItems = [
    {
      title: "«Экодвор» в Бишкек",
      description:
        "Праздник «Экодвор» в Бишкеке объединит соседей для решения проблемы отходов.",
      image: event1Img,
    },
    {
      title: "Лагерь волонтеров Кыргызстан",
      description:
        "В Кыргызстане открылся международный лагерь «Школа лесных волонтеров».",
      image: event2Img,
    },
    {
      title: "Восстановление леса Forest Day",
      description:
        "Более 5000 деревьев посадили в городе Бишкек на месте погибшего леса.",
      image: event3Img,
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
    <div className="event-container">
      <h2 className="event-title">Мероприятия</h2>
      <Slider {...settings}>
        {eventItems.map((item, index) => (
          <div key={index} className="event-slide">
            <img src={item.image} alt={item.title} className="event-image" />
            <div className="event-content">
              <h3 className="event-item-title">{item.title}</h3>
              <p className="event-item-description">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Event;
