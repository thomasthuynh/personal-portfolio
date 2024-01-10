import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section name="contact" className="bg-primary h-screen w-full">
      <div className="mx-auto flex h-full w-[90%] max-w-[1024px] flex-col items-center justify-center text-white">
        <h2 className="text-4xl font-bold">
          Get In <span className="text-secondary">Touch</span>
        </h2>

        <p className="text-gray pb-12 pt-4 lg:text-lg">
          Want to ask a question, share feedback, or collaborate on a project?
          Shoot me a message!
        </p>

        <div className="w-[90%] max-w-[640px]">
          <form
            action="https://formsubmit.co/thomas_tth@live.com"
            method="POST"
            onSubmit={() => setIsSubmitting(true)}
            className="flex flex-col"
          >
            <input
              type="text"
              name="name"
              className="bg-white p-2 text-black outline-none"
              placeholder="Name"
              required
            />

            <input
              type="email"
              name="email"
              className="my-4 bg-white p-2 text-black outline-none"
              placeholder="Email"
              required
            />

            <textarea
              name="message"
              rows="10"
              className="bg-white p-2 text-black outline-none"
              placeholder="Message"
              required
            ></textarea>

            <button
              disabled={isSubmitting}
              aria-label={isSubmitting ? "Submitting" : "Send it my way!"}
              // className="hover:bg-secondary hover:border-secondary mt-6 flex h-[60px] items-center justify-center border-2 border-white px-4 py-4 text-white duration-300"
              className={`${
                isSubmitting && "bg-secondary border-secondary"
              } hover:bg-secondary hover:border-secondary mt-6 flex h-[60px] items-center justify-center border-2 border-white px-4 py-4 text-white duration-300`}
            >
              {isSubmitting ? (
                <BeatLoader color="#ccd6f6" />
              ) : (
                "Send it my way!"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
