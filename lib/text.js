class Text {
    constructor(content, color){
        this.content = content;
        this.color = color;
    }

    setContent(content){
        this.content = content;
    }

    setColor(color){
        this.color = color; 
    }

    render() {
        return `<text x="50" y="60" fill="${this.color}">${this.content}</text>`
    }
}

export default Text;