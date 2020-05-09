import React from 'react'
import {useParams} from 'react-router-dom'
import Axios from 'axios'
import AceEditor from 'react-ace';
import 'brace/theme/monokai'
import 'brace/mode/javascript'
import 'brace/mode/python'
import 'brace/mode/kotlin'
import 'brace/mode/java'
import 'brace/mode/dart'
import 'brace/mode/golang'

const Id = () =>{
    let {id} = useParams()
    return <Share id={id}/>
}

class Share extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            code: "",
            language: "",
            id: this.props.id
        }
    }
    
    componentDidMount(){
        let id = this.props.id
        Axios({
            method: "GET",
            url: (process.env.NODE_ENV === 'development'?`http://localhost:5000/api/share/${id}`:`https://share-c.herokuapp.com/api/share/${id}` )
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
                <AceEditor  
                value={this.state.code}
                mode={this.state.language}
                theme="monokai"
                fontSize={16}
                enableLiveAutocompletion={true}
                />
            </div>
        )
    }
}

export default Id