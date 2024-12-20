import Description from "@/app/component/Description";

import BehanceIcon from "@/app/icon/ContactIcon/BehanceIcon";
import DiscordIcon from "@/app/icon/ContactIcon/DiscordIcon";
import DribbbleIcon from "@/app/icon/ContactIcon/DribbbleIcon";
import FacebookIcon from "@/app/icon/ContactIcon/FacebookIcon";
import InstagramIcon from "@/app/icon/ContactIcon/InstagramIcon";

const ContactInfo: React.FC = () => {
  return (
    <>
      <div className="max-w-[570px] flex flex-col items-start gap-[42px]">
        <Description description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"></Description>
        <div className="min-w-[320px] flex flex-row justify-start gap-[42px]">
          <a href="#">
            <DiscordIcon></DiscordIcon>
          </a>
          <a href="#">
            <FacebookIcon></FacebookIcon>
          </a>
          <a href="#">
            <DribbbleIcon></DribbbleIcon>
          </a>
          <a href="#">
            <InstagramIcon></InstagramIcon>
          </a>
          <a href="#">
            <BehanceIcon></BehanceIcon>
          </a>
        </div>
      </div>
    </>
  );
};
export default ContactInfo;
