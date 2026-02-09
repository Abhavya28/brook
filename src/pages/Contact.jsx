import Button from "../components/Button";
import Features from "../layouts/Features";

const Contact = () => {
  return (
    <div id="contact">
      <div className="relative w-full h-80">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center blur-xs"
          style={{ backgroundImage: `url("/images/contact.jpg")` }}
        ></div>

        <div className="bg-white opacity-50 absolute inset-0"> </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <img src="/images/logo.png" alt="logo" className="w-16 h-16" />

          <h1 className="text-5xl pb-2">Contact</h1>

          <div className="flex gap-2 items-center justify-center">
            <p>Home</p>
            <img
              src="/images/right-arrow-line.svg"
              alt=""
              className="h-4 w-4"
            />
            <p>Contact</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center pt-16 gap-2 text-center px-4">
        <h1 className="text-4xl font-bold">Get In Touch With Us</h1>
        <p className="text-footer">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email.
          <br />
          <span>
            Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto gap-20 px-6 py-20 ">
        <div className="flex flex-col md:flex-row gap-28">
          <div className="w-full md:w-[26%] space-y-8 p-6">
            <div className="flex gap-4">
              <img src="/images/address.svg" alt="" className="w-6 h-6" />
              <div>
                <p className="font-semibold text-2xl">Address</p>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src="/images/phone.svg" alt="" className="w-6 h-6" />
              <div>
                <p className="font-semibold text-2xl">Phone</p>
                <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                <p className="text-gray-600">Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src="/images/clock.svg" alt="" className="w-6 h-6" />
              <div>
                <p className="font-semibold text-2xl">Working Time</p>
                <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[50%] p-6">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Abc"
                  className="border-2 border-[#9F9F9F] rounded-lg px-4 py-3 h-14"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email address</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Abc@def.com"
                  className="border-2 border-[#9F9F9F] rounded-lg px-4 py-3 h-14"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="This is optional"
                  className="border-2 border-[#9F9F9F] rounded-lg px-4 py-3 h-14"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Hi! I'd like to ask about"
                  rows={4}
                  className="border-2 border-[#9F9F9F] rounded-lg px-4 py-3 resize-none"
                />
              </div>

              <Button className="bg-primary text-white">Submit</Button>
            </form>
          </div>
        </div>
      </div>
      <Features />

     
    </div>
  );
};

export default Contact;
