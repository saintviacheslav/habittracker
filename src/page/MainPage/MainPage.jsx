import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { add_new,change_checkbox } from '../../slice/HabitSlice';
function MainPage() {
    const array = useSelector((state) => state.habits)
    console.log(array)
    const [inp, setInp] = useState('')
    const dispatch = useDispatch()
    const [progress,setProgress] = useState([])
    useEffect(()=>{
        const arr =[]
        for(let i =0;i<array.length;i++){
            const result = array[i].days.reduce((sum,el)=>el.status?sum+=1:sum+=0,0)
            arr.push({title:array[i].title,length:result})
        }
        setProgress(arr)
    },[array])
    return (
        <>
            <input onChange={(e) => {
                setInp(e.target.value)
            }}></input>
            <button onClick={() =>
                dispatch(add_new(inp))
            }>Добавить привычку</button>
            {array.map((el,index) => <div key={index}>
                <h2>{el.title}</h2>
                <div>{el.days.map((element,key) => <input key={key} onChange={()=>dispatch(change_checkbox({status:element.status,day:element.day,id:el.id}))} checked={element.status} type='checkbox'></input>)}</div>
            </div>)}
            {progress.map((el,index) => <div key ={index}>
                <h2>{el.title}: {el.length}</h2>
                
            </div>)}

        </>
    );
}
export default MainPage