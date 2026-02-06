const Footer = () => {
  return (
    <footer className="px-6 md:px-20 py-16 border-t">
      <div className="flex flex-col md:flex-row gap-10 md:gap-28 pb-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-secondary">Funiro.</h1>
          <p className="text-footer">Chandigarh University</p>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-footer font-medium">Links</span>
          <a href="#" className="hover:text-primary">
            Home
          </a>
          <a href="#" className="hover:text-primary">
            Shop
          </a>
          <a href="#" className="hover:text-primary">
            About
          </a>
          <a href="#" className="hover:text-primary">
            Contact
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-footer font-medium">Help</span>
          <a href="#" className="hover:text-primary">
            Payment Options
          </a>
          <a href="#" className="hover:text-primary">
            Returns
          </a>
          <a href="#" className="hover:text-primary">
            Privacy Policies
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-footer font-medium">Newsletter</span>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border-b-2 border-black outline-none text-sm py-1 w-full sm:w-auto"
            />
            <button
              type="submit"
              className="border-b-2 border-black text-sm font-semibold hover:text-primary w-fit"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <div className="border-t-2 border-[#D9D9D9]">
        <br />
        2023 Brook. All rights reverved
      </div>
    </footer>
  );
};

export default Footer;
