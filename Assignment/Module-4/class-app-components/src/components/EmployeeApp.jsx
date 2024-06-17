import React,{Component} from 'react'
const emp="Dhruvam Bhalodiya";
const cmpname="study at tops technology";
class Employee extends Component
{
    render()
    {
        return (

            <>
            <h1>Hi i am {emp}</h1>

            </>
      
        )
       
    }
}

class Company extends Employee
{
    render()
    {
        return (

          
            <>
              <Employee />
             <h2>Company name is {cmpname}</h2>   
            </>
      
        )
       
    }
}


export default Company

// Class Component Life Cycle
// Class components in React have a well-defined life cycle that can be categorized into three main phases:

// Mounting (when an instance of a component is being created and inserted into the DOM)
// Updating (when the component is being re-rendered as a result of changes to either its props or state)
// Unmounting (when a component is being removed from the DOM)