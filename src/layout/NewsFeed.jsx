
// import { IoLogoGithub, IoShareSocialOutline } from "react-icons/io5";
// import { PiBookmarkSimpleThin } from "react-icons/pi";
// import { RiGoogleLine } from "react-icons/ri";
// import { useEffect, useState } from "react";
// import NewsData from "../assets/News";
// import imageLogo from '../assets/image/logo.png';

// export default function Main() {

//   // const [data,setData] = useState(newsCategorys)
//   const [dataNews, setDataNews] = useState(NewsData)

//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     fetch('https://openapi.programming-hero.com/api/news/categories')
//       .then((response) => response.json())
//       .then((data) => setCategories(data.data.news_category)) 
//       .catch((error) => console.error('Error fetching data:', error)); 
//   }, []);


//   return (
//     <div className="w-10/12 mx-auto ">
//       <div className="text-center py-5 ">
//         <h1 className="font-cursive2 text-5xl font-semibold text-slate-800 mb-5">
//           <img src={imageLogo} alt="Logo" className="inline-block h-12" />
//         </h1>
//         <p className="font-mono  text-xl mb-3">journalism Without Fear or Favour</p>
//         <span className="font-semibold text-lg">Sunday, November 27,2025</span>
//       </div>

//       <div className="bg-slate-100 flex items-center py-3">
//         <button className="px-4 py-1  bg-red-600 text-white mx-4">Latest</button>
//         <marquee>Match Highlights: Gemany vs Span as in hoppenend ! Match Highlights : Germany vs Span as in hoppened</marquee>

//       </div>

//       <div className="p-6 bg-gray-">
//         <div className="flex items-center justify-between">
//           <ul className="flex space-x-4 mx-auto">
//             <li className="hover:text-blue-500 cursor-pointer">Home</li>
//             <li className="hover:text-blue-500 cursor-pointer">About</li>
//             <li className="hover:text-blue-500 cursor-pointer">Career</li>
//           </ul>
//           <div className="flex items-center">
//             <span className="w-10 h-10 bg-slate-300 rounded-full flex-shrink-0"></span>
//             <button className="ml-4 px-4 py-1 bg-black text-white rounded hover:bg-gray-800">
//               Login
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* category */}

//       <div className="grid grid-cols-12 gap-2">
//         <div className="col-span-3 w-48 sticky top-0">
//         <div className="reletive">
//           <div>
//             <h3 className="font-bold">All category</h3>
//             <ul >
//               {
//                 categories.map((category) =>
//                   <li key={category.category_id} className=" hover:bg-slate-300 px-3 rounded-md py-2"><a href="#">{category.category_name}</a></li>
//                 )
//               }
//             </ul>
//           </div>
//         </div>

//         </div>
//         {/* News */}

//         <div className="col-span-6 h-svh overflow-y-scroll">
//           <h3 className="font-bold">Dragon News Home</h3>
//           {dataNews.map((news) => (
//             <div key={news._id} className="border mt-4">
//               <div className="flex justify-between items-center bg-gray-100 p-2">
//                 <div className="flex items-center space-x-4">
//                   <img className="w-10 h-10 rounded-full" src={news.author.img} alt={news.author.name} />
//                   <div>
//                     <span className="block font-semibold">{news.author.name}</span>
//                     <span className="block text-sm text-gray-500">{news.author.published_date}</span>
//                   </div>
//                 </div>
//                 <div className="flex space-x-4 items-center">
//                   <span><PiBookmarkSimpleThin /></span>
//                   <span><IoShareSocialOutline /></span>
//                 </div>
//               </div>

//               <div className="p-2 mt-3">
//                 <strong className="text-gray-600 text-sm font-bold">{news.title}</strong>
//                 <p className="text-sm text-gray-600 mt-2">{news.details}</p>
//                 <img className="w-full mt-3" src={news.image_url} alt={news.title} />
//               </div>
//             </div>
//           ))}
//         </div>


//         <div className="col-span-3">
//           <h3 className="mb-4">Login With</h3>
//           <button className="flex items-center border w-full border-blue-300 p-2 mb-4 bg-teal-100 rounded hover:bg-blue-100">
//             <span className="text-xl text-blue-500 mr-2">
//               <RiGoogleLine />
//             </span>
//             Log in With Google
//           </button>
//           <button className="flex items-center border w-full border-gray-300 p-2 rounded hover:bg-gray-100">
//             <span className="text-xl text-gray-500 mr-2">
//               <IoLogoGithub />
//             </span>
//             Log in With Github
//           </button>
//         </div>
//       </div>

//     </div>
//   )
// }

import { Link, Outlet } from "react-router";

import imageLogo from "../assets/image/logo.png";

export default function NewsFeed() {
  return (
    <>
    <div className="w-10/12 mx-auto">
          <div className="text-center py-5">
        <h1 className="font-cursive2 text-5xl font-semibold text-slate-800 mb-5">
          <img src={imageLogo} alt="Logo" className="inline-block h-12" />
        </h1>
        <p className="font-mono text-xl mb-3">Journalism Without Fear or Favour</p>
        <span className="font-semibold text-lg">Sunday, November 27, 2025</span>
      </div>

      {/* Marquee Section */}
      <div className="bg-slate-100 flex items-center py-3">
        <button className="px-4 py-1 bg-red-600 text-white mx-4">Latest</button>
        <marquee className="flex-1 text-amber-800">
          Match Highlights: Germany vs Spain as it happened! Match Highlights: Germany vs Spain as it happened
        </marquee>
      </div>

      {/* Navigation */}
      <div className="p-3 bg-stone-300">
        <div className="flex items-center justify-between">
          <ul className="flex space-x-4 text-center">
            <Link to={"/"} className="hover:text-blue-500 cursor-pointer">Home</Link>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Career</li>
          </ul>
          <div className="flex items-center">
            <span className="w-10 h-10 bg-orange-100 rounded-full"></span>
            <Link to={"/login"} className="ml-4 px-4 py-1 bg-black text-white rounded hover:bg-gray-800">Login</Link>
          </div>
        </div>
      </div>
    </div>

    <Outlet/>
    
    </>
  )
}
