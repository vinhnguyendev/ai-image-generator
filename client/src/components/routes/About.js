import * as sec from "../";
import preview from "../../assets/preview.png";
import sad from "../../assets/sad.png";
import solution from "../../assets/solution.png";
import step1 from "../../assets/step01.png";
import step2 from "../../assets/step02.png";
import step3 from "../../assets/step03.png";

export function About() {
  return (
    <div className="container justify-content-center px-0">
      <sec.Hero
        title="Unleash Your Creativity with the Power of AI-Generated Images!"
        hasButtons
        button1Text="GET STARTED NOW"
        button2Text="SIGN UP"
        button1Link="/"
        button2Link="/login"
      />
      <sec.ControlledCarousel/>
      <div>
        <sec.BlogCard
          title="Challenges in Finding the Right Image"
          subtitle="In today's digital age, finding the right image can be a daunting task. There are numerous factors to consider, including copyright, quality, and size. One of the primary issues is copyright."
          image = {sad}
          reverse
          preview = {preview}
        />
        <sec.BlogCard
          title="PixolabAI is a platform that helps you to create a perfect Image"
          subtitle="By leveraging the power of AI, this platform could help individuals save time and effort in finding the perfect image for their project or work, while also providing insights and recommendations for image modifications and enhancements."
          image = {solution}
          preview = {preview}
        />
        <sec.SectionDevider
        title="Simple Steps to Get Started with pixolabAI"/>
         <sec.BlogCard
          title="STEP 1"
          subtitle="Navigate to create post page, or press “Get start now” 
          to try pixolabAI image generator, In order to access all the features and functionality of our app, users will need to create an account and sign in."
          image = {step1}
          preview = {preview}
          columnView
          reverse
        />
         <sec.BlogCard
          title="STEP 2"
          subtitle="On the create post page, you will see an option to select the size of the image you want to generate. The available sizes are small (256px-256px), medium (512px-512px), and large (1024px-1024px). Choose the size that fits your needs."
          image = {step2}
          preview = {preview}
          columnView
        />
         <sec.BlogCard
          title="STEP 3"
          subtitle="Once you have selected the image size, write your prompt in the text field provided. Be as specific as possible about what you want your image to include, so that PixolabAI can generate the right image for you.After you have entered your prompt and double-checked that everything is correct, press the “generate” button."
          image = {step3}
          preview = {preview}
          columnView
          reverse
        />
      </div>
      <sec.SectionDevider
      title = "If you have any questions? Get in touch with us today"
      />
      <sec.ContactForm/>
    </div>
  );
}
