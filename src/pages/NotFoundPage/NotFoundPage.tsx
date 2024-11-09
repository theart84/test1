import { useNavigate } from 'react-router-dom';
import './notFoundPage.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="notFound">
      <h1 className="notFound__title">404</h1>
      <p className="notFound__text">Запрашиваемая страница не найдена...</p>
      {/* <Link className="notFound__btn" to="/RA_router-menu">На главную</Link> */}
      {/* FIXME: можно ли реализовать возврат на шаг назад, не вызывая перезагрузки страницы ??? */}
      <button className="notFound__btn" onClick={() => navigate(-1)}>Вернуться назад</button>
    </div>
  );
};

export default NotFoundPage;
