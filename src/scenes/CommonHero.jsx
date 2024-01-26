import parse from 'html-react-parser'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const CommonHero = ({ data: { title, text, img, video, anchor } }) => {
    return (
        <div className="container">
            <div className="relative lg:h-screen min-h-[500px] mt-[130px] pb-[50px] lg:pb-0 lg:mt-0">
                <div className="h-full flex items-center flex-col lg:flex-row">
                    <div className="lg:max-w-[55%] lg:pr-8">
                        <h1 className="hero-title">{title}</h1>
                        {text.map((p, i)=> (
                            <p key={i} className="my-[18px] hero-text">{parse(p)}</p>
                        ))}
                    </div>
                    <div className="flex-1">
                        <div className="relative flex justify-center items-center">
                            {img && <img src={img} alt={title} className="w-full" />}
                        </div>
                    </div>
                </div>
                <div className="absolute w-full flex justify-center bottom-[50px]">
                    <AnchorLink href={anchor} offset="50">
                        <div className="p-[10px] h-[42px] border-2 border-blue-50 rounded-[24px] cursor-pointer">
                            <div className="w-[3px] h-[9px] bg-blue-50 l-[10px] rounded-[25%] animate-scrolling-mouse"></div>
                        </div>
                    </AnchorLink>
                </div>
            </div>
        </div>
    )
}

export default CommonHero