/*
* @Author: liyunjiao
* @Date:   2018-03-23 16:35:26
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-03-23 17:19:09
*/
import domain from '../../utils/domain';
let {apiUrl} = domain;
const nTicket = '/movie/detail.api?locationId=290&movieId='
Page({
    data:{
        mid:'你好'
    },
    onLoad(opt){
        let {id}=opt;
        this.setData({
            mid:id
        });
        this.getMovieDetail(id);
    },
    getMovieDetail(id){
        let _this = this;
        wx.request({
            url:`${apiUrl}${nTicket}${id}`,
            success(res){
                console.log(res);
                let {titleCn} = res.data;
                wx.setNavigationBarTitle({ // 调用端能力设置titlebar
                    title:titleCn+' 详情',
                    success(){
                        console.log("当前微信小程序的页面标题为");
                    },
                    complete(){
                        console.log("动态修改微信小程序的页面标题-complete");
                    }
                });
            }
        });
    }
});