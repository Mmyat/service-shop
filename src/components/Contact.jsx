import facebook from "../assets/facebook.svg";
import map from "../assets/map.jpg";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const social = [
    {
      icon: facebook,
      link: "https://www.facebook.com/nextparts.yangon",
      title: "facebook",
    },
    // {
    //   icon: telegram,
    //   link: "https://t.me/myo_myat_zaw",
    //   title: "telegram",
    // },
    // {
    //   icon: email,
    //   link: "mailto:mmyathaha@gmail.com",
    //   title: "email",
    // },
  ];

  const form = useRef(null); // Correctly initialize `form` reference

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_h00z8g8",
          "template_jn2y1nk",
          form.current,
          "9WdP69qN8ZkGq1S5n"
        )
        .then(
          (result) => {
            console.log("Email sent:", result.text);
          },
          (error) => {
            console.log("Email sending error:", error.text);
          }
        );

      e.target.reset(); // Reset form after submission
    } else {
      console.error("Form reference is not defined.");
    }
  };

  return (
    <div className="bg-dark md:px-10 px-7 py-2" id="contact">
      <div className="flex flex-col md:flex-row">
        {/* Text and Icons */}
        <div className="md:w-1/2">
          <h1 className="text-white font-semibold text-3xl mt-16">
            Join on us
          </h1>
          {/* Social Icons */}
          <div className="flex">
            {social.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                title={item.title}
              >
                <img
                  className="rounded-lg ml-4 hover:scale-125 transition-transform"
                  style={{
                    width: "32px",
                    aspectRatio: "1/1",
                  }}
                  src={item.icon}
                  alt={item.title}
                />
              </a>
            ))}
          </div>
        </div>
        {/* Form */}
        <div className="md:w-1/2">
          <a
            href="https://www.google.com/maps/place/Nextparts+(Yangon)/@16.7746554,96.1608385,17z/data=!3m1!4b1!4m6!3m5!1s0x30c1ed8804b634bd:0xfcd3e08041cc8b58!8m2!3d16.7746554!4d96.1634134!16s%2Fg%2F11t6nn6k5m?authuser=0&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            target="google_map_pointer"
          >
            <img
              src={map}
              alt="NextPart's Map"
              className="w-[400px] h-[200px] object-cover rounded-lg shadow-md"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
