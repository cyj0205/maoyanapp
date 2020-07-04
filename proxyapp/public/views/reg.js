import Base from "./base.js"
import { reg } from "../service/users.js";
let isExcute = false;
export default class extends Base {
    render() {
        const template =
            `<div class="reg-form"  style="display: flex;
            margin-top: 200px;
            justify-content: center;
            align-items: center;">
            <div class="layui-card">
                <div class="layui-card-header" style="text-align: center;">
                    <h2>猫眼管理员注册</h2>
                </div>
                <div class="layui-card-body">
                    <form class="layui-form" action="" lay-filter="reg-form">
                        <div class="layui-form-item">
                            <label class="layui-form-label">账户</label>
                            <div style="width: 180px;position: relative;" class="layui-input-block">
                                <input type="text" name="userName" required lay-verify="userName" placeholder="账户"
                                    autocomplete="off" class="layui-input" value="">
                                <i data-status="hide" class="layui-icon layui-icon-userName"
                                    style="font-size: 20px; color: #000;position: absolute;right: 7px;top: 8px;"></i>
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">密码</label>
                            <div style="width: 180px;position: relative;" class="layui-input-inline">
                                <input type="userPassword" name="userPassword" required lay-verify="Pass" placeholder="密码"
                                    autocomplete="off" class="layui-input" value="">
                                <i data-status="hide" class="layui-icon layui-icon-userPassword"
                                    style="font-size: 20px; color: #000;position: absolute;right: 7px;top: 8px;cursor: pointer;"></i>
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <div style="width: 180px;margin-left: 70px;" class="layui-input-inline">
                                <input type="checkbox" name="protocol" lay-verify="confirmPro" lay-skin="primary"
                                    title="协议" checked>
                                <button class="layui-btn" lay-submit lay-filter="reg-btn">立即注册</button>
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <a style="float: right;font-size: 14px;" href="#/login">已有账号？赶快去登录</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
            `;
        this.$el.html(template);
    }
    afterMount(){
        layui.form.verify({
            userName: [
                /^[a-zA-Z]{2,10}$/,
                "用户名必须是2-10位的字母！"
            ]
            , Pass: [
                /^[\S]{3,12}$/
                , '密码必须3到12位，且不能出现空格'
            ],
        });
        layui.form.render();
    }
    handler() {
        const that = this;
        layui.form.on('submit(reg-btn)', function (data) {
            const {userName, userPassword} = data.field;
            (async function(){
                const {isReg} = await reg({userName,userPassword});
                if (isReg) {
                    layui.layer.msg('注册成功！');
                    localStorage.setItem("user_token", 6);
                } else {
                    layui.layer.msg('再注册一次！');
                }
            })();
            return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
        });
        if(isExcute){
            return;
        }
        isExcute = true;
        $(document).on("click",".layui-icon-userPassword", function () {
            //#1E9FFF
            
            if (this.dataset.status === "hide") {
                this.dataset.status = "show";
                this.style.color = "#000";
                $("input[Name='userPassword']").attr("type", "userPassword");
            } else if (this.dataset.status === "show") {
                this.dataset.status = "hide";
                this.style.color = "#1E9FFF";
                $("input[Name='adminPassword']").attr("type", "text");
            }
        })
    }
}