import Base from "./base.js";
import { delStudents, searchStudents } from "../service/students.js";
import { updateStudents } from "../service/students.js";
import { addStudents } from "../service/students.js"

export default class extends Base {
  render() {
    // console.log("info render");

    const template = `
    
    <div type="text/html" id="toolbarSearch" >
    <div class="layui-form" lay-filter="search-form" style="display:flex;">
    <button id="addSchedules" class="layui-btn" lay-filter="addSchedules">立即添加</button>
        <div class="demoTable">
            <div class="layui-inline" style="width:70px;margin-left: 50px;">
                <select name="search">
                    <option value="movieId">影名</option>
                    <option value="cinemasId">影院</option>
                  </select> 
              </div>
            <div class="layui-inline">
              <input class="layui-input" name="searchValue" id="search-value" lay-filter="search-value" autocomplete="off">
            </div>
            <button class="layui-btn"  lay-event="search" id="search-btn">搜索</button>
          </div>
    </div>
  </div>
    <table class="layui-hide" lay-data="{id: 'schedules-list'}" id="schedules-list" lay-filter="schedules-list"></table>
    `;
    this.$el.html(template);
  }
  afterMount() {
    const that = this;
    console.log("info render2"),
    this.tableIns = layui.table.render({
      elem: '#schedules-list'
      , limit: 5
      // loading:true,
      , limits: [5, 10, 15, 20, 50]
      , url: '/api/schedules'
      // , where: condition
      , headers: { "Authorization": `Bearer ${localStorage.user_token}` }
      , parseData: function (res) { //res 即为原始返回的数据
        console.log(res);

        return {
          "code": res.status, //解析接口状态
          "msg": res.message, //解析提示文本
          "count": res.count, //解析数据长度
          "data": res.rows //解析数据列表
        };
      }
      // , toolbar: "#toolbarSearch"
      , defaultToolbar: ['filter', 'exports', 'print', { //自定义头部工具栏右侧图标。如无需自定义，去除该参数即可
        title: '提示'
        , layEvent: 'LAYTABLE_TIPS'
        , icon: 'layui-icon-tips'
      }]
      , title: '猫眼电影后台数据表'
      , cols: [[
        { field: '_id', title: 'ID', width: 60, fixed: 'left', unresize: true, sort: true }
        ,
        // {
        //   field: 'headPic', title: '头像', width: 60, templet: function (d) {
        //     return `<img src='${d.headPic ? d.headPic : ""}' width=50 height=80 alt="无">`
        //   }
        // }
        , { field: 'movieId', title: '电影', width: 90 }
        , { field: 'cinemasId', title: '影院', width: 80, sort: true, template:function(d){
          console.log(d);
          return d.cinemasId.name
        }}
        , { field: 'theaterId', title: '放映厅', width: 180 }
        , { field: 'showTime', title: '放映时间', width: 180 }
        , { field: 'price', title: '价格', width: 60 }
        // , { field: 'className', title: '班级', width: 80, sort: true , templet: function (d) {
        //   // return d.className.name
        // }}
        , { fixed: 'right', title: '操作', toolbar: '#barCol', width: 150 }
      ]]
      , page: true
    });
    layui.form.render();
  }
  handler() {

    const that = this;

    layui.table.on('tool(schedules-list)', function (obj) {
      const data = obj.data;
      if (obj.event === 'del') {
        layer.confirm('真的删除行么', async function (index) {
          const _id = data._id;
          const { isDelete } = await delStudents({ _id });
          if (isDelete) {
            layer.alert("删除成功！");
            obj.del();
          } else {
            layer.alert("删除失败！");
          }
        });
      } else if (obj.event === 'edit') {
        layui.layer.open({
          type: 1,
          title: "修改信息",
          area: ['30%', '80%'],
          success: () => {
            layui.form.val('update-form', {
              ...data
            })
          },
          content: `<form class="layui-form" action="" lay-filter="update-form">
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
      </form>`
        })
      }
    });
    // const that = this;
    layui.form.on('submit(update-btn)', function (data) {
      (async function () {
        const schedules = data.field;//获取更新表单中的学生数据
        const { isUpdate } = await updateStudents(schedules, schedules._id);
        if (isUpdate) {
          layui.layer.msg("修改成功!!!!!!！");
        }
        layer.closeAll();
        layui.table.reload('schedules-list', {
          url: '/api/schedules'
        })
      })();
      return false;
    });
    // ====================================================
    $("#addSchedules").on("click", function () {
      layui.layer.open({
        type: 1,
        title: "添加信息",
        area: ['30%', '80%'],
        content: `<form class="layui-form" action="" lay-filter="add-form">
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
                    <input type="button" id="add-btn" class="layui-btn" lay-submit lay-filter="add-btn" value="添加立即"/>
                    <a href="#/admins/schedules" class="layui-btn">返回</a>
                </div>
            </div>
    </form>`
        // <button id="add-btn" class="layui-btn" lay-submit lay-filter="add-btn">立即添加</button>
      })
    })
    layui.form.on('submit(add-btn)', function (data) {
      const schedules = data.field;//获取更新表单中的学生数据
      const { isAdd } = addStudents(schedules);
      layui.layer.msg("添加成功!!!!!!！");
      layer.closeAll();
      layui.table.reload('schedules-list', {
        url: '/api/schedules'
      })
    })
    
  

    $("#search-btn").on('click', async function (obj) {
      const { search, searchValue } = layui.form.val("search-form");
      console.log(search, searchValue,"iiii");

      that.tableIns.reload({
        page: 1,
        limit: searchValue ? 10000000 : 5,
        where: {
          condition: { [search]: searchValue }
        }
      });
    })

  }
  reloadList() {
    this.tableIns.reload();
  }
}



