import './FooterSection.css'
import arrow from '../../../../images/footer/arrow.png'
import fb from '../../../../images/footer/fb.png'
import whatsapp from '../../../../images/footer/whatsapp.png'
import insta from '../../../../images/footer/insta.png'
import be from '../../../../images/footer/be.png'
import { Link } from 'react-router-dom';

const FooterSection = () => {
    return (
        <div className='bg-black footer-bg text-white pl-[123px] pb-0'>
            <h1 className="text-6xl rota-light rota-medium">CONTACT</h1>
            <div className='pb-14 flex mt-10'>
                <p className="text-[140px] rota-bold">Let's</p>
                <p className="text-[140px] rota-light">Talk</p>
                <img className='inline-block mt-[-10px] h-[81.894px] w-[74.468px]' src={arrow} alt="" />
            </div>
            <div className='bg-white h-a'>

            </div>

            

            <div className='text-start flex justify-between  ' >
                <div className='flex gap-20 ethos-nova-regular font-light text-3xl'>
                    <p>Copy Right by Ethicalden</p>
                    <p>Privacy Policy</p>
                </div>
                <div className=' flex  gap-10 mb-[110px] mr-20'>
                    <Link><img className='w-[44.296px] h-[44.296px]' src={insta} alt="" /></Link>
                    <Link><img className='w-[44.286px] h-[44.286px]' src={fb} alt="" /></Link>
                    <Link><img className='w-[48.091px] h-[48.091px]' src={be} alt="" /></Link>
                    <Link><img className='w-[48.657px] h-[48.657px]' src={whatsapp} alt="" /></Link>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;