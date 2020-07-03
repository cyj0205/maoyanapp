import Base from "./base.js"
import { login } from "../service/users.js";
let isExcute = false;
export default class extends Base {
    render() {
        const template =`
            <div class="login-form" style="display: flex;
            margin-top: 200px;
            justify-content: center;
            align-items: center;">
            <div class="layui-card">
                <div class="layui-card-header" style="text-align: center;">
                    <h2>猫眼管理员登录</h2>
                </div>
                <div class="layui-card-body">
                    <form class="layui-form" action="" lay-filter="login-form">
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
                                <input type="checkbox"name="protocol" lay-verify="confirmPro" lay-skin="primary" title="协议"
                                    checked>
                                <button class="layui-btn" lay-submit lay-filter="login-btn">立即登录</button>
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <a style="float: right;font-size: 14px;" href="#/reg">还没有账号？赶快去注册</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>`;
        this.$el.html(template);
    }
    afterMount() {
        layui.form.verify({
            userName: [
                /^[a-zA-Z]{2,10}$/,
                "用户名必须是2-10位的字母！"
            ],
            confirmPro(value, item) {
                if (!item.checked) {
                    return "必须同意协议！"
                }
            }
            //我们既支持上述函数式的方式，也支持下述数组的形式
            //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
            , userPassword: [
                /^[\S]{3,12}$/
                , '密码必须6到12位，且不能出现空格'
            ],
            validCode: function (value) {
                if (!new RegExp(validCode.join("").toLowerCase()).test(value.toLowerCase())) {
                    return "你的验证码不正确！"
                }
            }
        });
        layui.form.render();
        //=============================================
        var validCode = [];
        $("svg").click(function () {
            genValidCode();
        });
        function genValidCode() {
            validCode.length = 0;
            const color = () => Mock.Random.color();
            const random = (s, e) => {
                if (e) {
                    return Mock.Random.integer(s, e);
                } else {
                    return Mock.Random.integer(0, s);
                }
            }
        }
        genValidCode();

    }
    handler() {
        const that = this;
        layui.form.on('submit(login-btn)', function (data) {
            const { userName, userPassword } = data.field;
            (async function () {
                const { isLogin, token } = await login({ userName,userPassword });
                console.log(isLogin,"111");
                
                if (isLogin) {
                    layui.layer.msg('登录成功！');
                    localStorage.setItem("user_token", token);
                    location.hash = "/admins";
                } else {
                    layui.layer.msg('再登录一次！');
                }

            })();
            return false;
        });
        if(isExcute){
            return;
        }
        isExcute = true;
        $(document).on("click",".layui-icon-userPassword" ,function () {
            //#1E9FFF
            if (this.dataset.status === "hide") {
                this.dataset.status = "show";
                this.style.color = "#000";
                $("input[Name='adminPassword']").attr("type", "adminPassword");
            } else if (this.dataset.status === "show") {
                this.dataset.status = "hide";
                this.style.color = "#1E9FFF";
                $("input[Name='adminPassword']").attr("type", "text");
            }
        })
    }

}