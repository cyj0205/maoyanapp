import Base from "../base.js";
import { addUser } from "../../service/users.js"
export default class extends Base {
    render() {
        const template = `<div id="infousers"><form class="layui-form" action="" lay-filter="add-form" style="width: 400px;">
        <div class="layui-form-item">
        <div class="layui-form-item">
            <label class="layui-form-label">账户</label>
            <div class="layui-input-block">
                <input type="text" style="width:300px" name="userName" required lay-verify="required" placeholder="请输入账户" autocomplete="off"
                    class="layui-input">
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">密码</label>
            <div class="layui-input-block">
                <input type="text" style="width:300px" name="userPassword" required lay-verify="required" placeholder="请输入密码" autocomplete="off"
                    class="layui-input">
            </div>
        </div>
        <div class="layui-form-item">
            <div class="layui-input-block">
                <button class="layui-btn" lay-submit lay-filter="add-btn">即刻添加</button>
            </div>
        </div>
    </form></div>`;
    this. index = layer.open({
        type: 1,
        content: template,
        area: ['500px', '200px'],
        anim: 2
    });
        // this.$el.html(template);
    }
    afterMount() {
        layui.form.render();
    }
    handler() {
        const that = this;
        layui.form.on('submit(add-btn)', function (data) {
            (async function () {
                const user = data.field;
                const { isAdd } = await addUser(user);
                if (isAdd) {
                    layer.msg("添加成功！");
                    layer.close(that.index);
                    location.hash = "/users/infousers";
                }
            })();
            return false;
        });
    }
}