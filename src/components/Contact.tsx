import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { RefContext } from "../context/refContext";
import Swal from "sweetalert2";
import Spinner from "./Spinner";

const defaultForm = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const refContext = useContext(RefContext);
  const { contactRef } = refContext || {};
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    ...defaultForm,
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      form.current &&
      import.meta.env.VITE_SERVICE_ID &&
      import.meta.env.VITE_TEMPLATE_ID
    ) {
      setLoading(true);
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setFormData({ ...defaultForm });
            Swal.fire({
              title: "Success!",
              text: "Email have been sent!",
              icon: "success",
            });
          },
          (error: any) => {
            console.log("FAILED...", error.text);
            Swal.fire({
              title: "Failed!",
              text: "Sent E-mail Failed!",
              icon: "error",
            });
          }
        )
        .finally(() => setLoading(false));
    }
  };
  return (
    <div className="hero py-20 bg-base-200" ref={contactRef}>
      <div className="hero-content flex-col lg:flex-row-reverse max-w-5xl">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Contact Me!</h1>
          <p className="py-6">
            Looking to connect? You're in the right place. Whether you have
            questions, ideas for collaboration, or simply want to say hello, I'm
            here and eager to hear from you. Let's start a conversation and see
            where it takes us!
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form
            className="card-body"
            ref={form}
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered"
                required
                name="name"
                value={formData.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered"
                required
                name="email"
                value={formData.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Message</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Message"
                required
                name="message"
                value={formData.message}
                onChange={(e) => handleChange(e)}
              ></textarea>
            </label>
            <div className="form-control mt-6">
              <button
                className="btn btn-accent"
                type="submit"
                disabled={loading}
              >
                {loading ? <Spinner /> : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
