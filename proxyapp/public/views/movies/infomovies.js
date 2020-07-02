import Base from "../base.js";
import { deleteMovies } from "../../service/movies.js";

export default class extends Base {
  render() {
    const template = `
      
      <div class="layui-form" lay-filter="search-form">
      
            <div class="demoTable">
            <button type="button" class="layui-btn">
      <a href="#/admins/addmovies" class="layui-btn"> <i class="layui-icon">&#xe608;</i> 添加</a>
      </button>
      <button type="button" class="layui-btn">
      <a href="#/admins/updatemovies" class="layui-btn"> <i class="layui-icon">&#xe608;</i> 修改</a>
      </button>
                <div class="layui-inline" style="width:150px;margin-left:200px">
                    <select name="search">
                        <option value="cname">电影中文名</option>
                        <option value="time">电影时长</option>
                        <option value="area">上映国家</option>
                        <option value="type">电影类型</option>

                      </select> 
                  </div>
                  <div class="layui-inline">
                    <input class="layui-input" name="searchValue" id="search-value" lay-filter="search-value" autocomplete="off">
                  </div>
                  <button class="layui-btn" id="search-btn" lay-event="search">搜索</button>
                </div>
          </div>
    <table class="layui-hide" id="movies-list" lay-filter="movies-list"></table>`;
    this.$el.html(template);
    layui.form.render();
  }
  afterMount() {
    this.tableIns = layui.table.render({
      elem: '#movies-list'
      , limit: 5
      // loading:true,
      , limits: [5, 10, 15, 20, 50]
      , url: '/api/movies/'
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
      , defaultToolbar: ['filter', 'exports', 'print', { //自定义头部工具栏右侧图标。如无需自定义，去除该参数即可
        title: '提示'
        , layEvent: 'LAYTABLE_TIPS'
        , icon: 'layui-icon-tips'
      }]
      , title: '影片数据表'
      , cols: [[
        { field: '_id', title: 'ID', width: 60, fixed: 'left', unresize: true, sort: true }

        , { field: 'cname', title: '中文名字', width: 90 }
        , { field: 'ename', title: '英文名字', width: 90 }
        , { field: 'type', title: '电影首映', width: 90 }
        , {
          field: 'poster', title: '电影海报', width: 90, templet: function (d) {
            return `<img src='${d.poster ? d.poster : ""}' width=90 height=80 alt="无">`
          }
        }
        , { field: 'area', title: '首映地区', width: 90 }
        , { field: 'time', title: '时长', width: 70, sort: true }
        , { field: 'update', title: '电影大陆上映时间', width: 100 ,sort: true}
        , { field: 'score', title: '电影评分', width:100 ,sort: true}
        , { field: 'count', title: '电影票房', width: 90 }
        , { field: 'intro', title: '剧情简介', width: 90 }
        , { field: 'isClassic', title: '是否是经典', width: 90, sort: true }
        , { field: 'director', title: '导演名字', width: 90 }
        , { field: 'actor', title: '演员名字', width: 90 }
        
        , {
          fieldimage: 'images', title: '电影背景', width: 80, templet: function (d) {
            return `<img src='${d.images ? d.images : ""}' width=80 height=80 alt="无">`
          }
        }
        
        , { fixed: 'right', title: '操作', toolbar: '#moviesbarCol', width: 150 }

      ]]
      , page: true
    });
  }
  handler() {
    const that = this;
    layui.table.on('tool(movies-list)', function (obj) {
      const data = obj.data;
      if (obj.event === 'del') {
        layer.confirm('真的删除行么', async function (index) {
          const _id = data._id;
          const { isDelete } = await deleteMovies({ _id });
          if (isDelete) {
            layer.alert("删除成功！");
            obj.del();
          } else {
            layer.alert("删除失败！");
          }
        });
      } else if (obj.event === 'edit') {
        location.hash = "/admins/updatemovies";//取对应事件的回掉直接调用，非异步。
        setTimeout(() => {
          if(data.isClassic ==true){
            $("#statusTrue").attr("checked",true)
            }else if (data.isClassic ==false) {
             $("#statusFalse").attr("checked",true)
            }
          if (data.poster||data.images) {//根据学生信息里面有无头像选择是否显示
            $("#upload-pic-update").css({
              background: `url('${data.poster.replace(/\\/g, "/")}')`,
              backgroundSize: "100% 100%"
            })
            $("#upload-pic-date").css({
              background: `url('${data.images.replace(/\\/g, "/")}')`,
              backgroundSize: "100% 100%"
            })
          } else {
            data.poster = "";
            $("#upload-pic-update").css({
              background: `url('')`,
            })
          }
          layui.form.val('update-form', data);
        })
      }
    });

    $("#search-btn").on("click",async function (obj) {
      that.afterMount();
    // layui.table.on('toolbar(movies-list)', async function (obj) {
      // console.log(1111);
      
      // console.log(obj);
      const { search, searchValue } = layui.form.val("search-form");
      // console.log(search, searchValue);
      
      that.tableIns.reload({
        page: 1,
        limit: searchValue ? 10000000 : 5,
        where: {
          condition: { [search]: searchValue }
        }
      });
    });
    }
  reloadList() {
      this.tableIns.reload();
    }
}