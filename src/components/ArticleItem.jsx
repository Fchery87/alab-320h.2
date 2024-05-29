import PropTypes from 'prop-types';

function ArticleItem({ date, title, image, content }) {
  return (
    <div className="article-item">
      <p className="article-date">{date}</p>
      <h2 className="article-title">{title}</h2>
      <img src={image} alt={title} className="article-image"/>
      <p className="article-content">{content}</p>
      <a href="#" className="article-continue">Continues ...</a>
    </div>
  );
}

ArticleItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ArticleItem;
