import { partner } from './data.js'
import Marquee from "react-fast-marquee";


const CollaborationsSection = () => {
    return (
        <div className="bg-black pl-[123px] pb-[297px]">
            <h1 className="rota-bold text-7xl text-white pb-[115px]">Our Collaborations</h1>

            <Marquee pauseOnHover speed={200}>
                <div className="flex gap-[187px] ">
                    {
                        partner.map(p =>
                            <>
                                <img className='' src={p.logo} alt="" />
                            </>
                        )
                    }

                </div>
            </Marquee>
        </div>
    );
};

export default CollaborationsSection;