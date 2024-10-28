import A from "../components/A";

const index = () => {
  return (
    <div>
        <div>
            <A href= {'/'} text = 'Главная'/>
            <A href= {'/users'} text = 'Пользователи'/>
        </div>
        <h1>Главная страница</h1>
    </div>
  )
}

export default index;
