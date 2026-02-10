import Container from '../Container'
import Commonh4 from '../Commonh4.jsx'
import { BiSolidChevronsRight } from 'react-icons/bi'
import Commonh3 from '../Commonh3.jsx'
import { forCategory } from '../../data/forCategory.js'
import Images from '../Images.jsx'

const OurCategories = () => {
    return (
        <>
        <section className='ourCategory'>
            <div className="bg-[url('/src/assets/categoryBg.png')] bg-center bg-cover bg-no-repeat py-30">
                <Container className={'w-[395px] lg:w-330'}>
                    {/* common text part */}
                    <div className="text-center pb-20">
                        <div className='gap-x-[15px] items-center flex justify-center'>
                            <Commonh4 commonh4={'Our Categories'} className={'text-white '}/>
                            <div className="flex items-center text-white text-[20px]">
                                <BiSolidChevronsRight/>
                                <BiSolidChevronsRight className='-ml-2'/>
                            </div>
                        </div>
                        <Commonh3 commonh3={"Favorite Topics To Learn"} className={'text-white'}/>
                    </div>
                    {/* common text part */}
                </Container>
            </div>
        </section>
        </>
    )
}

export default OurCategories