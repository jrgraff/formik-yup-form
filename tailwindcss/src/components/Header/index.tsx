export const Header = () => {
  return (
    <div className="w-full bg-green fixed shadow z-1">
      <div className="container mx-auto">
        <div className="w-full flex justify-between items-center py-4 px-8">
          <div className="items-center hidden sm:flex">
            <a
              href="/home"
              className="text-gray-800 hover:text-green-lightest no-underline mx-2 px-2 py-2"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-800 hover:text-green-lightest no-underline mx-2 px-2 py-2"
            >
              About
            </a>
            <a
              href="/contact"
              className="bg-green-dark hover:bg-green-darker rounded-full text-gray-800 no-underline mx-2 px-4 py-2"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
