import BehanceIcon from "@/app/icon/ContactIcon/BehanceIcon";
import DiscordIcon from "@/app/icon/ContactIcon/DiscordIcon";
import DribbbleIcon from "@/app/icon/ContactIcon/DribbbleIcon";
import FacebookIcon from "@/app/icon/ContactIcon/FacebookIcon";
import InstagramIcon from "@/app/icon/ContactIcon/InstagramIcon";
import Button from "@/component/Button";

const ContactPage = () => {
  const contactLink = [
    { href: "https://discord.com", Icon: DiscordIcon },
    { href: "https://facebook.com", Icon: FacebookIcon },
    { href: "https://dribbble.com", Icon: DribbbleIcon },
    { href: "https://instagram.com", Icon: InstagramIcon },
    { href: "https://behance.net", Icon: BehanceIcon },
  ];
  return (
    <>
      <div className="w-full px-6 py-[42.86px] flex flex-col items-start gap-6 self-stretch">
        <h1 className="font-semibold text-[32px] leading-[42px] text-start font-[#2D2D2D]">
          Lets work together
        </h1>
        <div className="w-full flex flex-row justify-between gap-[142px]">
          <div className="max-w-[570px] flex flex-col items-start gap-[42px]">
            <p className="font-[17px] font-normal leading-[27px] font-[#2D2D2D] ">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com This is a template Figma file, turned into
              code using Anima. Learn more at AnimaApp.com
            </p>
            <div className="min-w-[320px] flex flex-row justify-start gap-[42px]">
              {contactLink.map((item, index) => (
                <a key={index} href={item.href}>
                  <item.Icon />
                </a>
              ))}
            </div>
          </div>
          <div className=" min-w-[520px] flex flex-col items-start gap-6">
            <div className="w flex flex-col items-start gap-3 self-stretch">
              <input
                type="text"
                name="Name"
                id="Name"
                placeholder="Name"
                className="w-full py-4 px-6 bg-[#F3F3F3] font-[17px] leading-[27px]"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full py-4 px-6 bg-[#F3F3F3] "
              />
            </div>

            <Button text="Submit"></Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactPage;
