import Base from "../base.js";
import { updateUser } from "../../service/users.js"
export default class extends Base {
    render() {
        const template = ` <div id="infousers"><form class="layui-form" action="" lay-filter="update-form" style="width: 400px;">
        <div class="layui-form-item">
        <div class="layui-form-item">
            <label class="layui-form-label">ID</label>
            <div class="layui-input-block">
                <input type="text" style="width:300px" name="_id" required lay-verify="required" placeholder="请输入id" autocomplete="off"
                    class="layui-input" disabled="disabled">
            </div>
        </div>
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
                <button id="update-btn" class="layui-btn" lay-submit lay-filter="update-btn">立即修改</button>
            </div>
        </div>
    </form></div>`;
        this.index = layer.open({
            type: 1,
            content: template,
            area: ['500px', '300px'],
            anim: 2
        });
        // this.$el.html(template);
    }
    afterMount() {
       
    }
    handler() {
        const that = this;
        layui.form.on('submit(update-btn)', function (data) {
            (async function () {
                const user = data.field;
                const { isUpdate } = await updateUser(user, user._id);
                if (isUpdate) {
                    layui.layer.msg("修改成功");
                    layui.form.render();
                    layer.close(that.index);
                    location.hash = "/admins/infousers";
                }
            })();
            return false;
        });
    }
}