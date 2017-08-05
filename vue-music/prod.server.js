var express = require('express')
var config = require('./config/index')
var axios = require('axios')
var app = express()
var apiRoutes=express.Router()

apiRoutes.get('/getDiscList',function(req,res){
  var url='https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  axios.get(url,{
    headers:{
      referer:'https://c.y.qq.com/',
      host:'c.y.qq.com'
    },
    params:req.query
  }).then((response)=>{
    res.json(response.data)
  }).catch((e)=>{
    console.log(e)
  })
})



app.use('/api',apiRoutes)
app.use(express.static('./dist'))

var port = process.env.PORT || config.build.port
module.exports=app.listen(port,function(err){
	if(err){
		cnsole.log(err)
		return
	}
	console.log('listen at http://localhsot')
})