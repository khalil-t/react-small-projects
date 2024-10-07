import { feedback } from "../constant";
import FeedbackCard from "./FeedbackCard";
import "./Testimonials.css"
const Testimonials = () => (
  <section className="clients" >
    <div  />

    <div  className="clientsa" >
      <h2 className="clientsh">
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="clientsd">
        <p className="clientsp">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="flex">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
    <div className="back2" />

  </section>
);

export default Testimonials;