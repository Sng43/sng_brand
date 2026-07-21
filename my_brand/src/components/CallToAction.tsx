import Button from "./Button";

const CallToAction = () => {
    return (
        <div className="call my-8 sm:my-0 lg:w-[45%] sm:w-[70%]">
            <p className="sm:leading-8 lg:leading-10 lg:text-2xl lg:mb-12 mb-6 font-antic text-xl tracking-wider text-gray-200">
                AI Engineer helping turn ideas (however crazy they are) into value! Yours are next...
            </p>
            <Button />
        </div>
    );
}

export default CallToAction;
