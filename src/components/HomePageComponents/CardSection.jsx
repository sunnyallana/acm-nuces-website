import { CardDemo } from './KeyCards';
import team1 from "../../assets/images/excellence/team1.jpg"
import team2 from "../../assets/images/excellence/team2.jpg"
import comp1 from "../../assets/images/excellence/comp1.jpg"
import comp2 from "../../assets/images/excellence/comp2.jpg"
import ex1 from "../../assets/images/excellence/excellence1.jpg"
import ex2 from "../../assets/images/excellence/ex2.jpg"
import grow1 from "../../assets/images/excellence/grow1.jpg"
import grow2 from "../../assets/images/excellence/grow2.jpg"

const cardData = [
  {
    name: "500+ Members",
    description: "Active Student Participants",
    bgImage: team1,
    afterBgImage: team2,
  },
  {
    name: "20+ Competitions",
    description: "Organized annually",
    bgImage: comp2,
    afterBgImage: comp1,
  },
  {
    name: "15+ Years",
    description: "Of excellence",
    bgImage: ex2,
    afterBgImage: ex1,
  },
  {
    name: "100% Growth",
    description: "Year-over-year impact",
    bgImage: grow1,
    afterBgImage: grow2,
  },
];

export function CardSection() {
  return (
    <section className="bg-white py-12 ml-14">
      <h1 className="mainh1 font-extrabold text-4xl text-center lg:text-left lg:text-7xl text-[#006984] pl-6">
        Our Excellence
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8 mx-auto">
        {cardData.map((card, index) => (
          <CardDemo
            key={index}
            {...card}
          />
        ))}
      </div>
    </section>
  );
}