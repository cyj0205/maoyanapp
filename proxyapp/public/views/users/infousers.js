import Base from "../base.js";
import { delUser,searchUsers} from "../../service/users.js"
export default class extends Base {
    render() {
        const template = `
        <div >
        <div class="layui-form" lay-filter="search-form" style="display:flex">
        <div>
            <a href="#/admins/addUsers" class="layui-btn"> <i class="layui-icon">&#xe608;</i>添加管理员</a>
        </div>
        <div class="demoTable">
        <div class="layui-inline" style="width:100px;margin-left:30px">
            <select name="search" lay-filter="test">
                <option value="userName">姓名</option>
              </select> 
          </div>
          <div class="layui-inline">
          <input class="layui-input" name="searchValue" id="search-value" lay-filter="search-value" autocomplete="off">
        </div>
        <button class="layui-btn" id="search-btn"  lay-event="search">搜索用户</button>
      </div>
        </div>
        </div>
        <table class="layui-hide" id="users-list" lay-filter="users-list"></table>
           `;
        this.$el.html(template);
    }
    afterMount() {

        this.tableIns = layui.table.render({
            elem: '#users-list',
            limit: 5,
            limits: [5, 10, 15, 20, 50]
            , url: '/api/users/'
            , headers: { "Authorization": `Bearer ${localStorage.user_token}` }
            , parseData: function (res) {
                return {
                    "code": res.status,//解析接口状态
                    "msg": res.message,//解析提示文本
                    "count": res.count,//解析数据长度
                    "data": res.rows//解析数据列表
                };
            }
            , toolbar: '#toolbarSearch'
            , defaultToolbar: ['filter', 'exports', 'print', { //自定义头部工具栏右侧图标。如无需自定义，去除该参数即可
                title: '提示'
                , layEvent: 'LAYTABLE_TIPS'
                , icon: 'layui-icon-tips'
            }]
            , title: '管理员数据表'
            , cols: [[
                { field: '_id', title: 'ID', width: 400, fixed: 'left', unresize: true, sort: true }
                , { field: 'userName', title: '账户', width: 300 }
                , { field: 'userPassword', title: '密码', width: 300, sort: true }
                , { fixed: 'right', title: '操作', toolbar: '#barCol', width: 120,sort:true}
            ]]
            , page: true
        });
        layui.form.render();
    }
    handler() {
        const that = this;
        layui.table.on('tool(users-list)', function (obj) {
            const data = obj.data;
            if (obj.event === 'del') {
                layer.confirm('删除?儿豁', async function (index) {
                    const _id = data._id;
                    const { isDelete } = await delUser({ _id });
                    if (isDelete) {
                        layer.alert("删除成功！");
                        obj.del();
                    } else {
                        layer.alert("删除失败！");
                    }
                });
            } else if (obj.event === 'edit') {
                location.hash = "/admins/updateUsers";
                //取对应事件的回掉直接调用，非异步。
                setTimeout(() => {
                    layui.form.val('update-form', data);
                })
            }
        });
        $("#search-btn").on("click", async function (obj) {
            // console.log(obj);
            that.afterMount();
            // console.log(layui.form.val("#search-form"), "111");
            const { search, searchValue } = layui.form.val("search-form");
            console.log(search, searchValue, "val");
            that.tableIns.reload({
                page: 1,
                limit: searchValue ? 10000000 : 5,
                where: {
                    condition: { [search]: searchValue }
                }
            });
        });
        $('.layui-btn').click(()=>{
            // console.log('asasasa')
        })
    }
    reloadList() {
        this.tableIns.reload();
    }
}