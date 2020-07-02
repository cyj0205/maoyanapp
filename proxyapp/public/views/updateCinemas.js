import Base from "./base.js"; //类继承
import { updateCinemas } from "../service/cinemas.js";

export default class extends Base {
    render() {
        const template =
            `
            <div class="updateCinemas-form">
                <div class="layui-card">
            <div class="layui-card-header" style="text-align: center;">
                <h2>修改影院信息</h2>
            </div>
            <div class="layui-card-body" style="display:flex;justify-content: center;">
                <form class="layui-form" action="" lay-filter="updateCinemas-form" >
                <div class="layui-form-item">
                    <label class="layui-form-label">ID</label>
                    <div class="layui-input-block" style="width: 200px;">
                    <input readonly type="text" name="_id" required lay-verify="required" placeholder="请输入ID" autocomplete="off"
                        class="layui-input">
                    </div>
                </div>

                    <div class="layui-form-item" >
                        <label class="layui-form-label">影院名称</label>
                        <div style="width: 180px;position: relative;" class="layui-input-block">
                            <input type="text" name="name" required lay-verify="name" placeholder=""
                                autocomplete="off" class="layui-input">
                            <i data-status="hide" class="layui-icon layui-icon-name"
                                style="font-size: 20px; color: #000;position: absolute;right: 7px;top: 8px;"></i>
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label class="layui-form-label">影院地址</label>
                        <div style="width: 180px;position: relative;" class="layui-input-inline">
                            <input type="text" name="address" required lay-verify="pass" placeholder=""
                                autocomplete="off" class="layui-input" >
                            <i data-status="hide" class="layui-icon layui-icon-address"
                                style="font-size: 20px; color: #000;position: absolute;right: 7px;top: 8px;cursor: pointer;"></i>
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label class="layui-form-label">影院电话</label>
                        <div style="width: 180px;position: relative;" class="layui-input-inline">
                            <input type="text" name="phone" required lay-verify="phone"  placeholder=""
                                autocomplete="off" class="layui-input" >
                            
                        </div>
                    </div>


                    <div class="layui-form-item" pane>
                        <label class="layui-form-label">是否营业</label>
                        <div class="layui-input-block">
                        <input type="radio" name="status" value="营业中" title="营业中" checked>
                        <input type="radio" name="status" value="未营业" title="未营业">
                        </div>
                    </div>

                    <div class="layui-form-item">
                        <div class="layui-input-block">
                        <button id="update-btn" class="layui-btn" lay-submit lay-filter="update-btn">立即修改</button>
                            <a href="#/admins/cinemas" class="layui-btn">返回</a>
                        </div>
                    </div>


                    
                </form>
            </div>
        </div>

    </div>`;
        this.$el.html(template);
    }
    afterMount() {
        layui.form.verify({
            phone: [//密码匹配
                /^[1][3,7,8,9][0-9]{9}$/,
                '请输入正确的手机号'
            ]
        });
        layui.form.render();

    }
    handler() {

        const that = this;

        layui.form.on('submit(update-btn)', function (data) {
            
            (async function (){
                const cinemas = data.field;//获取更新表单中得学生数据
                // console.log(cinemas);
                
                const { isUpdate } = await updateCinemas(cinemas._id,cinemas);
                // console.log(isUpdate);
                
                if (isUpdate) {
                    layui.layer.msg("修改成功！");
                    location.hash = "/admins/cinemas";
                  }
                  
            })();

            return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
        });
    }

}