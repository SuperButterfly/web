import './card.css'
import { useNavigate } from "react-router-dom";
import Categories from "../categories/index.js"
const Card = ({userName,urlImage,imgProfile,id,projectName,categories, description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."})=>{
    const navigate = useNavigate()
    return (
        <div className={'cardContainer'} onClick={()=>navigate(`/file/${id}`)}>
            {/*<img className='imgProgect' src={urlImage}></img>*/}
            <div className={'postalImg'} style={{backgroundImage:`url(${urlImage})`}}>
                {/*
                <svg viewBox="0 0 296 144" fill="none" >
                    <path d="M296 0.523438H0V143.523H12V126.523C12 119.344 17.8203 113.523 25 113.523H47C54.1797 113.523 60 119.344 60 126.523V143.523H296V0.523438Z" fill={`url(#${projectName})`}/>
                    <defs>
                        <pattern 
                            id={projectName} 
                            patternContentUnits="objectBoundingBox" 
                            width="1" 
                            height="1"
                        >
                            <use 
                                xlinkHref={`#image${projectName}`} 
                                transform="matrix(0.000390625 0 0 0.000808566 0 -0.0821678)"
                            />
                        </pattern>
                        <image 
                            id={`image${projectName}`} 
                            width="2560" 
                            height="1440"
                            overflow="hidden" 
                            xlinkHref={urlImage}
                        />
                    </defs>
                </svg>
                */}
            </div>
            <svg 
                width="50" 
                height="51" 
                viewBox="0 0 40 41" 
                fill="none"
                style={{
                    marginLeft: "8%",
                    marginTop: "-11%"
                }}     
            >
                <path d="M0 9.52344C0 4.55288 4.02944 0.523438 9 0.523438H31C35.9706 0.523438 40 4.55288 40 9.52344V31.4453C40 36.4159 35.9706 40.4453 31 40.4453H9C4.02944 40.4453 0 36.4159 0 31.4453V9.52344Z" fill={`url(#${id})`}/>
                <defs>
                    <pattern id={id} patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref={`#image${id}`} transform="matrix(0.0025076 0 0 0.00251251 -0.141946 -0.138313)"/>
                    </pattern>
                    <image id={`image${id}`} width="512" height="512" xlinkHref={imgProfile}/>
                </defs>
            </svg>
            <div className='guild'>
                <div className='textContainer'>
                    <div className='categoriesCardContainer'> 
                    {
                        categories.map(cat=><img className='categoriesCard' src={Categories[cat]} />)
                    }
                    </div>
                    <span className='projectName'>{projectName}</span>
                </div>
                <span className='descriptionComponent'>
                    {description}
                </span>
            </div>
        </div>
    )
}

export default Card