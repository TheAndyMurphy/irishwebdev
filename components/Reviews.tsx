import React from "react";
import { useScrollAnimation } from "./ui/Card";
import { StarIcon, ExternalLinkIcon } from "./ui/Icons";

const reviewsData = [
  {
    quote:
      "We have used Andrew for all things website and online marketing for the past few years. Over the past 12 months in particular with a complete rebuild of our Elegant john bathrooms website. We have seen incredible results since Andrew has come onboard and I would have no hesitation in recommending him to anyone looking to bring their business to the next level!",
    name: "Barry Walsh",
    title: "MD at Elegant John Bathrooms",
    project: "https://elegantjohn.ie",
    avatar:
      "https://media.licdn.com/dms/image/v2/C5603AQFvvOijsmL56g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1533146990212?e=1762387200&v=beta&t=4yJ-SdXghNeYDfpl591VJjQJ6uwn8f5ojuT-bZ8ZgQc",
  },
  {
    quote:
      "Andy has done my websites for the last few years, they are brilliant. I get so many compliments, I started with Leisure Training Ireland and then I got him to do my other businesses. LTI Swim Academy and Leisure Jobs Ireland. Really easy to deal with, highly reccommend.",
    name: "Darren Ryan",
    title: "MD @ Leisure Training Ireland",
    project: "https://leisuretraining.ie",
    avatar:
      "https://media.licdn.com/dms/image/v2/C4D03AQHEXW-_OX09NA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1574292069181?e=1762387200&v=beta&t=jkLwz6JQvmrekB97zaLBIzfg_qtkJQBvK_f-U8c0gYk",
  },
  {
    quote:
      "Andy is absolutely brilliant to work with! From the very beginning, he understood exactly what I wanted for my website and brought my ideas beautifully to life. His expertise, patience, and creativity made the whole process seamless. What I value most is his continued care and support. Whenever I need advice or updates, he’s always there with great solutions and genuine dedication. Andy’s professionalism, technical skill, and kindness make him truly exceptional. I couldn’t recommend him highly enough!",
    name: "Anna Rock",
    title: "Head of Design @ Anna Rock",
        project: "https://annarock.ie",
    avatar: "https://media.licdn.com/dms/image/v2/D4E03AQGFiCN3_lubyw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730091290442?e=1762387200&v=beta&t=DXt0ARf1pEiCWO2KAUbjIDLzKaJkVtZ0rl-5-RO1jYg",
  },
];

const Reviews: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-slate-800 section-bordered">
      <div className="container mx-auto px-6">
        <div
          className={`text-left md:text-center mb-12 scroll-animate ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300">
            Hear the real stories from businesses we've helped and are still helping to succeed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((review, index) => (
            <div
              key={index}
              className={`bg-slate-900 p-8 rounded-lg shadow-lg flex flex-col scroll-animate ${
                isVisible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-300 italic mb-6 border-l-4 border-sky-500 pl-4">
                  "{review.quote}"
                </blockquote>
              </div>
              <div className="mt-auto pt-6 border-t border-slate-700/50">
                {review.project && (
                  <div className="mb-6">
                    <a
                      href={review.project}
                      target="_blank"
                      className="group inline-flex items-center text-sky-400 hover:text-sky-300 font-semibold text-sm transition-colors"
                    >
                      View Project
                      <ExternalLinkIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                )}
                <div className="flex items-center">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-lg mr-4 object-cover"
                  />
                  <div>
                    <p className="font-bold text-white">{review.name}</p>
                    <p className="text-sm text-gray-300">{review.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
