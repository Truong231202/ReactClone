import Button from "@/app/component/Button";

const ContactForm: React.FC = () => {
  return (
    <>
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
    </>
  );
};
export default ContactForm;
