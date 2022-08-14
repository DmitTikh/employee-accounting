import './app-info.css';

const AppInfo = ({totalWorkers, counter}) => {
    return <div className = 'app-info'>
                <h1>Учет сотрудников в компании N</h1>
                <h2>Общее число сотрудников: {totalWorkers}</h2>
                <h2>Премию получат: {counter}</h2>
           </div>
};

export default AppInfo;