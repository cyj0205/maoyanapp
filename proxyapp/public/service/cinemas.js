let axiosIns;
function useToken() {
    axiosIns = axios.create({
        baseURL: 'http://' + location.host,
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

// //渲染
// export async function getStudents(userTxt) {
//     const { data } = await axiosIns.get(
//         "/api/students/",
//         {
//             params: { limit: pager.limit, page: pager.page }
//         }
//     )
//     return data;
// }

//删除
export async function delCinemas({ _id }) {
    const { data } = await axiosIns.delete("/api/cinemas/" + _id);
    return data;
}

//添加
export async function addCinemas(cinemasTxt) {
    const { data } = await axiosIns.post(
        "/api/cinemas/",
        cinemasTxt
    );
    return data;
}

//修改
export async function updateCinemas( _id,cinemassTxt) {
    const { data } = await axiosIns.put(
        "/api/cinemas/" + _id,
        cinemassTxt,
    );
    return data;
}

//查询
export async function searchCinemas(condition) {
    
    
    const {data} = await axiosIns.post(
        "/api/cinemas/searchCinemas",
        condition
    )
    console.log(condition);
    return data;
}