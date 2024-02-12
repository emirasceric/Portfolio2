import React, { useEffect, useRef } from "react";
import ScrollButton from "./ScrollButton";
import "../Style.css";
import "./About.css";

const About = () => {
  const aboutSection = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If you have some specific actions when 'about' section is in view, add it here.
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(aboutSection.current);

    return () => {
      observer.unobserve(aboutSection.current);
    };
  }, []);

  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const startPosition = window.pageYOffset;
    const targetPosition = section.getBoundingClientRect().top;
    const distance = targetPosition;
    const duration = 3000;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      window.scrollTo({
        top: startPosition + distance * easeInOutQuad(progress),
      });

      if (elapsedTime < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    scrollToSection("contacts-section");
  };

  return (
    <section ref={aboutSection} id="about-section">
      <div>
        <div className="text-centered-content" id="about-section-text">
          <p className="textSirina">
            ABOUT ME
            <br />
            <br />
            Greetings and welcome to my portfolio! Currently embarking on
            my journey as a junior developer.<br /> I urge you not to be swayed
            by the title, I invite you to delve into this space
            <br></br>{" "}
            <br></br>
            My expertise seamlessly bridges the gap between front-end and back-end development,
            underpinned <br /> by a solid grasp of UI/UX design principles.
            My journey has led me through diverse projects,<br />
            from crafting e-commerce platforms to developing automation tools and creating <br />immersive visual experiences.
            Driven by an insatiable quest for knowledge, <br />
            I am constantly exploring the latest advancements in Machine Learning and Artificial Intelligence,<br />
            always eager to embrace new technologies and lead initiatives that stretch my capabilities.
            <br></br>
            <br></br>
            <br></br>GOING BEYOND CODING<br></br><br />
            
            With a diverse background that
            includes a years in outlet sales which includes softwer developments 
            and and all kinds of analytics, 5 years in regional sales manager
            wich includes lots of softwer developments excel analitcs,
            and a lifelong immersion in digital marketing,
            photo/video editing, I bring a unique perspective
            to the table. My experience as an e-commerce store owner on WP,registered in BiH,
            for the past 3 successful years has provided me with invaluable
            insights into a variety of markets and niches. This has only fueled
            my passion for learning and sharing knowledge. As a natural
            extrovert, I find my stride in team environments, where I can
            contribute to a common goal. I am a firm believer in the power of
            collaboration and its ability to produce synergistic outcomes.{" "}
            <br></br>
            <br></br>
            <br></br>
           <br></br><br />
            Skip the fancy animations part and head straight to the{" "}
            <a
              href="#contacts-section"
              className="contact-link"
              onClick={handleContactClick}
            >
              Contacts{" "}
            </a>
            section to schedule a meeting with me!
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default About;