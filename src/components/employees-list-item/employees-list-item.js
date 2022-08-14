import './employees-list-item.css';

const EmployeesListItem =(props) => {
    
        const {name, salary, onDelete, onToggleProp, increase, rise, onSalaryChange} = props;

        let classNames= "list-group-item d-flex justify-content-between";
        if(increase) {
            classNames+=' increase';
        }
        if(rise) {
            classNames+=' like';
        }

    return (
        <li className={classNames}>
            <span className="list-group-item-label" data-toggle="rise" onClick={onToggleProp}>{name}</span>
            <input type="text" className="list-group-item-input"
            value={salary}  onChange={(e)=> onSalaryChange(e, name)}
            onBlur={(e)=> onSalaryChange(e, name)}
            />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    data-toggle="increase"
                    onClick={onToggleProp}>
                    <i className="fas fa-cookie">add</i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"
                    onClick={onDelete}>del</i>
                </button>
                <i className="fas fa-star">star</i>
            </div>
        </li>
    )   
    }     


export default EmployeesListItem;