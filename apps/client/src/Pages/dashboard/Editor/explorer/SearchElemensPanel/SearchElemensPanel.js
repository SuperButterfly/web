import './searchElemensPanel.css'
const SearchElemensPanel = ({isExpand,value})=>{
    return <div className='panelContainer' style={{display:isExpand?"flex":"none"}}>
        {
            value && <span>Loading...</span>
        }
    </div>
}

export default SearchElemensPanel