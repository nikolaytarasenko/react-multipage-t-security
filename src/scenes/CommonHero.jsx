import parse from 'html-react-parser'

const CommonHero = ({ data: { title, text, img, video } }) => {
    return (
        <div className="container">
            <div className="lg:h-screen min-h-[500px] mt-[130px] pb-[50px] lg:pb-0 lg:mt-0">
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
            </div>
        </div>
    )
}

export default CommonHero