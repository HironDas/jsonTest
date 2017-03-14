class JsonTest{
    basicDom : Element;

    constructor(public textDivId: string, public validatorButtonId: string, public clearButtonId?: string){
        
        this.basicDom  = document.querySelector(this.textDivId);

        if(typeof this.validatorButtonId == "string"){
            this.eventTrigar(this.validatorButtonId, function(){});
        }
        if(typeof this.clearButtonId == "string"){
            this.eventTrigar(this.clearButtonId, function(){});
        }
    }

    eventTrigar(id:string, callback: ()=> void):void{
        var element = document.querySelector(id);
        element.addEventListener("click", callback);
    }
}