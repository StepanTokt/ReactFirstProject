import './employers-add-form.css'
import { Component } from 'react'

class EmployersAddForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            salary: '',
            incorrectData: false
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            incorrectData: false
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        if(this.state.name.replace(/\d/g, '').length > 3 && this.state.salary.length !== 0 && this.state.salary > 100){
            this.props.onAdd(this.state.name.replace(/\d/g, ''), this.state.salary)
            this.setState({
                name: '',
                salary: ''
            })
        }else{
            this.setState({
                incorrectData: true
            })
        }   
    }

    render(){
        const {name,salary, incorrectData} = this.state
        
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name='name'
                        value={name} 
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name='salary'
                        value={salary} 
                        onChange={this.onValueChange}/>
                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={this.onSubmit}
                            >Добавить
                    </button>
                </form>
                {incorrectData ? (
                    <p className="text-danger mt-2">Пожалуйста, введите корректные данные.</p>
                ) : null}
            </div>
        )
    }    
}

export default EmployersAddForm