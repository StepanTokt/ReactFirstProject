import { Component } from 'react'
import './app-info.css'

class AppInfo extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const {value, usersWithCookies} = this.props
        return (
            <div className="app-info">
                <h1>Учет сотрудников</h1>
                <h2>Общее число сотрудников: {value - 1}</h2>
                <h2>Премию получат: {usersWithCookies}</h2>
            </div>
        )
    }
    
}

export default AppInfo