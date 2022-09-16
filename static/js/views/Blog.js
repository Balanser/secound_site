import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle = "Блог"
    }

    async getHtml() {
        return `
        <h1>Мой блог</h1>

        <ul>
        <li> <a href="/posts/1" data-link>Первый пост</a></li>
        <li> <a href="/posts/2" data-link>Второй пост</a></li>
    </ul>

    <p>
        <a href="/" data-link>На главную</a>
    </p>
        `
    }
}