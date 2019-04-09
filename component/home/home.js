import React, { Component } from 'react';
import Lazy from '../base/lazy.js';
import Swiper from '../base/swiper.min.js';
import './home.scss';

class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
            FengJingImgsUrl:[
                "http://www.xyji.top/img/web1.jpg",
                "http://www.xyji.top/img/web2.jpg"
            ],
            jishuImgsUrl:[
                "http://www.xyji.top/img/jishu1.png",
                "http://www.xyji.top/img/jishu2.png"
            ],
            lifeImgsUrl:[
                "http://www.xyji.top/img/life1.jpg",
                "http://www.xyji.top/img/life2.jpg",
                "http://www.xyji.top/img/life3.jpg"
            ],
            lvyouImgsUrl:[
                "http://www.xyji.top/img/lvyou1.jpg",
                "http://www.xyji.top/img/lvyou3.jpg",
                "http://www.xyji.top/img/lvyou2.jpg",
                "http://www.xyji.top/img/lvyou4.jpg",
                "http://www.xyji.top/img/lvyou5.jpg",
                "http://www.xyji.top/img/lvyou6.jpg",
                "http://www.xyji.top/img/lvyou7.jpg",
                "http://www.xyji.top/img/lvyou8.jpg",
            ],
            navList:["首页","个人简历","爱技术","爱生活","爱旅游"],
            navIndex:0,
            navTitle:["个人简历","爱技术","爱生活","爱旅游"],
            swipers:[]
		}
	}
	componentDidMount(){
        var _this = this,
            clientH = $(window).height(),
            navOne = _this.refs.navOne.offsetTop,
            navTwo = _this.refs.navTwo.offsetTop,
            navThree = _this.refs.navThree.offsetTop,
            navFour = _this.refs.navFour.offsetTop;        
        $(window).scroll(function(){
            Lazy.Load();
            var scrollTop =  document.body.scrollTop||document.documentElement.scrollTop;            
            //console.log("scrollTop:"+scrollTop+',navOne:'+navOne+',navTwo:'+navTwo+',navThree:'+navThree+',navFour:'+navFour);
            if(scrollTop > 0 && scrollTop >= navOne && scrollTop < navTwo){
                _this.setState({
                    navIndex:1
                });
            }else if(scrollTop >= navTwo && scrollTop < navThree){
                _this.setState({
                    navIndex:2
                });
            }else if(scrollTop >= navThree && scrollTop < navFour){
                _this.setState({
                    navIndex:3
                });
            }else if(scrollTop >= navFour){
                _this.setState({
                    navIndex:4
                });
            }else{
                 _this.setState({
                    navIndex:0
                });
            }
        });
        if($(".swiper-container").length > 0){
            var _swipers = [];
            $(".swiper-container").each(function(index,item){
                $(this).attr("id","swiper"+index);
                var mySwiper = new Swiper("#swiper"+index+'.swiper-container', {
                    autoplay:50000,
                    speed:500,
                    autoplayDisableOnInteraction :false,
                    pagination : ".swiper-pagination"
                });
                _swipers.push(mySwiper);
            });
            _this.setState({
                swipers:_swipers
            });
        }
        //为滚动轴绑定图片懒加载事件        
        setTimeout(function(){Lazy.Load();},10);//默认配置懒加载
    }
	navTab(index){ 
        var _this = this,
            clientH = $(window).height(),
            navOne = _this.refs.navOne.offsetTop,
            navTwo = _this.refs.navTwo.offsetTop,
            navThree = _this.refs.navThree.offsetTop,
            navFour = _this.refs.navFour.offsetTop;        
        switch (index) {
            case 1:
                window.scrollTo(0,navOne*0.85);
                break;
            case 2:
                window.scrollTo(0,navTwo*0.85);
                break;
            case 3:
                window.scrollTo(0,navThree*0.85);
                break;
            case 4:
                window.scrollTo(0,navFour*0.85);
                break;
            default:
                window.scrollTo(0,0);
                break;
        }        
    }
    render() {
        var _this = this;
		return (
			<div className="cmr-home">
                <section className="head-nav">
                    {
                        _this.state.navList.map(function(item,index){
                            return (
                                <div key={"nav"+index} onClick={_this.navTab.bind(_this,index)} className={_this.state.navIndex==index?"nav-item active":"nav-item"}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </section>
                <div className="head-height">
                </div>
                <div className="intitle">
                    <div className="in-text">我叫Night，是一名前端工程师</div>
                    <div className="in-text">爱技术，爱生活，爱旅游，爱运动</div>
                </div>
                <div className="head-img">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                _this.state.FengJingImgsUrl.map(function(item,index){
                                    return (
                                        <div key={"img"+index} className="swiper-slide">
                                            <img data-src={item} className="blog-img"/>
                                        </div>                                        
                                    )
                                })
                            }                            
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>                    
                </div>
                <div className="nav-title" ref="navOne">
                    {this.state.navTitle[0]}
                </div>
                <div className="nav-content">
                    <div className="content-info">
                        <span className="text">
                            姓名：王吉                            
                        </span>
                        <span className="text">
                            学历：大专
                        </span>
                        <span className="text">
                            籍贯：杭州
                        </span>
                        <span className="text">
                            从事：前端开发（3年）
                        </span>
                        <span className="text">
                            电话：13867158100
                        </span>
                        <span className="text">
                            mail：wangji817@126.com
                        </span>
                        <span className="text">
                            毕业：7年
                        </span>
                        <span className="text">
                            在职：武汉佰钧城（在杭）
                        </span>
                    </div>
                    <div className="content-desc">
                        详细介绍：
                        <div className="desc-indent">
                            14年从事移动端前端开发，主要负责公司现网一级二级页面，客户端H5页面，微信回流页面，客户端分享，wap浏览器唤起客户端，FIS资源整合管理。
                        </div>                        
                    </div>
                    <div className="content-desc">
                        职业技能：
                        <div className="desc-indent">
                            HTML5+Css3+Javascript+jQuery|Zepto+PhotoShop+Fiddler+React+Sass+gulp+Freemarker+FIS+IconFont+Sublime
                        </div>
                    </div>
                    <div className="content-desc">
                        自我评价：
                        <div className="desc-indent">
                            心态好、自律性强；具有良好的语言沟通能力及一定的文字功底；懂服从，重配合，具备良好的时间管理，代码管理；喜欢研究，学习新东西，适应能力强。
                        </div>
                    </div>
                </div>
                <div className="nav-title" ref="navTwo">
                    {this.state.navTitle[1]}
                </div>
                <div className="nav-content">
                    <div className="swiper-container jishu-swiper">
                        <div className="swiper-wrapper">
                            {
                                _this.state.jishuImgsUrl.map(function(item,index){
                                    return (
                                        <div key={"jishu"+index} className="swiper-slide content-info">
                                            <img data-src={item} className="jishu-img"/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>                    
                </div>
                <div className="nav-title" ref="navThree">
                    {this.state.navTitle[2]}
                </div>
                <div className="nav-content">
                    <div className="life-info">                        
                        {
                            _this.state.lifeImgsUrl.map(function(item,index){
                                return (
                                    <div key={"life"+index} className="life-swiper">
                                        <img data-src={item} className="life-img"/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="nav-title" ref="navFour">
                    {this.state.navTitle[3]}
                </div>
                <div className="nav-content">
                    <div className="lvyou-info">
                        {
                            _this.state.lvyouImgsUrl.map(function(item,index){
                                return (
                                    <div key={"lvyou"+index} className="lvyou-swiper">
                                        <img data-src={item} className="lvyou-img"/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
		)
    }
}

export default Home;