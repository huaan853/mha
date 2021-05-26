//自定义方法 第一个参数和第二个参数做比较
Handlebars.registerHelper("equals", function(v1, v2, options) {
	if(v1 == v2) {
		//满足添加继续执行
		return options.fn(this);
	} else {
		//不满足条件执行{{else}}部分
		return options.inverse(this);
	}
});

//自定义方法 判断第一个参数是否大于第二个参数
Handlebars.registerHelper("compare", function(v1, v2, options) {
	if(v1 == v2) {
		//满足添加继续执行
		return options.fn(this);
	} else {
		//不满足条件执行{{else}}部分
		return options.inverse(this);
	}
});

//自定义方法 中文编码
Handlebars.registerHelper("encodeURI", function(v1, options) {
	//	if(v1 == v2) {
	//		//满足添加继续执行
	//		return options.fn(this);
	//	} else {
	//		//不满足条件执行{{else}}部分
	//		return options.inverse(this);
	//	}
	return encodeURI(encodeURI(v1));
});

//自分割字符串
Handlebars.registerHelper("split", function(v1, options) {
	return v1.split(",");
});
//扩展字段option的拆分
Handlebars.registerHelper('splitAndEach', function(v1, options) {
	var items = v1.split(",");
	var out = '<option value=""></option>';
	for(var i = 0; i < items.length; i++) {
		var item = options.fn(items[i]);
		out = out + '<option value="' + item + '">' + item + '</option>';
	}
	return out;
});
//扩展字段复选框的拆分
Handlebars.registerHelper('splitAndEach2', function(v1, mark,options) {
	var items = v1.split(",");
	var out = '';
	for(var i = 0; i < items.length; i++) {
		var item = options.fn(items[i]);
		out = out + '<input type="checkbox" name="'+mark+'" value="'+item+'">'+item+'';
	}
	return out;
});
//自定义方法 第一个参数和第二个参数做比较
Handlebars.registerHelper("notEquals", function(v1, v2, options) {
	if(v1 != v2) {
		//满足添加继续执行
		return options.fn(this);
	} else {
		//不满足条件执行{{else}}部分
		return options.inverse(this);
	}
});

//自定义方法 日程的showtime改成不带年月日
Handlebars.registerHelper("rcShowtime", function(v1, options) {
	return v1.substring(10,v1.length);
});