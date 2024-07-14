import Footer from '../../shared/ui/footer';
import Header from '../../shared/ui/header';
import Main from '../../shared/ui/main';

const HomePage = () => {
  return (
    <>
      <Header />
      <Main>
        <table>
          <tr>
            <th>
              <input type='checkbox'></input>
            </th>
            <th>Название компании</th>
            <th>Кол-во сотрудников</th>
            <th>Адрес</th>
          </tr>
          <tr>
            <td>
              <input type='checkbox'></input>
            </td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>
              <input type='checkbox'></input>
            </td>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </table>
      </Main>
      <Footer />
    </>
  );
};

export default HomePage;
