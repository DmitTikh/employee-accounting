import {Component} from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "John Smith", salary: '800$', increase: true, rise: true, id: 1 },
                {name: "Alex Brown" , salary: '1000$', increase: false, rise: false, id: 2 },
                {name: "Vick Green" , salary: '1200$', increase: false, rise: false, id: 3}
            ],
            term: '',
            filter: 'all'
        };
        this.maxId=3;
    }
    deleteItem = (id) => {
        this.setState(({data})=> {
            return {
                data: data.filter(item=> item.id !== id)
            }
            
        });
    };

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: ++this.maxId
        }
        this.setState(({data})=> {
            const newArr =[...data, newItem]
            return {
                data: newArr
            }
        });
    };

    onToggleProp= (id, prop) => {
        this.setState(({data})=> ({
            data: data.map(item=> {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                } 
                
                return item;
                
            })
        }));
        //     const index = data.findIndex(elem=> elem.id === id),
        //           old = data[index],
        //           newItem = {...old, increase: !old.increase},
        //           newArr = [...data.slice(0,index), newItem, ...data.slice(index+1)];
        //     return {
        //         data: newArr
        //     }
        // });
    };

    searchEmp = (items, term) => {
        if(term.length === 0) {
           
            return items;
        } 
        return items.filter(item => {
            return item.name.indexOf(term) > -1})
    };

    onUpdateSearch = (term) => {
        this.setState({term});
    };

    filterPost =(items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(i=> i.rise);
            case 'moreThen1000':
                return items.filter(i=> parseInt(i.salary) > 1000);
            default:
                return items;
            }

    };
    onFilterSelect = (filter) => {
        this.setState({filter});
    };


   onSalaryChange = (e, name) => {
        if(e.type === 'change') {
            this.setState(({data})=> ({
                data: data.map(item=> {
                    if(item.name === name) {
                        return {...item, salary: e.target.value}
                    }
                    return {...item}
                })
            })); 
        } else if (e.type === 'blur'){
            this.setState(({data})=> ({
                data: data.map(item=> {
                    if(item.name === name) {
                       item.salary = item.salary.replace(/[^0-9]/gi, '') + '$';
                       return {...item, salary: item.salary}
                    }
                    return {...item}
                })
            }))
        }

   };

    render() {
        
        let {data, term, filter} = this.state;
       
        let counter=this.state.data.filter(i=> i.increase).length,
            totalWorkers = this.state.data.length;
        const visibleData =this.filterPost(this.searchEmp(data, term), filter);
        
        return <div className="apps">
                <AppInfo totalWorkers={totalWorkers}  counter={counter}/>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp = {this.onToggleProp}
                    onSalaryChange = {this.onSalaryChange}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
    }
    
}

export default App;