import styled from 'styled-components'
import {Header} from './components'
import { Routes, Route } from 'react-router-dom';

const Content = styled.div`
  padding: 120px 0;

`
const H2 = styled.h2`
  text-align: center;
`
const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
  background-color: #fff;
  margin: 0 auto;
  position: relative;
`

const Footer = ()=> <div>Подвал</div>

function Blog() {   
  return (
    <AppColumn>
    <Header/>
      <Content>
        <H2>Контент страницы</H2>
        <Routes>
          <Route path="/" element={<div>Главная страница</div>} />
          <Route path="/login" element={<div>Авторизация</div>} />
          <Route path="/register" element={<div>Регистрация</div>} />
          <Route path="/users" element={<div>Пользователи</div>} />
          <Route path="/post" element={<div>Новая Статья</div>} />
          <Route path="/post/:postId" element={<div>Статья</div>} />
          <Route path="*" element={<div>Ошибка</div>} />
        </Routes>
      </Content>
      <Footer/>
    </AppColumn>
  )
}

export default Blog
