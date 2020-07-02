import Base from "../base.js";
import { updateMovies, deletePic } from "../../service/movies.js"
import getFileURL from "../../util/getFileURL.js"

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
                <label class="layui-form-label"  style="width: 120px">电影中文名称</label>
                <div class="layui-input-block" >
                    <input type="text" style="width: 400px" name="cname" required lay-verify="required" placeholder="请输入电影名称" autocomplete="off"
                        class="layui-input">
                </div>
            </div>
           
            <div class="layui-form-item">
                <label class="layui-form-label" style="width: 120px">电影英文名字</label>
                <div class="layui-input-block">
                    <input type="text"  style="width: 400px;"  name="ename" required lay-verify="required" placeholder="请输入电影英文名字" autocomplete="off"
                        class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label" style="width: 120px">电影类型</label>
                <div class="layui-input-block">
                    <input type="text" style="width: 200px;" name="type" required lay-verify="required" placeholder="请输入电影类型" autocomplete="off"
                        class="layui-input">
                </div>
            </div>
            <div class="layui-form-item" style="position: absolute;left:700px;top:100px">
            <label class="layui-form-label">电影海报</label>
            <div class="layui-input-block" style="width: 200px;">
                <input type="hidden" name="poster">
                <p id="upload-pic-update" style="width:100px;height:160px; border:1px dashed;display: flex;justify-content: center;align-items: center;cursor:pointer">
                    <i class="layui-icon">&#xe67c;</i>上传图片
                </p>
            </div>
        </div>
        </div>
            <div class="layui-form-item">
            <label class="layui-form-label">上映地区</label>
            <div class="layui-input-block" style="width: 300px;">
                <select name="area" required lay-verify="required" placeholder="请选择地区" autocomplete="off">
                <option value="中国">中国</option>
  <option value="美国">美国</option>
  <option value="日本">日本</option>
  <option value="韩国">韩国</option>
                </select>
            </div>
        </div>
          <div class="layui-form-item">
          <label class="layui-form-label"   style="width: 120px">电影时长</label>
          <div class="layui-input-block" >
              <input type="text" style="width:400px" name="time" required lay-verify="required" placeholder="请输入电影时长" autocomplete="off"
                  class="layui-input">
          </div>
      </div>
      <div class="layui-form-item">
                <label class="layui-form-label"   style="width: 120px">大陆上映时间</label>
                <div class="layui-input-block" >
               <input type="text" style="width:400px" class="layui-input" name="update" id="moviesDate" placeholder="请输入上映时间">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label"   style="width: 120px">电影评分</label>
                <div class="layui-input-block" >
                    <input type="text" style="width:400px" name="score" required lay-verify="required" placeholder="请输入电影评分" autocomplete="off"
                        class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label"   style="width: 120px">电影票房</label>
                <div class="layui-input-block" >
                    <input type="text" style="width:400px" name="count" required lay-verify="required" placeholder="请输入电影票房" autocomplete="off"
                        class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label"   style="width: 120px">剧情简介</label>
                <div class="layui-input-block" >
                    <input type="text" style="width:400px" name="intro" required lay-verify="required" placeholder="请输入剧情简介" autocomplete="off"
                        class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label"   style="width: 120px">是否经典</label>
                <div class="layui-input-block">
                    <input type="radio" name="isClassic" id="statusTrue" value="true" title="是" >
                    <input type="radio" name="isClassic" id="statusFalse" value="false" title="否" checked>
                </div>
            </div>
            <div class="layui-form-item">
            <label class="layui-form-label"   style="width: 120px">导演名字</label>
            <div class="layui-input-block">
                <input type="text" style="width:400px" name="director" required lay-verify="required" placeholder="请输入导演名字" autocomplete="off"
                    class="layui-input">
            </div>
        </div>
        <div class="layui-form-item">
        <label class="layui-form-label" style="width: 120px">演员名字</label>
        <div class="layui-input-block">
            <input type="text" style="width:400px" name="actor" required lay-verify="required" placeholder="请输入演员名字" autocomplete="off"
                class="layui-input">
        </div>
    </div>
      
              
            <div class="layui-form-item" style="position: absolute;left:700px;top:500px">
            <label class="layui-form-label">背景图片</label>
            <div class="layui-input-block" style="width: 200px;">
                <input type="hidden" name="images">
                <p id="upload-pic-date" style="width:100px;height:160px; border:1px dashed;display: flex;justify-content: center;align-items: center;cursor:pointer">
                    <i class="layui-icon">&#xe67c;</i>上传图片
                </p>
            </div>
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
        const that = this;
        layui.use('laydate', function(){
            var laydate = layui.laydate;
            
            //执行一个laydate实例
            laydate.render({
              elem: '#moviesDate' //指定元素
            });
          });
        layui.form.render();
        this.uploadInst = layui.upload.render({
            elem: '#upload-pic-update' //绑定元素
            , url: '/movies/upload/' //上传接口
            , auto: false//自动上传，选择完图片立即上传
            , field: "file"//文件上传的key,默认：“file”
            , headers: { "Authorization": `Bearer ${localStorage.user_token}` }//jwt验证需要的请求头
            , done: async function (res) {//文件上传
                that.uploadResolve(res.data.responsename);
            }
            , choose(obj) {
                //预读本地文件，如果是多文件，则会遍历。(不支持ie8/9)
                obj.preview(function (index, file, result) {
                    const picLocalPath = getFileURL(file);
                    $("#upload-pic-update").css({
                        background: `url('${picLocalPath}')`,
                        backgroundSize: "100% 100%"
                    })
                });
            }
        });
        this.uploadInst_a = layui.upload.render({
            
            elem: '#upload-pic-date' //绑定元素
            , url: '/movies/upload/' //上传接口
            , auto: false//自动上传，选择完图片立即上传
            , field: "file"//文件上传的key,默认：“file”
            , headers: { "Authorization": `Bearer ${localStorage.user_token}` }//jwt验证需要的请求头
            , done: async function (res) {//文件上传
                that.uploadResolve_a(res.data.responsename);
            }
            , choose(obj) {
                //预读本地文件，如果是多文件，则会遍历。(不支持ie8/9)
                obj.preview(function (index, file, result) {
                    const picLocalPath = getFileURL(file);
                    $("#upload-pic-date").css({
                        background: `url('${picLocalPath}')`,
                        backgroundSize: "100% 100%"
                    })
                });
            }
        });
    }
    handler() {
        const that = this;
        layui.form.on('submit(update-btn)', function (data) {
            (async function () {
                const movie = data.field;//获取更新表单中的学生数据
                if ($("#upload-pic-update").next()[0].files.length === 1) {//如果上传组件选择了照片
                    const poster = await new Promise(resolve => {//那么就上传
                        that.uploadResolve = resolve;//将上传结束的resolve交出去
                        that.uploadInst.upload();//开始上传
                    })
                    if (movie.poster) {//如果学生学生信息中已经有了poster,说明之前有图片，需要删除之前的图片
                        deletePic(movie.poster);
                    }
                    movie.poster = poster;//上传完成后把图片在服务器的位置得到
                }
                if ($("#upload-pic-date").next()[0].files.length === 1) {//如果上传组件选择了照片
                    const images = await new Promise(resolve => {//那么就上传
                        that.uploadResolve_a = resolve;//将上传结束的resolve交出去
                        that.uploadInst_a.upload();//开始上传
                    })
                    if (movie.images) {//如果学生学生信息中已经有了poster,说明之前有图片，需要删除之前的图片
                        deletePic(movie.images);
                    }
                    movie.images = images;//上传完成后把图片在服务器的位置得到
                }             
                const { isUpdate } = await updateMovies(movie._id, movie);
              
                if (isUpdate) {
                    if (isUpdate) {
                        layui.layer.msg("修改成功！");
                        location.hash = "/admins/infomovies";
                    }
                }
            })();
            return false;
        });
    }
}