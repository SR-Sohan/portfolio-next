import { breadData } from "./helper/uiData";

export default function BreadCrumps(){
    return <div>
{
    breadData.map((item)=>(
        <p key={item.id}>
            {item.label}
        </p>
    ))
}
    </div>
}