import '../CollaborationsSection/CollaborationsSection.css'
import { feedBack } from './data';
import koma from '../../../../images/feedBack/koma.png'

const FeedbackSection = () => {
    return (
        <div className="bg-black pl-[123px] text-white pb-[261px]">
            <h1 className="rota-bold text-7xl  pb-20">What People are saying about us</h1>

            <div className='flex gap-28 pr-52 '>
                {
                    feedBack.map(singleFeedBack =>
                        <>
                            <div className='hover:bg-green-600  w-[506px] pb-20 pl-9 pr-20'>
                                <div className='pb-9 pt-9 w-[45.331px] h-[33.632px]'>
                                    <img src={koma} alt="" />
                                </div>
                                <div>
                                    <p className='ethos-nova-thin text-3xl w-[383px]'>{singleFeedBack.message}</p>
                                </div>
                                <div className="">
                                    <div>
                                        <img src={singleFeedBack.image} alt="" />
                                    </div>
                                    <div>
                                        <p>{singleFeedBack.position}</p>
                                        <img src={singleFeedBack.country} alt="" />
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default FeedbackSection;