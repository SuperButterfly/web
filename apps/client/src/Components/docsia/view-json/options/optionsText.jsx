
import style from './options.module.css'

const OptionsText=({open,handleOptions})=>{
    return <div className={style.options} >
         <p>Headings</p>
            <hr/>
            <div >
                <div className={style.element} onClick={()=>handleOptions('h','1')} >
                <div className={style.cube}>
                    <h3>H1</h3>
                    </div>
                <h3>H1</h3>
                 
                </div>
                <div className={style.element} onClick={()=>handleOptions('h','2')} >
                    <div className={style.cube}>
                        <h3>H2</h3>
                        </div>
                    <h3>H2</h3>
                 
                </div>
                <div className={style.element} onClick={()=>handleOptions('h','3')} >
                    <div className={style.cube}>
                        <h3>H3</h3>
                        </div>
                    <h3>H3</h3>
                </div>
            </div>
            <hr/>
            <p>Basic bocks</p>
            <div >
                <div className={style.element}>
                <div className={style.cube}>
                    <h3>H1</h3>
                    </div>
                <h3>H1</h3>
                 
                </div>
                <div className={style.element}>
                <div className={style.cube}>
                    <h3>H2</h3>
                    </div>
                <h3>H2</h3>
                 
                </div>
                <div className={style.element}>
                <div className={style.cube}>
                    <h3>H3</h3>
                    </div>
                <h3>H3</h3>
                </div>

            </div>
            
    </div>
}
export default OptionsText;