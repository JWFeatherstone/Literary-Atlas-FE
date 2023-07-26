import { setInitiated } from './mapSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import './Welcome.css';

const Welcome = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setInitiated());
  }

  return (
    <section className="welcome">
      <section className="welcome-message">
        <h2 className="welcome-title">An Atlas of Literature from Around the World</h2>
        <p className="welcome-subtitle">Where will you read from next? Pick a highlighted country to get started.</p>
        <button onClick={handleClick}>Get Started</button>
      </section>
    </section>
  )
}

export default Welcome;