import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import './app.css'
import EmployersList from '../employers-list/employers-list'
import EmployersAddForm from '../employers-add-form/employers-add-form'
import { Component } from 'react'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : [
                {name: 'Tokt S.', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Tokt K.', salary: 5000, increase: true, rise: false, id: 2},
                {name: 'Maksimchik K.', salary: 3000, increase: false, rise: false, id: 3}
            ],
            term: '',
            filt: 'all'
        }
        this.maxId = 4
    }
    
    deleteItem = (id) => {
        this.setState( ({data}) => {
            return{
                data: data.filter(item => item.id !== id)
            }
        })
        this.maxId--;
    }

    addItem = (name, salary) => {
        const newItem = {
            name: name,
            salary: salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState( ({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState( ({data}) => ({
            data: data.map(item => {
              if(item.id === id) {
                  return {...item, [prop]: !item[prop]}
              }
              return item
            }) 
          }))
    }

    searchEmp = (items, term) => {
        if(term.length === 0) return items
        return items.filter(item => item.name.indexOf(term) > -1)
    }

    onUpdateSearch = (term) => {
        this.setState({
            term: term
        })
    }

    onUpdateFilt = (filt) => {
        this.setState({
            filt: filt
        })
    }

    filterEmp = (items, filt) => {
        if(filt === 'all') return items
        else if(filt === 'toUp'){
            return items.filter(item => item.rise)
        }
        else if(filt === 'moreThan'){
            return items.filter(item => item.salary >= 1000)
        }
    }

    
    render(){
        const {data, term, filt} = this.state
        const usersWithCookies = data.filter(item => item.increase)
        const visibleData = this.searchEmp(data, term)
        const filteredData = this.filterEmp(visibleData, filt)
        return (
            <div className="app">
                <AppInfo value={this.maxId} 
                usersWithCookies={usersWithCookies.length}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter onUpdateFilt={this.onUpdateFilt}/>
                </div>
    
                <EmployersList 
                data={filteredData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}/>
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        )
    }  
}

export default App