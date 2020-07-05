import Base from "./base.js";
import { delStudents, searchStudents } from "../service/students.js";
import { updateStudents } from "../service/students.js";
import { addStudents } from "../service/students.js"
import { getStudents } from "../service/students.js"

export default class extends Base {
  render() {
    const template = `
    <div type="text/html" id="toolbarSearch" >
    <div class="layui-form" lay-filter="search-form" style="display:flex;">
    <button id="addSchedules" class="layui-btn" lay-filter="addSchedules">立即添加</button>
        <div class="demoTable" style=" display:flex">
            <div class="layui-inline" style="width:70px;margin-left: 50px;">
                
            </div>
            <div class="layui-inline" style="display:flex; margin-left:30px">
            <select name="cinemasId"  required lay-verify="required" placeholder="请选择影院" autocomplete="off"></select>
            <select name="theatersId" required id="movieId-second" lay-filter="movieId-second" lay-verify="required" placeholder="请选择1" autocomplete="off"></select>
            </div>
            <button class="layui-btn" lay-submit lay-event="search" id="find-list" lay-filter="find-list">搜索</button>
          </div>
    </div>
  </div>
    <table class="layui-hide" lay-data="{id: 'schedules-list'}" id="schedules-list" lay-filter="schedules-list"></table>
    `;
    this.$el.html(template);
  }
  afterMount() {
    const that = this;
    this.tableIns = layui.table.render({
      elem: '#schedules-list'
      , limit: 5
      // loading:true,
      , limits: [5, 10, 15, 20, 50]
      , url: '/api/schedules/'
      // , where: condition
      , headers: { "Authorization": `Bearer ${localStorage.user_token}` }
      , parseData: function (res) { //res 即为原始返回的数据
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
      , cols: [[    //页面渲染数据
        { field: '_id', title: 'ID', width: 60, fixed: 'left', unresize: true, sort: true }
        , {
          field: 'movieId', title: '电影', width: 90, templet: function (d) {
            return d.movieId.cname;
          }
        }
        , {
          field: 'cinemasId', title: '影院', width: 80, sort: true, templet: function (d) {
            return d.cinemasId.name;
          }
        }
        , {
          field: 'theaterId', title: '放映厅', width: 180, templet: function (d) {
            return d.theaterId.name;
          }
        }
        , { field: 'showTime', title: '放映时间', width: 180 }
        , { field: 'price', title: '价格', width: 60 }
        , { fixed: 'right', title: '操作', toolbar: '#barCol', width: 150 }
      ]]
      , page: true
    });

    (async function () {
      const data = await getStudents();  //获取数据库排片数据
      const template = data.rows.map(cl => `<option value="${cl.cinemasId._id}">${cl.cinemasId.name}</option>`).join('');
      //数据库通过id获取的相应影院值
      $("select[name='cinemasId']").html(template); //渲染在下拉列表
      layui.form.render(); //页面渲染
    }());
    (async function () {
      const data = await getStudents();  //获取数据库排片数据
      const template = data.rows.map(cl => `<option value="${cl.theaterId._id}">${cl.theaterId.name}</option>`).join('');
      //数据库通过id获取的相应影院值
      $("select[name='theatersId']").html(template); //渲染在下拉列表
      layui.form.render(); //页面渲染
    }());
    layui.form.render();
  }
  reloadList() {
    this.tableIns.reload(data);
  }
  handler() {
    const that = this;
    // layui.form.on('select(find-list)', function (data) {
    //   layui.form.render();
    //   return false;
    // })

    layui.form.on('submit(find-list)', function (res) {
      const { cinemasId, theatersId } = res.field;
      // (async function () {
      // const data = await searchStudents(res.field)
      layui.table.render({
        elem: '#schedules-list'
        , limit: 5
        // loading:true,
        , limits: [5, 10, 15, 20, 50]
        , url: '/api/schedules/searchStudents'
        , where: { cinemasId, theatersId }
        , headers: { "Authorization": `Bearer ${localStorage.user_token}` }
        , parseData: function (res) { //res 即为原始返回的数据
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
        , cols: [[    //页面渲染数据
          { field: '_id', title: 'ID', width: 60, fixed: 'left', unresize: true, sort: true }
          , {
            field: 'movieId', title: '电影', width: 90, templet: function (d) {
              return d.movieId.cname;
            }
          }
          , {
            field: 'cinemasId', title: '影院', width: 80, sort: true, templet: function (d) {
              return d.cinemasId.name;
            }
          }
          , {
            field: 'theaterId', title: '放映厅', width: 180, templet: function (d) {
              return d.theaterId.name;
            }
          }
          , { field: 'showTime', title: '放映时间', width: 180 }
          , { field: 'price', title: '价格', width: 60 }
          , { fixed: 'right', title: '操作', toolbar: '#barCol', width: 150 }
        ]]
        , page: true
      });
      // })();
    })

    layui.table.on('tool(schedules-list)', function (obj) {
      const data = obj.data;
      if (obj.event === 'del') {  //触发按钮
        layer.confirm('真的删除行么', async function (index) {
          const _id = data._id;  //要删除的学生的ID
          const { isDelete } = await delStudents({ _id });  //三层架构的导出的方法
          if (isDelete) {
            layer.alert("删除成功！");
            obj.del();
          } else {
            layer.alert("删除失败！");
          }
        });
      } else if (obj.event === 'edit') {
        layui.layer.open({  //修改页面为弹窗
          type: 1,
          title: "修改信息",
          area: ['30%', '80%'], //弹窗区域
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
              <select name="movieId" required lay-verify="required" placeholder="请选择影院" autocomplete="off"></select>
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
              <select name="theaterId" required lay-verify="required" placeholder="请选择放映厅" autocomplete="off"></select>
              </div>
          </div>
          <div class="layui-form-item">
              <label class="layui-form-label">放映时间</label>
              <div class="layui-input-block" style="width: 200px;">
                  <input type="datetime-local" name="showTime" required lay-verify="required" placeholder="请输入时间" autocomplete="off"
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
        });

        layer.ready(function () {
          (async function () {
            const data = await getStudents();  //获取数据库排片数据
            const template = data.rows.map(cl => `<option value="${cl.cinemasId._id}">${cl.cinemasId.name}</option>`).join('');
            //数据库通过id获取的相应影院值
            $("select[name='cinemasId']").html(template); //渲染在下拉列表
            layui.form.render(); //页面渲染
          }());
          (async function () {
            const data = await getStudents();  //获取数据库排片数据
            const template = data.rows.map(cl => `<option value="${cl.movieId._id}">${cl.movieId.cname}</option>`).join('');
            //数据库通过id获取的相应影院值
            $("select[name='movieId']").html(template); //渲染在下拉列表
            layui.form.render(); //页面渲染
          }());
          (async function () {
            const data = await getStudents();  //获取数据库排片数据
            const template = data.rows.map(cl => `<option value="${cl.theaterId._id}">${cl.theaterId.name}</option>`).join('');
            //数据库通过id获取的相应影院值
            $("select[name='theaterId']").html(template); //渲染在下拉列表
            layui.form.render(); //页面渲染
          }());
        });


      }
    });
    // const that = this;
    //修改
    layui.form.on('submit(update-btn)', function (data) {
      (async function () {
        const schedules = data.field;//获取更新表单中的学生数据
        const { isUpdate } = await updateStudents(schedules, schedules._id);  //更新表单中的学生数据  更新表单中的学生id
        if (isUpdate) {
          layui.layer.msg("修改成功!!!!!!！");
        }
        layer.closeAll();  //关闭弹窗
        layui.table.reload('schedules-list', {   //页面重载，页面不自动重载
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
            <select name="movieId" required lay-verify="required" placeholder="请选择电影" autocomplete="off"></select>
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
            <select name="theaterId" required lay-verify="required" placeholder="请选择放映厅" autocomplete="off"></select>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">放映时间</label>
            <div class="layui-input-block" style="width: 200px;">
                <input type="datetime-local" name="showTime" required lay-verify="required" placeholder="请输入时间" autocomplete="off"
                    class="layui-input">
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">价格</label>
            <div class="layui-input-block" style="width: 200px;">
                <input type="text" name="price" required lay-verify="required" placeholder="请输入价格" autocomplete="off"
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
      });
      layer.ready(function () {
        (async function () {
          const data = await getStudents();  //获取数据库排片数据
          const template = data.rows.map(cl => `<option value="${cl.cinemasId._id}">${cl.cinemasId.name}</option>`).join('');
          //数据库通过id获取的相应影院值
          $("select[name='cinemasId']").html(template); //渲染在下拉列表
          layui.form.render(); //页面渲染
        }());

        (async function () {
          const data = await getStudents();  //获取数据库排片数据
          const template = data.rows.map(cl => `<option value="${cl.movieId._id}">${cl.movieId.cname}</option>`).join('');
          //数据库通过id获取的相应影院值
          $("select[name='movieId']").html(template); //渲染在下拉列表
          layui.form.render(); //页面渲染
        }());

        (async function () {
          const data = await getStudents();  //获取数据库排片数据
          const template = data.rows.map(cl => `<option value="${cl.theaterId._id}">${cl.theaterId.name}</option>`).join('');
          //数据库通过id获取的相应影院值
          $("select[name='theaterId']").html(template); //渲染在下拉列表
          layui.form.render(); //页面渲染
        }());
      });
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
  }

  reloadList() {
    this.tableIns.reload();
  }
}



