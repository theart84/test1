import { useNavigate } from 'react-router-dom';
import './notFoundPage.css';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const getBack = () => navigate(-1);

  return (
    <div className="notFound">
      <h1 className="notFound__title">404</h1>
      <p className="notFound__text">Запрашиваемая страница не найдена...</p>
      <button className="notFound__btn" onClick={getBack}>Вернуться назад</button>
    </div>
  );
};

export default NotFoundPage;
