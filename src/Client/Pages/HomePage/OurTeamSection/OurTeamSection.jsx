import pic6 from '../../../../images/our-team/6.png';
import bdFlag from '../../../../images/our-team/bd-flag.png';
import './OurTeanSection.css'
import Marquee from "react-fast-marquee";
import { teamMember } from './data.js'


const OurTeamSection = () => {
    return (
        <div className="bg-black  text-white pl-[123px] pb-[260px]">
            <h1 className="rota-bold text-[80px] pb-20">Our Team</h1>
            <Marquee pauseOnHover speed={80}>
                <div className='flex gap-[30px]'>
                    {
                        teamMember.map(member => <>
                            <div className="team-bg w-[297.369px] h-[416.477px] rounded-2xl ">
                                <div className='w-[274.596px] h-[274.596px] flex justify-center pt-[11.2px] pl-[11.2px] pr-[11.2px] '>
                                    <img src={member.image} alt="" />
                                </div>
                                <div className='pl-[11px] mt-[25.31px]'>
                                    <h1 className='rota-bold font-bold text-3xl'>{member.name}</h1>
                                    <p className='ethos-nova-thin text-[17px] pb-2'>{member.position}</p>
                                    <img className='w-[28.054px] h-[20.261px]'
                                        src={member.country} alt="" />
                                </div>
                            </div>
                        </>)
                    }







                </div>
            </Marquee>
        </div>
    );
};

export default OurTeamSection;