function ServiceCard({ title, description, features, image, imagePosition = 'right' }) {
  return (
    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
      {imagePosition === 'left' && (
        <img
          className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          src={image}
          alt={`${title} feature image`}
        />
      )}
      <div className="text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="mb-8 font-light lg:text-xl">{description}</p>

        <ul
          role="list"
          className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
        >
          {features.map((feature, index) => (
            <li key={index} className="flex space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <p className="font-light lg:text-xl">
          Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions.
        </p>
      </div>
      {imagePosition === 'right' && (
        <img
          className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          src={image}
          alt={`${title} feature image`}
        />
      )}
    </div>
  );
}

export default ServiceCard;