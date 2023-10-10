import { Component } from 'react'
import './app-filter.css'

class AppFilter extends Component {
    constructor(props){
        super(props)
        this.state = {
            filt: 'all'
        }
    }

    onUpdateFilt = (e) => {
        const filt = e.currentTarget.getAttribute('data-filter')
        this.setState({
            filt: filt
        })
        this.props.onUpdateFilt(filt)
        
    }

 

    render(){
        const buttonClassActive = 'btn btn-light', buttonClassNotActive = 'btn btn-outline-light'
        const {filt} = this.state
        
        return (
            <div className="btn-group">
                <button className={filt==='all' ?  buttonClassActive : buttonClassNotActive}
                        type="button"
                        data-filter="all"
                        onClick={this.onUpdateFilt}
                        >
                    Все сотрудники
                </button>
                <button className={filt==='toUp' ?  buttonClassActive : buttonClassNotActive}
                        type="button"
                        data-filter="toUp"
                        onClick={this.onUpdateFilt}>
                    На повышение
                </button>
                <button className={filt==='moreThan' ?  buttonClassActive : buttonClassNotActive}
                        type="button"
                        data-filter="moreThan"
                        onClick={this.onUpdateFilt}>
                    ЗП больше 1000$
                </button>
            </div>
        )
    }
    
}

export default AppFilter