let axiosIns;
function useToken() {
   axiosIns = axios.create({
        baseURL: 'http://'+location.host,
        timeout: 1000,
        headers: { "Authorization": `Bearer ${localStorage.user_token}` }
    });
};
useToken();
window.onstorage = function ({ key, newValue }) {
    if (key === "user_token") {
        useToken();
    }
}
<<<<<<< HEAD:proxyapp/public/service/movies.js
import pager from "../util/pager.js";
export async function getStudents() {
    const {data} = await axiosIns.get(
        "/api/movies/",
        {
            params: { limit: pager.limit, page: pager.page }
        }
    )
    return data;
}
// import pager from "../util/pager.js";
// export async function getMovies() {
//     const {data} = await axiosIns.get(
//         "/api/movies/")
//     return data;
// }
export async function deleteMovies({_id}) {
    const {data} = await axiosIns.delete("/api/movies/" + _id)
    return data;
}
export async function addMovies(stuTxt) {
    console.log(stuTxt,"stu");
    
    const {data} = await axiosIns.post(
        "/api/movies/",
=======
// import pager from "../util/pager.js";

//渲染
export async function getStudents(userTxt) {
    const { data } = await axiosIns.get(
        "/api/schedules/",
        // {
        //     params: { limit: pager.limit, page: pager.page }
        // }
    )
    return data;
}


//删除
export async function delStudents({ _id }) {
    const { data } = await axiosIns.delete("/api/schedules/" + _id)
    return data;
}


//修改
export async function updateStudents(stuTxt, _id) {
    const { data } = await axiosIns.put(
        "/api/schedules/" + _id,
>>>>>>> 40b14582022bfa0bfbe300fd1a47676f90df4757:proxyapp/public/service/students.js
        stuTxt
    )
    return data;
}
<<<<<<< HEAD:proxyapp/public/service/movies.js
export async function updateMovies(_id,stuTxt) {
    const {data} = await axiosIns.put(
        "/api/movies/" + _id,
        stuTxt
=======


//添加
export async function addStudents(studentsTxt) {
    const { data } = await axiosIns.post(
        "/api/schedules/",
        studentsTxt
>>>>>>> 40b14582022bfa0bfbe300fd1a47676f90df4757:proxyapp/public/service/students.js
    )
    return data;
}
export function upload( {keyName, file}) {
    //url:上传的服务器接口。
    //keyName：上传的文件的key。
    //file：上传的文件（由input[type='file']获取）
    return new Promise(r => {
        const fd = new FormData();
        fd.append(keyName, file);//键的名字必须与服务器对应
        $.ajax({
            url:"/movies/upload",
            type: "post",//*** 
            data: fd,//*** 
            cache: false,//上传文件无需缓存
            contentType: false,//*** //数据的解析类型，不需要，我们上传2进制数据，没有类型
            processData: false,//*** //用于对data参数进行序列化处理 这里必须false
            success(data) {
                r(data)
            }
        })
    })
}
<<<<<<< HEAD:proxyapp/public/service/movies.js
export async function deletePic(file) {
    const {data} = await axiosIns.post(
        "/movies/deletePic",
        {file}
=======

// export async function deletePic(file) {
//     const { data } = await axiosIns.post(
//         "/students/deletePic",
//         {file}
//         )
//     return data;
// }

export async function searchStudents(condition) {  //搜索
    console.log(condition);
    
    const {data} = await axiosIns.post(
        "/api/schedules/searchStudents",
        condition
>>>>>>> 40b14582022bfa0bfbe300fd1a47676f90df4757:proxyapp/public/service/students.js
    )
    
    return data;
}