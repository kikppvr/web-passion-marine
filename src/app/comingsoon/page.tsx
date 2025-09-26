import Image from "next/image";
import "./comingsoon.modules.scss";

export default function ComingSoon() {
    return (
        <div className='comingsoon'>
            <div className='comingsoon__logo'>
                <Image
                    src='/images/logo/logo-passion-marine-white.svg'
                    alt='Logo'
                    width={158}
                    height={44}
                />
            </div>
            <div className='comingsoon__content'>
                <h1 className='comingsoon__content-title'>Coming Soon</h1>
                <p className='comingsoon__content-description'>Something new is on the way.</p>
            </div>
        </div>
    );
}
