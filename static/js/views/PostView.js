import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Мой блог")
    }

    async fetchText () {
        let response = await fetch("/static/texts/"+ this.params.id + ".html");
        let data = await response.text();
        return data;
    }

    async getHtml() {
        // console.log(this.params.id)
        let text = await this.fetchText();
        text += "<p> Смотрите другие посты</p>"
        return text;
    }
}