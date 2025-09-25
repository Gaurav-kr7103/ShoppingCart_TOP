import { Link } from "react-router";
import styles from "./Home.module.css";

const Home = () => {
    const welcome_message1 = `Hey there Cool Human!`;
    const welcome_message2 = `We believe shopping should be fun, fast and inspiring. That’s why we bring you a constantly refreshed lineup of top picks, hot deals, and new arrivals.`;

    return (
        <div className={styles.home}>
            <h1>{welcome_message1}</h1>
            <p>{welcome_message2}</p>
            <div className={styles.cta}>
                Lets Shop it 👉
                <Link to="/shop">shopIT</Link>
            </div>
        </div>
    );
};

export { Home };
