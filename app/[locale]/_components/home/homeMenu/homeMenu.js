"use client";
import Link from "next/link";
import Image from "next/image";
import categoriesData from "../../../_api/menu.json";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

function Homemenu() {
  const { locale } = useParams();
  const keys = [
    "salads",
    "cold_appetizers",
    "hot_appetizers",
    "Grill",
    "Ribs",
    "cow",
    "brisket",
    "smoked",
    "oriental_food",
    "box",
    "burger",
    "american_pizza",
    "kids_meals",
    "sweets",
    "cold-drinks",
    "hot-drinks",
  ];
  const t = useTranslations("categories");
  const categories = categoriesData.menu;

  return (
    <div className="swiper-container-main">
      <div
        className="carousel carousel-end max-w-full w-full min-w-md p-4 space-x-4 rounded-box "
        style={{ direction: "rtl", overflowX: "auto" }}
      >
        {keys.map((key) => (
          <div
            key={key}
            className="carousel-item relative hover:scale-[1.05] pl-4"
          >
            <Link href={`/${locale}/${t(`${key}.link`)}`}>
              <img
                src={t(`${key}.category_photo`)}
                alt="photo"
                className="rounded-box carousel-image"
              />
              <h1 className="text-center text-xl mt-5">
                {t(`${key}.category_name`)}
              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Homemenu;
