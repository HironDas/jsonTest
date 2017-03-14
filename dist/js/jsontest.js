var JsonTest = (function () {
    function JsonTest(textDivId, validatorButtonId, clearButtonId) {
        this.textDivId = textDivId;
        this.validatorButtonId = validatorButtonId;
        this.clearButtonId = clearButtonId;
        this.basicDom = document.querySelector(this.textDivId);
        if (typeof this.validatorButtonId == "string") {
            this.eventTrigar(this.validatorButtonId, function () { });
        }
        if (typeof this.clearButtonId == "string") {
            this.eventTrigar(this.clearButtonId, function () { });
        }
    }
    JsonTest.prototype.eventTrigar = function (id, callback) {
        var element = document.querySelector(id);
        element.addEventListener("click", callback);
    };
    return JsonTest;
}());

//# sourceMappingURL=jsontest.js.map
