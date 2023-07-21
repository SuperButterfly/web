import './card.css'
import { useNavigate } from "react-router-dom";
const Card = ({userName,urlImage,imgProfile,id,projectName, description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."})=>{
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
                {/*<img className='imgProfile' src={imgProfile}></img>*/}
                <div className='textContainer'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="17" 
                    viewBox="0 0 16 17"      
                    fill="none">
                    <g clip-path="url(#clip0_729_11002)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8.04618C16 8.83523 14.72 9.42451 14.48 10.1337C14.24 10.8428 14.92 12.1312 14.48 12.7205C14.04 13.3098 12.64 13.0701 12.02 13.5195C11.4 13.969 11.23 15.3573 10.48 15.607C9.73 15.8567 8.81 14.808 8.01 14.808C7.21 14.808 6.26 15.8068 5.54 15.607C4.82 15.4073 4.62 13.969 4 13.5195C3.38 13.0701 2 13.3398 1.54 12.7205C1.08 12.1013 1.77 10.8827 1.54 10.1337C1.31 9.38456 0 8.83523 0 8.04618C0 7.25714 1.28 6.66785 1.52 5.95871C1.76 5.24957 1.08 3.96114 1.52 3.37185C1.96 2.78256 3.37 3.02227 4 2.57282C4.63 2.12336 4.78 0.735046 5.53 0.455385C6.28 0.175724 7.2 1.28438 8 1.28438C8.8 1.28438 9.75 0.285591 10.47 0.485349C11.19 0.685107 11.38 2.12336 12 2.57282C12.62 3.02227 14 2.7526 14.46 3.37185C14.92 3.9911 14.23 5.20962 14.46 5.95871C14.69 6.70781 16 7.25714 16 8.04618Z" fill="#3BA55C"/>
                        <path d="M7.55127 11.7038L4.17627 9.15151L5.16892 7.79029L7.15421 9.32167L10.7674 4.52734L12.1174 5.52825L7.55127 11.7038Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_729_11002">
                        <rect width="16" height="16" fill="white" transform="translate(0 0.0234375)"/>
                        </clipPath>
                    </defs>
                    </svg>
                    <span className='projectName'>{projectName}</span>
                    {/*<span className='userName'>{userName}</span>*/}
                </div>
                <span className='description'>
                    {description}
                </span>
            </div>
        </div>
    )
}

export default Card