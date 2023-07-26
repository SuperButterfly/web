import style from './optionsColors.module.css'
import {BiText} from 'react-icons/bi'
const Options2Text=({index,handleOptions})=>{
    return <div className={style.options} >          
                <div onClick={()=>handleOptions('delete',index)} className={style.delete}>
                <h3>Delete</h3>
                </div>
                <p>Colors Text</p>
                <hr/>
                <div className={style.option}>
                    <BiText/>
                    <h3>rojo</h3>
                </div>
                <div className={style.option}>
                    <BiText/>
                    <h3>azul</h3>
                </div>
                <div className={style.option}>
                    <BiText/>
                    <h3>verde</h3>
                </div>
                <div className={style.option}>
                    <BiText/>
                    <h3>negro</h3>
                </div>
                <p>background</p>
                <hr/>
                <div className={style.option}>
                    <BiText/>
                    <h3>rojo</h3>
                </div>
                <div className={style.option}>
                    <BiText/>
                    <h3>azul</h3>
                </div>
                <div className={style.option}>
                    <BiText/>
                    <h3>negro</h3>
                </div>
        
              
    </div>
}
export default Options2Text;