import { WindowControls } from "@components";
import { socials } from "@constants";
import WindowWrapper from "@hoc/WindowWrapper";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>
      <div className="p-5 space-y-5">
        <div className="flex">
          <img
            src="/images/adrian.jpg"
            alt="Aye-Chan-Soe"
            className="w-30 h-30 rounded-4xl ml-3 "
          />
          <div className="pl-10 space-y-2">
            <h3>Let's Connect</h3>
            <p>
              Got an idea? A bug to squash? Or just wanna talk tech? I'm in.
            </p>
          </div>
        </div>
        <ul className="mt-10 mb-5">
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target={link.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  link.startsWith("mailto:") ? undefined : "noopener noreferrer"
                }
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
