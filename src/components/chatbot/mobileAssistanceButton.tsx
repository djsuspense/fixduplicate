import Lottie from 'lottie-react';
import React, { FC } from 'react';
import chatLoadingAnimation from "./bubbles.json";
import styles from "./chatbot.module.css";

interface MobileAssistanceProps {
 onClick: () => void
}

const MobileAssistanceButton: FC<MobileAssistanceProps> = ({ onClick }) => {
     return (
       <button 
         className={styles.mobileAssistanceButton} 
         aria-label="Open AI Assistance"
         onClick={onClick}
       >
         <div className={styles.assistanceIcon}>Assistance <br />
           <Lottie
              animationData={chatLoadingAnimation}
              loop
              autoplay
              className={`${styles.loadingIcon} ${styles.mobileLoadingIcon}`}
            />
         </div>
       </button>
  );
};

export default MobileAssistanceButton