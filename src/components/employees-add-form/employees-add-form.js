import {Component} from 'react';
import './employess-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        };
    }
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        
    };
    addNewWorker = (e) => {
        e.preventDefault();
        if(this.state.name.length >=3  && this.state.salary >= 3) {
            this.props.onAdd(this.state.name, this.state.salary);
        } 
        this.setState({
            name: '',
            salary: ''
        });
    };
    render() {
        let {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.addNewWorker}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name="name"
                        value ={name}
                        onChange={this.onValueChange}
                        minLength='3'
                        required/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}
                        minLength='3'
                        required/>
    
                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
};

export default EmployeesAddForm;