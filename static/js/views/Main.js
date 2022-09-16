import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle = "Главная"
    }

    async getHtml() {
        return `
        <h1>Добро пожаловать на главную страницу сайта!</h1>

    <p>Всем привет! Меня зовут Дима Ведерников. Рад приветсвовать вас на моём сайте. Здесь вы можете познакомится со мной и узнать меня чуть больше<hr> Расскажу немного о себе:</p>
        
    <ul>
        <li>Мне нравится изучать иностранные языки </li>
        <li>Учу разные языки программирования java, javascript, python</li>
        <li>Люблю поиграть и не против просто поболтать</li>
        <li>Хожу на баскетбол</li>
    </ul>

    <br>
    <img src="static/img/J6ZI0J-_Zg0.jpg" class="my-photo">
    <p>
        <a href="/posts" data-link>Перейти к блогу</a>
    </p>
        `
    }
}