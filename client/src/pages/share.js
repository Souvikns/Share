import React from 'react'
import {useParams} from 'react-router-dom'
import Axios from 'axios'

const Id = () =>{
    let {id} = useParams()
    return <Share id={id}/>
}

class Share extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            code: "",
            language: ""
        }
    }

    componentDidMount(){
        Axios({
            method: "GET",
            url: "http://localhost:5000/api/share",
            data: {
                id: this.props.id
            }
        }).then(res=>{
            this.setState({
                code: res.data.code,
                language: res.data.language
            })
        }).catch(err=>{
            console.log(err)
        })
    }

    render(){
        
        return (
            <div>
                <h1>Share Page</h1>
                {this.props.id}
                {this.state.code}
                {this.state.language}
            </div>
        )
    }
}

export default Id