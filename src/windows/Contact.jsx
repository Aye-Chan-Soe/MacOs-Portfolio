import { WindowControls } from "@components";
import { socials } from "@constants";
import WindowWrapper from "@hoc/WindowWrapper";
import useWindowStore from "@store/window";

const Contact = () => {
  const openWindow = useWindowStore((state) => state.openWindow);
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>
      <div className="p-5 space-y-5">
        <div className="flex">
          <img
            src="/images/ayechansoe.jpg"
            alt="Aye-Chan-Soe"
            className="w-40 h-50 rounded-4xl ml-3 "
          />
          <div className="pl-10 space-y-2 mt-10">
            <h3>Let's Connect</h3>
            <p>
              Got an idea? A bug to squash? Or just wanna talk tech? I'm in.
            </p>
          </div>
        </div>
        <ul className="mt-10 mb-5">
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              {text == "Email" ? (
                <button
                  type="button"
                  onClick={() => openWindow("email")}
                  title="Send me an email"
                >
                  <img src={icon} alt="email" className="size-5" />
                  <p className="pt-5 ">{text}</p>
                </button>
              ) : (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={text}
                >
                  <img src={icon} alt={text} className="size-5" />
                  <p>{text}</p>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
