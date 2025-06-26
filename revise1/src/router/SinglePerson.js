import { useParams } from "react-router";
import {person} from './personsData'

export default function SinglePerson(){
    const {name} = useParams();
    const personData = person.find(function(item){
        return item.title === name;
    })
    return (
        <div>
            <p>This is for: {name}</p>
            <p>The age for this user is: {personData.age}</p>
        </div>
    )
}