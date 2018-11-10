import React, {Component} from 'react';
import axios from 'axios';
export default class Login extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            status:false
        };
    }
    apiCall=()=>{
        axios.get('http://127.0.0.1:4300/')
                    .then( (response) => {
                        this.setState({data:response.data.data,status:true});
                        console.log(this.state.data);
                        
                    })
                    .catch(function (error) {
                        console.log(error);
                        });
    }
   
    render(){
        return(
            <div>
                <h3>hai</h3>
               <input type="button" onClick={this.apiCall} value="login"/>
              {this.state.status ? <div className="page-data">
         <div className="data-btn">
           <button >+ Add</button>
         </div>
         <div className="data-table">
            <table border="1" cellPadding="7" cellSpacing="7">
            <thead>
                <tr>
                    <th width="50px">No</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th width="120px">Action</th>
                </tr>
                </thead>
                <tbody>         
                {this.state.data.map( (val) => (
                    <tr>
                   <td key={val.id}>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.address}</td>
                    <td>{val.phone}</td>
                    <td>{val.email}</td>
                     
                    <td>
                        <a className="a-inside edit" href={"../customers/edit/"+val.id}>Edit</a>
                       
                        <a className="a-inside delete" href={"../customers/edit/"+val.id}>Delete</a>
                       
                    </td>
                    </tr>
                ))     }
                               
                </tbody>
            </table>
         </div>
        </div>:"Please Login !"} 
            </div>
           
        );
    }
}
