import { useState, useEffect } from "react";
import Header from "./components/Header";
import Features from "./components/Features";
import BookmarkManager from "./components/BookmarkManager";
import Extensions from "./components/Extensions";
import Questions from "./components/Questions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

const efectLoading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return { loading };
};

function App() {
  const { loading } = efectLoading();

  return (
    <div className="w-full overflow-hidden ">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="w-full ">
            <Header />
            <BookmarkManager />
          </div>
          <Features />
          <Extensions />
          <Questions />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
