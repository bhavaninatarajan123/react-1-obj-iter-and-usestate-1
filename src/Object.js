import {Component} from "react"

class Object extends Component{
    render(){
        const {data}=this.props
        const listData=data.map((e,i)=>{
            return(
            <ul key={i}>
            <li> Name : {e.name}</li>
            <li> skill-Name : {e.skills[0].name} , skill-Type : {e.skills[0].type}</li>
            <li> skill-Name : {e.skills[1].name} , skill-Type : {e.skills[1].type}</li>
             
             
        </ul>  
        )
        })
       
    


    return (
         <div className="col">
            
        
                {listData} 
        </div>
                   
    )
    }
}
 
 export default Object ;
