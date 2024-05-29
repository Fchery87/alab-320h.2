import ArticleItem from './ArticleItem.jsx';

function ArticleList() {
  return (
    <div className="article-list">
      <ArticleItem 
        date="11/12/20" 
        title="On the Street in Brooklyn" 
        image="blog-image-1.jpg" 
        content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
      />
      <ArticleItem 
        date="11/11/20" 
        title="Vintage in Vogue" 
        image="blog-image-2.jpg" 
        content="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then"
      />
    </div>
  );
}

export default ArticleList;
