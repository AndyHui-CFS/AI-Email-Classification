import fetch from "node-fetch";

interface 
export class modelApiHandler{
    model: string;  //LLM model used
    modelAddress: string;  //The ip address + port of the local model

    constructor(model = "Meta-Llama-3-8B-Instruct", modelAddress = "http://172.27.16.1:5000"){
        this.model = model;
        this.modelAddress = modelAddress;
    }

    loadModel(): void
    {
        fetch(model)
    }

    unloadModel(): void {
        console.log("not implemted");
    }

    reloadModel(): void{
        console.log("not implemtned");
    }

    loadLoRA(): void{
        console.log("not implemtned");
    }

    unloadLoRA(): void{
        console.log("not implemented");
    }

    requestForEmailSummarization(): void
    {
        console.log("not implemented");
    }

    requestForEmailClassification(): void
    {
        console.log("not implemented");
    }
}
