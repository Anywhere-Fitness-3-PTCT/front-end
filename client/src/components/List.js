import { useEffect, useState } from "react"
import axiosWithAuth from "../axiosWithAuth";
import ListComp from "./ListComp";


const List = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('https://anywherefitness-api.herokuapp.com/api/classes')
        .then((res) => {
           setList(res.data);
        })
        .catch((err) => console.log(err));
      }, [])
    
    
    return(
        <div>
        {
            list.map(list => {
               return <ListComp list={list}/>
            })
        }
        </div>

    );
}

export default List;