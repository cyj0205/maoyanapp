import Base from "../base.js";
import { addtheater,getcinemas } from "../../service/theaters.js";

import getFileURL from "../../util/getFileURL.js";

export default class extends Base {
    render() {
        const template = `<form class="layui-form" action="" lay-filter="add-form">

        <div class="layui-form-item">
            <label class="layui-form-label"  style="width: 90px ">放映厅名字</label>
            <div class="layui-input-block" >
                <input type="text" style="width: 300px" name="name" required lay-verify="required" placeholder="请输入名称" autocomplete="off"
                    class="layui-input">
            </div>
        </div>
       


        <div class="layui-form-item">
        <label class="layui-form-label">所属影院</label>
        <div class="layui-input-block" style="width: 300px;">
            <select name="cinemasId" required lay-verify="required" placeholder="请选择影院" autocomplete="off">

            </select>
        </div>
    </div>

    <div class="layui-form-item">
    <label class="layui-form-label">是否营业</label>
    <div class="layui-input-block">
        <input type="radio" name="status" value="true" title="营业中" checked>
        <input type="radio" name="status" value="false" title="未营业" >
    </div>
</div>

<div class="layui-form-item">
<div class="layui-input-block">
    <button class="layui-btn" lay-submit lay-filter="add-btn">提交</button>
</div>
</div>
      </form>`;
        this.$el.html(template);
    }
    afterMount() {
        const that = this;
        layui.form.render();
    
        (async function () {//获取影院名字  从主服务器里面获取cinemasId里面的所有不同名字 生成下拉列表
            const data = await getcinemas();
            console.log("获取影院数据库下拉框", data);

            const template = data.rows.map(cl => `<option value="${cl._id}">${cl.name}</option>`).join();
            $("select[name='cinemasId']").html(template);
            layui.form.render();
        }());

    }
    handler() {
        const that = this;
        layui.form.on('submit(add-btn)', function (data) {
            (async function () {
                const newTheaters = data.field;//获取更新表单中的学生数据

                const { name } = await addtheater(newTheaters);
                // console.log(newTheaters,"new");
                console.log(name,"is");
                
                if (name) {
                    layui.layer.msg("添加成功！");
                    location.hash = "/admins/theaters";
                }
            })();
            return false;
        });
    }
}