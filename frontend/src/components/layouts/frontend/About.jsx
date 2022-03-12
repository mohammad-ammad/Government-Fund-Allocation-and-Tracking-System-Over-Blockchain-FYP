import { motion } from 'framer-motion';
import React from 'react'
import aboutLogo from '../../../assets/eth.gif';
const About = () => {
  return (
    <>
    <h3>About GFATS</h3>
     <div className='dots'>
              <div></div>
              <div></div>
              <div></div>
      </div>
    <div className='about_container'>
        <motion.div
        animate={{
          y: window.innerWidth>991?["0%", "-30%", "-30%", "0%"]:["0%", "-10%", "-10%", "0%"],
        }}
        transition={{duration:7, repeat: Infinity }}
        >
        <img src={aboutLogo} alt="" />
        </motion.div>
        <div className='about_para'>
            <p>
            Blockchain is being acclaimed for its ability to improve the transparency and trust of information-based exchanges between people and organizations. Because of their potential to prevent corruption and protect public registries from fraud and tampering, Blockchain technologies are attracting development organizations and anti-corruption communities. Some experts have predicted that blockchain can be a weapon to fight poverty and corruption. Already adapted by some giant private sector firms, blockchain can also be proven as a gemstone for Government and public sectors. Governments regularly have to make trade-offs between efficiency and fairness in their services. They have to carry out a huge number of transactions However ensuring transparency and eliminating corruptions at different levels is highly challenging task. Blockchain innovation addresses these issues by providing a specialized foundation that underpins the execution of shared business forms in such a way that no single substance controls the entire framework. We here make use of blockchain technology to secure the transactions at every stage while maintaining transparency in every transaction sealing every transaction with proofs as the funds move ahead.  The expected outcome of this project is to provide a system which is immutable record of transaction for funds allocation using ethereum blockchain technology and smart contracts
            </p>
        </div>
    </div>
    </>
  )
}

export default About