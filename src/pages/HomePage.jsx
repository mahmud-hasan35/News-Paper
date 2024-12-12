
import { IoLogoGithub, IoShareSocialOutline } from "react-icons/io5";
import { PiBookmarkSimpleThin } from "react-icons/pi";
import { RiGoogleLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import NewsData from "../assets/News";
import auth from "../fierbase/Firebase";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";



export default function HomePage () {

  const googleProvider = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider();


  const handleClick = () => {
    signInWithPopup (auth, googleProvider)
     .then((result) => {
      console.log(result);
      
     }) .catch((error) => {
      console.log(error);
      
     })
  };

  const handleGithub = () => {
    signInWithPopup(auth, githubProvider)
  }

  const [dataNews, setDataNews] = useState(NewsData);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data.data.news_category))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="w-10/12 mx-auto">
      {/* Header */}
      

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-6 mt-6">
        {/* Left Sidebar */}
        <div className="col-span-3 sticky top-4">
          <h3 className="font-bold mb-4">All Categories</h3>
          <ul>
            {categories.length > 0 ? (
              categories.map((category) => (
                <li
                  key={category.category_id}
                  className="hover:bg-slate-300 px-3 rounded-md py-2 transition duration-200 ease-in-out"
                >
                  <a href="#" className="text-gray-700">
                    {category.category_name}
                  </a>
                </li>
              ))
            ) : (
              <li className="text-gray-500">No categories available</li>
            )}
          </ul>
        </div>

        {/* News Section */}
        
        <div className="col-span-6 sticky top-0 h-[75vh] overflow-y-auto shadow-md">
          <h3 className="font-bold mb-4">Dragon News Home</h3>
          {dataNews.map((news) => (
            <div key={news._id} className="border mt-4 rounded shadow-sm">
              <div className="flex justify-between items-center bg-gray-100 p-3 rounded-t">
                <div className="flex items-center space-x-4">
                  <img className="w-10 h-10 rounded-full" src={news.author.img} alt={news.author.name} />
                  <div>
                    <span className="block font-semibold">{news.author.name}</span>
                    <span className="block text-sm text-gray-500">{news.author.published_date}</span>
                  </div>
                </div>
                <div className="flex space-x-4 items-center">
                  <span className="text-gray-600 cursor-pointer">
                    <PiBookmarkSimpleThin />
                  </span>
                  <span className="text-gray-600 cursor-pointer">
                    <IoShareSocialOutline />
                  </span>
                </div>
              </div>
              <div className="p-3">
                <strong className="text-gray-800 text-lg font-bold">{news.title}</strong>
                <p className="text-gray-600 mt-2">{news.details}</p>
                {news.image_url && <img className="w-full mt-3 rounded" src={news.image_url} alt={news.title} />}
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="col-span-3">
          <h3 className="font-bold mb-4">Login With</h3>
          <button onClick={handleClick} className="flex items-center border w-full border-blue-300 p-2 mb-4 bg-teal-100 rounded hover:bg-blue-100">
            <span className="text-xl text-blue-500 mr-2">
              <RiGoogleLine />
            </span>
            Log in With Google
          </button>
          <HiAdjustmentsHorizontal />
          <button onClick={handleGithub} className="flex items-center border w-full border-gray-300 p-2 rounded hover:bg-gray-100">
            <span className="text-xl text-gray-500 mr-2">
              <IoLogoGithub />
            </span>
            Log in With Github
          </button>
        </div>
      </div>
    </div>
    
  );
}
