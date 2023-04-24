import { useForm } from "@formspree/react";
import Script from "next/script";
import { useEffect } from "react";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("myyanwga");

  useEffect(() => {
    var el = document.getElementById("g-recaptcha-response");
    if (el) {
      el.setAttribute("required", "required");
    }
  }, [state]);

  return (
    <section
      className="px-5 md:px-20 flex flex-col justify-center md:min-h-[100vh] bg-no-repeat bg-right-bottom max-w-7xl"
      id="contact"
      style={{ backgroundImage: "url('/assets/contact.svg')" }}
    >
      <h1
        className="text-3xl md:text-6xl font-monserrat font-bold pt-20 leading-tight text-secondary"
        data-aos="fade-up"
      >
        Me contacter
      </h1>

      {!state.succeeded ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-7 mt-11 text-base md:text-lg text-white max-w-4xl"
        >
          <div className="flex flex-col md:flex-row gap-7 w-full">
            <input
              id="firstname"
              type="text"
              name="firstname"
              placeholder="Prénom"
              className="w-full md:w-1/2 bg-[#494C5D] px-4 py-3 rounded-xl"
              required
            />

            <input
              id="lastname"
              type="text"
              name="lastname"
              placeholder="Nom"
              className="w-full md:w-1/2 bg-[#494C5D] px-4 py-3 rounded-xl"
              required
            />
          </div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Adresse mail"
            className="bg-[#494C5D] px-4 py-3 rounded-xl w-full"
            required
          />

          <textarea
            id="message"
            name="message"
            className="bg-[#494C5D] px-4 py-3 rounded-xl w-full min-h-[200px]"
            placeholder="Message"
            required
          ></textarea>

          <div className="flex gap-5 flex-col md:flex-row justify-between md:items-center">
            <div
              className="g-recaptcha"
              data-sitekey="6LeVFsgUAAAAAOgCWy0U-dfcUQ_oZiZGupDZH80p"
            ></div>
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-primary block py-3 px-10 rounded-full max-w-fit hover:bg-[#B46294] transition-all duration-300"
            >
              {state.submitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          </div>
          <Script src="https://www.google.com/recaptcha/api.js" />
        </form>
      ) : (
        <div
          className="flex flex-col justify-center
        gap-7 mt-11 text-lg text-white max-w-4xl bg-[#494C5D] p-10 rounded-xl w-full min-h-[200px]"
        >
          <h1 className="text-4xl font-monserrat font-bold leading-tight text-blue_accent">
            Merci pour votre message !
          </h1>
          <p className="text-lg">
            Je vous répondrai dans les plus brefs délais 😀
          </p>
        </div>
      )}
    </section>
  );
}
