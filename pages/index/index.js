//index.js
//获取应用实例
import domain from '../../utils/domain';
const {apiUrl} = domain;
const app = getApp()
const nTicket = '/PageSubArea/HotPlayMovies.api?locationId=290'
Page({
    data: {
        info:'hi xxx',
        movies:[]
    },
    getListData(){
        let _this = this;
        wx.request({
            url: `${apiUrl}${nTicket}`,
            success(res){
                let {data} = res;
                if(data.count>0){
                    _this.setData({'movies':data.movies});
                }
            }
        })
    },
    onLoad(){
        this.getListData();
    }
});
