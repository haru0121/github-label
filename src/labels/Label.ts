class Label {
    name: string;
    color?: string;
    description?: string;
    constructor(name:string, color?:string, description?:string) {
        this.name = name;
        this.color = color;
        this.description = description;
    }    
}
export default Label;