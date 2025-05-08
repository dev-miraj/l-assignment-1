// import { useState } from 'react';

// function Testimonial() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const testimonials = [
//     {
//       quote: "Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
//       author: "Micheal Gough",
//       position: "CEO at Google",
//       image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
//     },
//     {
//       quote: "I recently purchased the Landwind template and it was a great decision! The code is well organized and easy to understand, making it a breeze to customize.",
//       author: "Roberta Casas",
//       position: "Lead Designer at Facebook",
//       image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
//     },
//     {
//       quote: "The best thing about Landwind is that it keeps getting better with each update. The team behind it is constantly adding new features and improvements.",
//       author: "Jese Leos",
//       position: "Tech Lead at Amazon",
//       image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <section className="bg-gray-50 dark:bg-gray-800">
//       <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
//         <figure className="max-w-screen-md mx-auto">
//           <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
//           </svg>
//           <div className="relative h-48 overflow-hidden">
//             {testimonials.map((testimonial, index) => (
//               <blockquote
//                 key={index}
//                 className={`absolute w-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
//               >
//                 <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
//                   {testimonial.quote}
//                 </p>
//                 <div className="flex items-center justify-center mt-6 space-x-3">
//                   <img className="w-6 h-6 rounded-full" src={testimonial.image} alt={testimonial.author} />
//                   <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
//                     <div className="pr-3 font-medium text-gray-900 dark:text-white">{testimonial.author}</div>
//                     <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{testimonial.position}</div>
//                   </div>
//                 </div>
//               </blockquote>
//             ))}
//           </div>
//           <div className="flex justify-center mt-6 space-x-3">
//             <button
//               onClick={prevSlide}
//               className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
//             <button
//               onClick={nextSlide}
//               className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>
//         </figure>
//       </div>
//     </section>
//   );
// }


// export default Testimonial;


import React from 'react';
import profileImage from '../assets/avatar/michael-gouch.png';
const Testimonial = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          <svg
            className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
              "Landwind is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img
              className="w-6 h-6 rounded-full"
              src={profileImage}
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-medium text-gray-900 dark:text-white">
                Micheal Gough
              </div>
              <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                CEO at Google
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Testimonial
