// import Base from "../base.js"
// import { getSeats,updateSeats, getCinemas, getTheaters } from "../../service/seats.js";
// export default class extends Base {
//     render() {
//         const template =
//             `
//             <form class="layui-form layui-form-pane" action="">
//             <div class="layui-form-item">
//             <label class="layui-form-label layui-bg-red">影院</label>
//             <div class="layui-input-block" style="width:350px">
//               <select name="cinemasSeats" lay-verify="required" id="updateCinemas" lay-filter="updateCinemas">
//                 <option value=""></option>
      
//               </select>
//             </div>
//           </div> <div class="layui-form-item">
//           <label class="layui-form-label layui-bg-red">放映厅</label>
//           <div class="layui-input-block" style="width:350px">
//             <select name="theatersSeats" lay-verify="required" id="updateTheaters" lay-filter="updateTheaters">
//               <option value=""></option>
              
//             </select>
//           </div>
//         </div>
//   <div class="layui-form-item">
//     <label class="layui-form-label layui-bg-red">行</label>
//     <div class="layui-input-block" style="width:350px">
//       <input type="text" name="rowSeats" id="rowSeats" lay-filter="rowSeats" required  lay-verify="required" placeholder="请输入行数" autocomplete="off" class="layui-input">
//     </div>
//   </div>
//   <div class="layui-form-item">
//     <label class="layui-form-label layui-bg-red">列</label>
//     <div class="layui-input-block" style="width:350px">
//       <input type="text" name="colSeats" id="colSeats" lay-filter="colSeats" required lay-verify="required" placeholder="请输入列数" autocomplete="off" class="layui-input">
//     </div>
//   </div>
//   <div class="layui-form-item">
//     <div class="layui-input-block">
//       <button class="layui-btn layui-bg-red" lay-submit lay-filter="updateSeats-btn" id="updateSeats-btn">立即提交</button>
//       <button type="reset" class="layui-btn layui-btn-primary">重置</button>
//     </div>
//   </div>
// </form>
//                   `;
//         this.$el.html(template);
//     }

//     afterMount() {
    
//         layui.form.verify({
//             row: [
//                 /^[\S]{1,2}$/
//             ],
//             col: [
//                 /^[\S]{1,2}$/
//             ]
//         });
//         (async function () {
//           const dataCinemas = await getCinemas();
//           let str = `<option value="">请选择</option>`;
//           for (let i = 0; i <dataCinemas.length; i++) {
//             str += ` <option value="${dataCinemas[i]._id}" data-cinemasId="${dataCinemas[i]._id}">${dataCinemas[i].name}</option>`
//         }
//         $("#updateCinemas").html(`${str}`);
//         layui.form.render();
//         })() 
//     }
//     handler() {
//       let theatersSeatsId,rowFirst,colFirst;
//      //第一个下拉框监听=======================================================
//      layui.form.on('select(updateCinemas)', function (data) {
       
//       let id = data.value;
//        (async function () {
//        let str = `<option value="">请选择</option>`;
//        const dataTheaters = await getTheaters(id);
//        for (let i = 0; i <dataTheaters.length; i++) {
//          str += ` <option value="${dataTheaters[i]._id}" data-cinemasId="${dataTheaters[i]._id}">${dataTheaters[i].name}</option>`
//      }      
//      $("#updateTheaters").html(`${str}`);
//      layui.form.render(); 
//     })();
//        return false;
//      });
// //第二个下拉栏监听================================================================
// layui.form.on('select(updateTheaters)', function (data) {
//   theatersSeatsId = data.value;
//   (async function () {
//     theatersSeatsId = `ObjectId("${theatersSeatsId}")`;
//     const data = await getSeats(theatersSeatsId);
//     rowFirst=`${data[0].row}`;
//     colFirst=`${data[0].col}`;
//       $("#rowSeats").val(`${data[0].row}`)
//       $("#colSeats").val(`${data[0].col}`)
    
//   layui.form.render(); 
//   // $("#updateSeats-btn").attr("disabled",false)
//  })();
//    return false;
//  });
// //提交按钮监听================================================================
// layui.form.on('submit(updateSeats-btn)',function (data) {
//   let Obj = {};
//   let changedRow = $("#rowSeats").val();
//   let changedCol = $("#colSeats").val();
//   theatersSeatsId = `${theatersSeatsId}`;
//  Obj.row=changedRow;
//  Obj.col=changedCol;
//  Obj.theaterId=theatersSeatsId;
//   (async function () {
//     const data = await updateSeats(Obj);//获取座位数据库数据
//     if(data){
//       layer.msg("修改成功")
//     }else{
//       layer.mag("修改失败")
//     }
//     location.hash = "#/admins/"+`inquireSeats`;
// })();
// return false;
// })
//      return false;
//     }
// }
