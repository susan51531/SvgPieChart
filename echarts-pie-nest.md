### 饼图

使用[Echarts](http://echarts.baidu.com/demo.html#pie-nest)


```javascript
app.title = '嵌套环形图';

option = {
    backgroundColor: '#fff',
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: ['66%', '89%'],

            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {   
                    value:0.5,
                    itemStyle: {
                        normal: {
                            color: '#fff'
                        }
                    }
                },
                {
                    value:24,
                    itemStyle: {
                        normal: {
                            color: '#ffb600'
                        }
                    }
                },
                {   
                    value:0.5,  
                    itemStyle: {
                        normal: {
                            color: '#fff'
                        }
                    }
                },
                {
                    value:75,
                    itemStyle: {
                        normal: {
                            color: '#2d86e1'
                        }
                    }
                }
            ],
            silent: true
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['95%', '100%'],
            label: {
                normal: {
                    show: false
                }
            },
            data:[
                {   value:0.5,
                    itemStyle: {
                        normal: {
                            color: '#fff'
                        }
                    }
                },
                {
                    value:24,
                    itemStyle: {
                        normal: {
                            color: '#fff'
                        }
                    }
                },
                {   
                    value:0.5,  
                    itemStyle: {
                        normal: {
                            color: '#fff'
                        }
                    }
                },
                {
                    value:75,
                    itemStyle: {
                        normal: {
                            color: '#2d86e1'
                        }
                    }
                }
            ],
            silent: true
        }
    ]
};
```
