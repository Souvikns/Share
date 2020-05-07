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
    List,
    ListItem,
    ListItemText
} from '@material-ui/core'

const Editor = (props) => {

    return (
        <div>

            <Container>

                <List component="nav" aria-label="Device Settings">
                    <ListItem
                        button
                        aria-haspopup="true"
                        aria-controls="lock-menu"
                        aria-label="when device is locked"
                        onClick={props.menuClick}
                    >

                        <ListItemText>{props.options[props.menuIndex]}</ListItemText>

                    </ListItem>
                </List>

                <Menu
                id="lock-menu"
                keepMounted
                anchorEl={props.anchorEl}
                open={Boolean(props.anchorEl)}
                onClose={props.menuClose}
                >
                {props.options.map((option, index) => (
                        <MenuItem
                            key={option}
                            selected={index === props.menuIndex}
                            onClick={(event)=>{props.menuItemClick(event,index)}}
                        >{option}</MenuItem>
                    ))}
                </Menu>

                {/** EXPERIMENTING  */}
                <Button
                    aria-haspopup="true"
                    aria-controls="simple-menu"
                    onClick={props.menuClick}
                    variant="outlined"
                    color="primary"
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
                            onClick={props.menuItemClick}
                        >{option}</MenuItem>
                    ))}

                </Menu>


                <Container />
                <AceEditor
                    value={props.value}
                    onChange={props.change}
                    fontSize={16}
                    mode='python'
                    theme="monokai"
                    width="100%"
                />

            </Container>
        </div>
    )
}


class Index extends React.Component {

    constructor() {
        super()
        this.state = {
            code: "",
            anchorEl: null,
            selectedMenuIndex: 0,
            menuOptions: [
                'Javascript',
                'Java',
                'Python',
                'Kotlin',
                'Golang',
                'Rust',
                'Dart'
            ]
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
                    MenuItemClick={(event, index) => { this.menuItemClick(event, index) }}
                    menuIndex={this.state.selectedMenuIndex}
                />

            </div>
        )
    }
}

export default Index