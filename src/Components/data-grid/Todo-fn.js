import React, { useContext } from 'react';
import { useFetch } from '../../Hooks/use-fetch';
import { ThemeContext } from '../Helpers/Context';

const TODOS = 'https://jsonplaceholder.typicode.com/todos';

export function TodoFn() {
  // const [activeTab, setActiveTab] = useState('todos');
  const todos = useFetch(TODOS);

  const { theme, setTheme } = useContext(ThemeContext);

  const TableRow = (props) => {
    return (
      <tr>
        <th scope="row">{props.id}</th>
        <td>{props.title}</td>
        <td>{props.completed ? 'Tamamlandı' : 'Yapılacak'}</td>
      </tr>
    );
  };

  const renderBody = () => {
    return (
      <React.Fragment>
        {todos.data.slice(0, 20).map((item, index) => {
          return <TableRow key={index + 1} {...item} />;
        })}
      </React.Fragment>
    );
  };

  const renderTable = () => {
    return (
      <>
        <table
          className={
            theme === 'dark'
              ? 'table table-dark table-striped'
              : 'table table-striped'
          }
        >
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Başlık</th>
              <th scope="col">Durum</th>
            </tr>
          </thead>
          <tbody>{renderBody()}</tbody>
        </table>
      </>
    );
  };

  return (
    <div className="container">
      {todos.loading ? 'Loading...' : renderTable()}
    </div>
  );
}
