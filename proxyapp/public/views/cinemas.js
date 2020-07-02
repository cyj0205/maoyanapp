import Base from "./base.js";
// import pager from "../../util/pager.js";
// import { getStudents } from "../../service/students.js";
import { delCinemas } from "../service/cinemas.js";

let isExcute = false;
export default class extends Base {
    render() {
        const template = `
        <div type="text/html" id="toolbarSearch" >
            <div class="layui-form" lay-filter="search-form" style="display:flex;">
                <div style=" margin-right: 30px;">
                    <button type="button" class="layui-btn"> 
                        <a href="#/admins/addCinemas"><i class="layui-icon">&#xe608;</i> 添加影院</a>
                    </button>
                </div>
            

                <div class="demoTable">
                    <div class="layui-inline" style="width:70px">
                        <select name="search" lay-filter="test">
                            <option value="name">影院</option>
                            <option value="address">地址</option>
                        </select>
                    </div>
                    <div class="layui-inline">
                        <input class="layui-input" name="searchValue" id="search-value" lay-filter="search-value" autocomplete="off">
                    </div>
                    <button class="layui-btn" id="search-cinemas" lay-event="search">搜索影院</button>
                </div>
            </div>
        </div>
        <table class="layui-hide" id="cinemas-list" lay-filter="cinemas-list"></table>
        
         `;
        this.$el.html(template);

    }
    afterMount() {
        // this.renderStuList();
        // console.log("render");
        
        const that = this;
        this.tableIns = layui.table.render({
            elem: '#cinemas-list'
            , limit: 5
            // loading:true,
            , limits: [5, 10, 15, 20, 50]
            , url: '/api/cinemas'
            // , where: condition
            // , toolbar: '#toolbarHeader'
            , headers: { "Authorization": `Bearer ${localStorage.user_token}` }
            , parseData: function (res) { //res 即为原始返回的数据
                return {
                    "code": res.status, //解析接口状态
                    "msg": res.message, //解析提示文本
                    "count": res.count, //解析数据长度
                    "data": res.rows //解析数据列表
                };
            }
            // ,toolbar: '#toolbarSearch'
            , defaultToolbar: ['filter', 'exports', 'print', { //自定义头部工具栏右侧图标。如无需自定义，去除该参数即可
                title: '提示'
                , layEvent: 'LAYTABLE_TIPS'
                , icon: 'layui-icon-tips'
            }]
            , title: '影院列表'
            , cols: [[
                { field: '_id', title: 'ID', width: 60, fixed: 'left', unresize: true, sort: true }
                , { field: 'name', title: '影院名', width: 180 }
                , { field: 'status', title: '是否营业', width: 110, sort: true }
                , { field: 'phone', title: '影院电话', width: 120 }
                , { field: 'address', title: '影院地址', width: 180, sort: true }
                , { fixed: 'right', title: '操作', toolbar: '#barCol', width: 120 }
            ]]
            , page: true
            
        });
        layui.form.render();
    }
    handler() {
       
        const that = this;
        layui.table.on('tool(cinemas-list)', function (obj) {
            const data = obj.data;
            if (obj.event === 'del') {
                layer.confirm('真的要删除吗？',async function (index) {
                    const _id = data._id;
                    if (data.status==="营业中") {
                        layer.alert("正在营业中，不能删除！");
                    } else {
                        const { isDelete } = await delCinemas({ _id });
                        if (isDelete) {
                            layer.alert("删除成功！");
                            obj.del();
                        } 
                    }
                });
            } 
            else if (obj.event === 'edit') {//编辑按钮
                location.hash = "/admins/updateCinemas";//取对应事件的回掉直接调用，非异步
                setTimeout(() => {
                    layui.form.val('updateCinemas-form', data);
                });
            }
        });
        $("#search-cinemas").on("click",async  function(obj){
        // layui.table.on('toolbar(cinemas-list)',async  function(obj){
            const {search,searchValue} = layui.form.val("search-form");
            // console.log(search,searchValue,'xiejie')
            that.tableIns.reload({
              page:1,
              limit:searchValue?10000000:5,
              where:{
                condition:{[search]:searchValue}
              }
            });
        });
    }
    reloadList() {
        this.tableIns.reload();
    }

    }