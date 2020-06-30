import Base from "./base.js";
import { updateStudents, delStudents } from "../service/students.js"
// import { getClazzs } from "../../service/clazzs.js"
import {getFileURL} from "../util/getFileURL.js"

export default class extends Base {
    render() {
        const template =
            `<form class="layui-form" action="" lay-filter="update-form">
                <div class="layui-form-item">
                    <label class="layui-form-label">ID</label>
                    <div class="layui-input-block" style="width: 200px;">
                        <input readonly type="text" name="_id" required lay-verify="required" placeholder="请输入ID" autocomplete="off"
                            class="layui-input">
                    </div>
                </div>
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
                        <input type="text" name="cinemasId" required lay-verify="required" placeholder="请输入姓名" autocomplete="off"
                            class="layui-input">
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
                        <button id="update-btn" class="layui-btn" lay-submit lay-filter="update-btn">立即修改</button>
                    </div>
                </div>
            </form>`;
        this.$el.html(template);
        
    }
    afterMount() {
        // const that = this;
        // (async function () {
        //     // const data = await getClazzs();method="POST"
        //     // const template = data.rows.map(cl=>`<option value="${cl._id}">${cl.name}</option>`).join();
        //     // $("select[name='className']").html(template);
        //     layui.form.render();
        // }());
        this.uploadInst = layui.upload.render({
            // elem: '#upload-pic-update' //绑定元素
             url: '/schedules/upload/' //上传接口
            , auto: false//自动上传，选择完图片立即上传
            , field: "file"//文件上传的key,默认：“file”
            , headers: { "Authorization": `Bearer ${localStorage.user_token}` }//jwt验证需要的请求头
            , done: async function (res) {//文件上传
                that.uploadResolve(res.data.responsename);
            }
        //     // , choose(obj) {
        //     //     //预读本地文件，如果是多文件，则会遍历。(不支持ie8/9)
        //     //     obj.preview(function (index, file, result) {
        //     //         const picLocalPath = getFileURL(file);
        //     //         // $("#upload-pic-update").css({
        //     //         //     background: `url('${picLocalPath}')`,
        //     //         //     backgroundSize: "100% 100%"
        //     //         // })
        //     //     });
        //     // }
        });
    }
    handler() {
        // const that = this;
        // layui.form.on('submit(update-btn)', function (data) {
        //     (async function () {
        //         const schedules = data.field;//获取更新表单中的学生数据
        //         const { isUpdate } = await updateStudents(schedules,schedules._id);
        //         if (isUpdate) {
        //             layui.layer.msg("修改成功!!!!!!！");
        //             // location.hash = "/admins/schedules";
        //         }
        //     })();
        //     return false;
        // });

    }
}