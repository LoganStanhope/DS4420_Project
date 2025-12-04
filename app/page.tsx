import { Container } from "react-bootstrap";
import Image from "next/image";

export default function MyComponent() {
  return (
    <Container className="flex justify-center">
      <div className="text-center max-w-3xl">
        <h1>Welcome to our DS4420 Final Project!</h1>
        <h3>Team Members: Logan Stanhope & Zoe Chapman</h3>

        <br />
        <hr />
        <br />

        <p>
          Our main goal in this project is to output and rank allergy safe restaurants given a
          specific sensitivity when prompted with a list of popular New York restaurants and their
          respective menu items. The literature review will examine the implementation of machine
          learning principles, specifically about the concepts of Multi-Layer Perceptrons and Bayesian Models
          – then in turn, we will describe how we were able to address this problem with a working implementation in Python and R.
        </p>
         <br />
        <hr></hr>
         <br />
        <Image 
          src="/avgPredicitedAllergyProbAcrossAllDishes.png" 
          alt="Average Predicted Allergy Probability Across All Dishes" 
          width={400} 
          height={300}
          className="mx-auto mb-6 rounded-xl"
        />
        <p>
          Average Predicted Allergy Probability Across All Dishes 
        </p>
        <Image 
          src="/dishAllergyDist.png" 
          alt="Distribution of Safety Scores for 'Fish Allergy' Across Restaurants" 
          width={400} 
          height={300}
          className="mx-auto mb-6 rounded-xl"
        />
        <p>
          Distribution of Safety Scores for 'Fish Allergy' Across Restaurants
        </p>
        <Image 
          src="/milkAllergyDist.png" 
          alt="Distribution of Safety Scores for 'Milk Allergy' Across Restaurants" 
          width={400} 
          height={300}
          className="mx-auto mb-6 rounded-xl"
        />
        <p>
          Distribution of Safety Scores for 'Milk Allergy' Across Restaurants
        </p>
        <Image 
          src="/distributionOfSafetyScores.png" 
          alt="Distribution of Restaurant Safety Scores"
          width={400} 
          height={300}
          className="mx-auto mb-6 rounded-xl"
        />
        <p>
          Distribution of Restaurant Safety Scores
        </p>
        <Image 
          src="/poultryAllergyStats.png" 
          alt="Top and Bottom 5 Restaurants for Poultry Allergy Ranking"
          width={400} 
          height={300}
          className="mx-auto mb-6 rounded-xl"
        />
        <p>
          Top and Bottom 5 Restaurants for Poultry Allergy Ranking
        </p>
        <Image 
          src="/fishAllergyStats.png" 
          alt="Top and Bottom 5 Restaurants for Fish Allergy Ranking"
          width={400} 
          height={300}
          className="mx-auto mb-6 rounded-xl"
        />
        <p>
          Top and Bottom 5 Restaurants for Fish Allergy Ranking
        </p>
      </div>
    </Container>
  );
}
