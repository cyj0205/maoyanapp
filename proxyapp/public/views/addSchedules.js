import Base from "./base.js";
// import { updateStudents, delStudents } from "../service/students.js"
// import { getClazzs } from "../../service/clazzs.js"
// import {getFileURL} from "../util/getFileURL.js"
import { addStudents } from "../service/students.js";

export default class extends Base {
    render() {
        const template =
            `<form class="layui-form" action="" lay-filter="add-form">
                <div class="layui-form-item">
                    <label class="layui-form-label">电影</label>
                    <div class="layui-input-block" style="width: 200px;">
                        <input type="text" name="movieId" required lay-verify="required" placeholder="请输入姓名" autocomplete="off"
                            class="layui-input">
                    </div>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label">影院</label>
                    <div class="layui-input-block" style="width: 200px;">
                    <select name="cinemasId" required lay-verify="required" placeholder="请选择影院" autocomplete="off"></select>
                    </div>
                </div>
                
                <div class="layui-form-item">
                    <label class="layui-form-label">放映厅</label>
                    <div class="layui-input-block" style="width: 200px;">
                        <input type="text" name="theaterId" required lay-verify="required" placeholder="请输入年龄" autocomplete="off"
                            class="layui-input">
                    </div>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label">放映时间</label>
                    <div class="layui-input-block" style="width: 200px;">
                        <input type="text" name="showTime" required lay-verify="required" placeholder="请输入年龄" autocomplete="off"
                            class="layui-input">
                    </div>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label">价格</label>
                    <div class="layui-input-block" style="width: 200px;">
                        <input type="text" name="price" required lay-verify="required" placeholder="请输入年龄" autocomplete="off"
                            class="layui-input">
                    </div>
                </div>


                <div class="layui-form-item">
                        <div class="layui-input-block">
                            <button id="add-btn" class="layui-btn" lay-submit lay-filter="add-btn">立即添加</button>
                            <a href="#/admins/schedules" class="layui-btn">返回</a>
                        </div>
                    </div>
            </form>`;
        this.$el.html(template);

    }
    afterMount() {
        // layui.form.render();
    }
    handler() {
        const that = this;


    }
}