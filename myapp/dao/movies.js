const moviesModel = require("./models/moviesModel");

const dao = {}

dao.findmovies = async ({ page, limit, condition }) => {
    //limit   5
    //page    跳过
    //1        0
    //2        5
    //3        10
    //4        15
    // (page-1)*limit
    // console.log(condition);

    if (condition) {
        for (const key in condition) {
            if (condition.hasOwnProperty(key)) {
                const element = condition[key];
                condition[key] = new RegExp(element);
            }
        }
    }
    console.log(condition);
    const count = await moviesModel.countDocuments();
    const movies = await moviesModel
        .find(condition ? condition : {})
        // .populate("movies.name")//关联才用
        .skip((page - 1) * limit)
        .limit(limit);

    return {
        count,
        rows: movies
    }
}
dao.deleteOneMovies = async ({ _id }) => {
    return await moviesModel.deleteOne({ _id });
}
dao.updateOneMovies = async ({ _id, cname, area, ename, type, poster, time, update, score, count, intro, isClassic, director, actor, images }) => {
    return await moviesModel.updateOne({ _id }, { $set: { cname, area, ename, type, poster, time, update, score, count, intro, isClassic, director, actor, images } });
}
dao.createMovies = async ({ cname, area, ename, type, poster, time, update, score, count, intro, isClassic, director, actor, images }) => {
    return await moviesModel.create({ cname, area, ename, type, poster, time, update, score, count, intro, isClassic, director, actor, images });
}



module.exports = dao;