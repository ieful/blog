import React from "react";

function TfDemo() {
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const result = document.getElementById('res');

        if (typeof window !== 'undefined' && typeof window.formpredict === 'function') {
            window.formpredict(form.val.value, result);
        }
    }

    return (
        <div>
            <div id="acc-cont"></div>
            <div style={{textAlign: 'center', marginBottom: '20px'}}>
                <span>样本数据分布</span>
            </div>
            <div id="loss-cont"></div>
            <form name="iForm" onSubmit={handleSubmit}>
                输入数字: <input name="val" />
                <input type="submit" />
                <div>
                    结果: <span id="res"></span>
                </div>
            </form>
        </div>
    )
}

export default TfDemo;
