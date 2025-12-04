import { Container } from "react-bootstrap";

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
      </div>
    </Container>
  );
}
