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
        return `<text x="150" y="125" text-anchor="middle" dominant-baseline="middle" font-weight="bold" font-size="30" fill="${this.color}">${this.content}</text>`
    }

    renderForCircle() {
        return `<text x="150" y="100" text-anchor="middle" dominant-baseline="middle" font-weight="bold" font-size="30" fill="${this.color}">${this.content}</text>`;
    }
}

export default Text;