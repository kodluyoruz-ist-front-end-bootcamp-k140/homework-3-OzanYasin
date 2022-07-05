import React from 'react';
import { useFetch } from '../../Hooks/use-fetch';

function TableRow(props) {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.title}</td>
      <td>{props.completed ? 'Tamamlandı' : 'Yapılacak'}</td>
    </tr>
  );
}

const TODOS = 'https://jsonplaceholder.typicode.com/todos';

// Todos Componenti
// class-fn component

// Posts Componenti
// class-fn component

export function TodoFn() {
  // const [activeTab, setActiveTab] = useState('todos');
  const todos = useFetch(TODOS);

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
        <table className="table">
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

  // const renderActiveTab = () => {
  //   if (activeTab === 'todos') {
  //     return renderTable();
  //   }
  //   return renderPosts();
  // };

  return (
    <div className="container">
      {todos.loading ? 'Loading...' : renderTable()}
    </div>
  );
}
