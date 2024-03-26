import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import "./Tech.css";


const Tech = () => {
  return (
    <>  
    
      <motion.div variants={textVariant()}>
      <section id="Tech-section"></section>
        <p className="text1">My skills</p>
        <h2 className="text">Technologies.</h2>
      </motion.div>

      <div className="important-flex">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
