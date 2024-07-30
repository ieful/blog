import React from "react";

function TfDemo() {

    return (
        <div>
            <div id="acc-cont"></div>
            <div style="text-align: center;margin-bottom: 20px;">
                <span>样本数据分布</span>
            </div>
            <div id="loss-cont"></div>
            <form name='iForm' onSubmit='formpredict(this.val.value,document.getElementById("res")); return false;')>
            输入数字: <input name='val'><input type=submit>
            <div>
                结果: <span id="res"></span>
            </div>
        </form>
        </div>
    )
}

export default TfDemo;