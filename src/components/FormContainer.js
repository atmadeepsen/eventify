import InputLabels from "./InputLabels";
import PropTypes from "prop-types";

const FormContainer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center max-w-full text-center text-base text-darkgray-200 font-roboto ${className}`}
    >
      <div className="w-96 shadow-[0px_4px_6px_-4px_rgba(0,_0,_0,_0.1),_0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_0px_0px_#000,_0px_0px_0px_#000] rounded-lg bg-gray-200 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-8 px-8 pb-[31px] box-border gap-[56px] max-w-full mq450:gap-[28px] mq450:pt-[21px] mq450:pb-5 mq450:box-border">
        <h2 className="m-0 relative text-11xl leading-[36px] font-bold font-inherit text-white mq450:text-lg mq450:leading-[22px] mq750:text-5xl mq750:leading-[29px]">
          EventManager
        </h2>
        <div className="self-stretch h-6 relative hidden">
          <div className="absolute top-[0px] left-[calc(50%_-_154px)] leading-[24px] inline-block w-[154px]">
            Login to your account
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[64px] mq450:gap-[32px]">
          <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[16px]">
            <InputLabels
              email="Email"
              youexamplecomPlaceholder="you@example.com"
            />
            <InputLabels
              email="Password"
              youexamplecomPlaceholder="********"
              propPadding="0px 0px 16px"
            />
            <button className="cursor-pointer [border:none] py-2 pr-5 pl-[21px] bg-mediumspringgreen self-stretch rounded-lg flex flex-row items-start justify-center hover:bg-forestgreen">
              <div className="relative text-base leading-[24px] font-semibold font-roboto text-white text-center inline-block min-w-[41px]">
                Login
              </div>
            </button>
          </form>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
            <div className="relative leading-[24px]">
              Don't have an account?
            </div>
            <div className="relative leading-[24px] text-mediumspringgreen inline-block min-w-[53px] whitespace-nowrap">
              Sign up
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FormContainer.propTypes = {
  className: PropTypes.string,
};

export default FormContainer;
