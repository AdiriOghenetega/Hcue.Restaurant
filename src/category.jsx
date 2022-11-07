import "./assets/category.css";
import {
  GiBowlOfRice,
  GiBeerBottle,
  GiChickenOven,
  GiFruitBowl,
} from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import mealListPhoto from "../public/images/hcue/mealbycategory.jpg"
import {Link} from "react-router-dom"

function MealByCategory(props) {
  return (
    <div className={props.className}>
      <div className="mealbycategory__info">
      <Link to={`/${props.meal}`}>
        <h3>{props.meal}</h3>
      </Link>
        <p>{props.description}</p>
      </div>
      <Link to={`/${props.meal}`}>
      <div className="mealbycategory__icon">{props.icon}</div>
      </Link>
    </div>
  );
}

export default function Category() {
  const soup = (
    <TbSoup size="45px" className="category__mealbycategory_icons" />
  );
  const rice = (
    <GiBowlOfRice size="45px" className="category__mealbycategory_icons" />
  );
  const salad = (
    <GiFruitBowl size="45px" className="category__mealbycategory_icons" />
  );
  const drinks = (
    <GiBeerBottle size="45px" className="category__mealbycategory_icons" />
  );
  const chicken = (
    <GiChickenOven size="45px" className="category__mealbycategory_icons" />
  );
  const others = (
    <MdFoodBank size="45px" className="category__mealbycategory_icons" />
  );

  return (
    <div className="category__container">
    <div className="category__breakfast-mainmeal-container">
    <div className="category__breakfast-options">
      <h1>OUR BREAKFAST OPTIONS</h1>
        <ul>
          <li>Noodles</li>
          <li>Akara</li>
          <li>Bread</li>
        </ul>
       
      </div>
      <div className="category__mainmeal-options">
      <h1>OUR MAIN MEAL OPTIONS</h1>
        <ul>
          <li>Assorted Jollof Rice</li>
          <li>Continental Fried Rice</li>
          <li>Coconut Rice</li>
          <li>Swallow and Soup</li>
        </ul>
       
      </div>
    </div>
      
      <div className="category__mealbycategory">
        <h1>MEAL BY CATEGORY</h1>
        <div className="category__mealbycategory_list">
          <div className="category__mealbycategory_list-left">
            <MealByCategory
              meal="soup"
              description="get the best out of our nigerian soup delicacies"
              icon={soup}
              className="category__mealbycategory_list-left_soup"
            />
            <MealByCategory
              meal="rice"
              description="good quality rice that brings out your good mood"
              icon={rice}
              className="category__mealbycategory_list-left_rice"
            />
            <MealByCategory
              meal="salad"
              description="enjoy our good nourished salad to flourish and healthy living"
              icon={salad}
              className="category__mealbycategory_list-left_salad"
            />
          </div>
          <div className="category__mealbycategory_list-photo flip-vertical-right">
            <img src={mealListPhoto} />
          </div>
          <div className="category__mealbycategory_list-right">
            <MealByCategory
              meal="proteins"
              description="the best juicy crispy proteins in nigeria"
              icon={chicken}
              className="category__mealbycategory_list-right_proteins"
            />
            <MealByCategory
              meal="others"
              description="enjoy the unique flavor of our seafoods"
              icon={others}
              className="category__mealbycategory_list-right_others"
            />
            <MealByCategory
              meal="drinks"
              description="enjoy the best homemade swallow with great feel of home faraway from home"
              icon={drinks}
              className="category__mealbycategory_list-right_drinks"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
