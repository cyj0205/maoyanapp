import Base from "../base.js";
import { deleteTheaters } from "../../service/theaters.js";

export default class extends Base {
  render() {
    const template = `
           <form class="layui-form" action="" id='addtheaters'>
        <div class="layui-form-item">
            <div class="layui-input-block">
                 <button class="layui-btn" >
                     <a href="#/admins/addtheaters" class="layui-btn"> <i class="layui-icon">&#xe608;</i> 添加</a>
                 </button>
            </div>
        </div>
        </form>
        <table class="layui-hide" id="theaters-list" lay-filter="theaters-list"></table>`;
    this.$el.html(template);
  }
  afterMount() {
    this.tableIns = layui.table.render({
      elem: '#theaters-list'
      , limit: 5
      // loading:true,
      , limits: [5, 10, 15, 20, 50]
      , url: '/api/theaters/'
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
      ,toolbar:"#toolbarSearch"
      , defaultToolbar: ['filter', 'exports', 'print', { //自定义头部工具栏右侧图标。如无需自定义，去除该参数即可
        title: '提示'
        , layEvent: 'LAYTABLE_TIPS'
        , icon: 'layui-icon-tips'
      }]
      , title: '学生数据表'
      , cols: [[
        { field: '_id', title: 'ID', width: 230, fixed: 'left', unresize: true, sort: true }
        , 
         { field: 'name', title: '放映厅', width: 180 }

        , { field: 'status', title: '是否营业', width: 120,
        templet : function(d){
         if(d.status){
            return `<p>营业中</p>`
         }else {
          return `<p>未营业</p>`
         }
        }}

        , { field: 'cinemasId', title: '所属电影院', width: 220 
        ,templet:function(d){
          let {name} =d.cinemasId
          // console.log("联系影院",d);
          return name;
          
        }
      }
        , { fixed: 'right', title: '操作', toolbar: '#barCol', width: 150 }
      ]]
      , page: true
    });
  }
  handler() {
    const that = this;
    layui.table.on('tool(theaters-list)', function (obj) {
      const data = obj.data;
      if (obj.event === 'del') {
        layer.confirm('是否删除此放映厅', async function (index) {
          const _id = data._id;
          console.log("电影院正在",data.cinemasId.status);
          console.log(_id);
         if(data.cinemasId.status==="未营业"){
           console.log("可以删除未营业的");
           
           const { isDelete } = await deleteTheaters({ _id });
           console.log(isDelete,222);
           if (isDelete) {
             layer.alert("删除成功！");
             obj.del();
           } else {
             layer.alert("删除失败！");
           }   
         }
         else{
          layer.alert("影院营业中，无法删除");
        }   
        });
      } 
      
      else if (obj.event === 'edit') {
        location.hash = "/admins/updatetheaters";//取对应事件的回掉直接调用，非异步。
     setTimeout(() => {
       console.log(data,"开始");
       
       data.cinemasId =data.cinemasId.name;
       
       
       console.log(data.cinemasId,"所属影院");
       console.log(data,"修改影院数据");
       
       if(data.status ==true){
       $("#statusTrue").attr("checked",true)
       }else if (data.status ==false) {
        $("#statusFalse").attr("checked",true)
       }
       layui.form.val('update-form', data);
       console.log( layui.form.val('update-form', data),"验证传输内容");
       console.log(data,"再次验证");
       
      //  layui.form.val('update-form',data.cinemasId.name);
       
     });
      }
    });
  $("#aftermonttheater").on("clcik",function(){
    that.afterMount();
  })
    layui.table.on('toolbar(theaters-list)',async  function(obj){

      
      console.log(obj);
      const {search,searchValue} = layui.form.val("search-form");
      console.log("搜索的内容",search,searchValue);
      
      that.tableIns.reload({
        page:1,
        limit:searchValue?10000000:5,
        where:{
          condition:{[search]:searchValue}
        }
      });
    })
  }
  reloadList() {
    this.tableIns.reload();
  }
}