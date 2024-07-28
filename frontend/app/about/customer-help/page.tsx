import AboutPage from "@/app/components/AboutPage/AboutPage";
import { importAll } from "@/app/lib/utils/utils";
import Link from "next/link";
import sizesImage from "../../lib/assets/sizes.jpg";
import footSize from "../../lib/assets/footSize.jpg";
import orderInCar from "../../lib/assets/orderInCar.jpg";
export default async function AboutOrder() {
  const images = importAll(
    require.context("../../lib/assets/orderImages", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <AboutPage>
      <h2 className="AboutOrder__heading">
        Всем привет 👋 В этой статье я хочу максимально подробно расписать весь
        процесс заказа. Любая покупка начинается с выбора вещи и размера, каждая
        вещь имеет свою размерную таблицу, выглядит она примерно так:
      </h2>
      <img
        src={sizesImage.src}
        className="AboutOrder__image"
        alt="таблица замеров"
      />
      <p className="AboutOrder__text">
        По этим параметрам необходимо замерить свою вещь (желательно похожую на
        ту, которую вы хотите купить) и мы вместе с вами подберем необходимый
        размер, а после этого уточним наличие этого размера на фабрике🏭 В
        случае, если вы покупаете обувь, самый лучший вариант подобрать размер -
        сделать замер длины стельки, мы привезли много обуви и наш опыт
        показывает, что это самый действенный вариант угадать с размером 👌
      </p>
      <img
        src={footSize.src}
        className="AboutOrder__image"
        alt="замеры стельки"
      />
      <p className="AboutOrder__text">
        В том случае, если размер есть в наличии и его можно заказать, вы
        вносите предоплату 50%, предоплата нужна для нашей уверенности в том,
        что человек не пропадёт, пока вещь едет в Россию 🇷🇺 Далее вещь приезжает
        к нам на фотосклад, там уже наша помощница делает подробный фотоотчёт с
        замерами:
      </p>
      <div className="AboutOrder__grid">
        {Object.keys(images).map((key) => (
          <img
            key={key}
            className="AboutOrder__grid-item"
            src={images[key].src}
            alt={key}
            loading="lazy"
          />
        ))}
      </div>
      <p className="AboutOrder__text">
        После я скидываю его вам и жду вашего подтверждения, смысл фотоотчёта -
        найти ошибку в размере или брак. Если вам что-то не понравится - вы
        можете отказаться от покупки и я верну вам полностью предоплату, либо мы
        перезакажем другой размер 👍 В случае, если вас все устраивает, вещь
        тщательно упаковывается и едет в Россию, а если быть точнее, в Москву 🏙
        В Москве посылки сортируются и отправляются к нам в Санкт-Петербург
      </p>
      <img
        src={orderInCar.src}
        className="AboutOrder__image"
        alt="Фото с заказом в машине"
      />
      <p className="AboutOrder__text">
        Далее мы отправляем вам ваши вещи сдэком или любой другой удобной для
        вас транспортной компанией и вы доплачиваете оставшиеся 50%. Мы работаем
        честно, скоро нашему магазину будет уже 4 года, на протяжении всего
        этого времени у нас есть честные отзывы на авито и уже собралась не
        маленькая база постоянных покупателей. Так же у нас есть наличие в
        Санкт-Петербурге, посмотреть его можно тут{" "}
        <a
          className="link AboutOrder__link"
          href="https://t.me/blink_resale_nalichie"
          target="_blank"
        >
          t.me/blink_resale_nalichie
        </a>
      </p>
      <Link className="link AboutOrder__back-link" href="/">
        Вернуться на главную
      </Link>
    </AboutPage>
  );
}
