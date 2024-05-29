import './App.css';
import Header from './components/Header.jsx';
import NavBar from './components/NavBar.jsx';
import ArticleList from './components/ArticleList.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <ArticleList />
      <Footer />
    </div>
  );
}

export default App;
