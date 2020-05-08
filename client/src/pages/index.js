import React from 'react'
import AceEditor from 'react-ace';
import 'brace/theme/monokai'
import 'brace/mode/javascript'
import 'brace/mode/python'
import 'brace/mode/kotlin'
import 'brace/mode/java'
import 'brace/mode/dart'
import 'brace/mode/golang'


// Styling imports 
import {
    Container,
    Menu,
    MenuItem,
    Button,
    Grid
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import Axios from 'axios'

const useStyles = makeStyles(theme => ({
    root: {

    },
    menubtn: {
        margin: '1.2rem 0px'
    },
    editor: {
        marginBottom: '1.2rem'
    },
    link: {
        marginBottom: '1.2rem'
    }
}))

const Editor = (props) => {
    const classes = useStyles()
    let code = props.value
    return (
        <div>

            <Container>

                <Grid container>

                    <Grid item xs={12} sm={6}>

                        <Button
                            aria-haspopup="true"
                            aria-controls="simple-menu"
                            onClick={props.menuClick}
                            variant="outlined"
                            color="primary"
                            className={classes.menubtn}
                        >
                            {props.options[props.menuIndex]}
                        </Button>
                        <Menu
                            id="simple-menu"
                            keepMounted
                            anchorEl={props.anchorEl}
                            open={Boolean(props.anchorEl)}
                            onClose={props.menuClose}
                        >

                            {props.options.map((option, index) => (
                                <MenuItem
                                    key={option}
                                    selected={index === props.menuIndex}
                                    onClick={(event) => { props.menuItemClick(event, index) }}
                                >{option}</MenuItem>
                            ))}

                        </Menu>
                    </Grid>

                    <Grid item xs={12} sm={6}>

                        <Button 
                        className={classes.menubtn} 
                        variant="outlined" 
                        color="primary"
                        onClick={(code)=>{props.shareHandle(code)}}
                        >
                            Share
                        </Button>

                    </Grid>

                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <Container className={classes.link}>
                        <a target="blank"  href={props.shareLink}>{props.shareLink}</a>
                        </Container>
                    </Grid>
                </Grid>




                <Container />
                <AceEditor
                    value={props.value}
                    onChange={props.change}
                    fontSize={16}
                    mode={`${props.options[props.menuIndex]}`}
                    theme="monokai"
                    width="100%"
                    className={classes.editor}
                />

            </Container>
        </div>
    )
}


class Index extends React.Component {

    constructor() {
        super()
        this.state = {
            code:  "",
            anchorEl: null,
            selectedMenuIndex: 0,
            menuOptions: [
                'javascript',
                'java',
                'python',
                'kotlin',
                'golang',
                'rust',
                'dart'
            ],
            shareLink: ""
        }
    }

    editorHandler(newValue) {
        this.setState({
            code: newValue
        })
        console.log('value', this.state.code)
    }

    menuClick = event => {
        this.setState({
            anchorEl: event.currentTarget
        })
    }

    menuClose = () => {
        this.setState({
            anchorEl: null
        })
    }

    menuItemClick = (event, index) => {
        this.setState({
            anchorEl: null,
            selectedMenuIndex: index
        })
        console.log(this.state.selectedMenuIndex)
    }

    sharebtn(code){
        console.log(this.state.code)
        console.log(this.state.selectedMenuIndex)
        Axios({
            method: "POST",
            url: "http://localhost:5000/api/share",
            data: {
                code: this.state.code,
                language: this.state.menuOptions[this.state.selectedMenuIndex]
            }
        }).then(res=>{
            this.setState({
                shareLink: res.data.url
            })
        }).catch(err=>{
            console.log(err)
        })
    }

    render() {

        return (
            <div>
                <Container>
                    <h1>Write and Share your Code </h1>
                </Container>
                <Editor
                    value={this.state.code}
                    change={(val) => { this.editorHandler(val) }}
                    menuClick={(event) => { this.menuClick(event) }}
                    menuClose={() => { this.menuClose() }}
                    anchorEl={this.state.anchorEl}
                    options={this.state.menuOptions}
                    menuItemClick={(event, index) => { this.menuItemClick(event, index) }}
                    menuIndex={this.state.selectedMenuIndex}
                    shareLink = {this.state.shareLink}
                    shareHandle = {()=>{this.sharebtn()}}
                />

            </div>
        )
    }
}

export default Index