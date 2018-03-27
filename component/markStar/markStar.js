/*
* @Author: liyunjiao
* @Date:   2018-03-21 16:01:08
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-03-21 16:46:18
*/

Component({
    properties:{
        mark:{
            type:String,
            value:'0.0'
        }
    },
    data:{
        stars:[{
            className:'gray-star'
        }]
    },
    methods:{
        getStarClass(){
            let _this = this;
            let {mark} = this.properties;
            let count = Math.ceil(mark);
            let arr = [];
            for(let i=1;i<6;i++){
                if(i*2-count<2){
                    arr.push({className:'full-star'});
                } else {
                    arr.push({className:'gray-star'});
                }
            }
            this.setData({
                stars:arr
            });
        }
    },
    attached(){
        console.log('组件实例进入页面节点树时执行');
        this.getStarClass();
    },
    ready(){
        console.log('组件布局完成后执行，此时可以获取节点信息');
    }
});