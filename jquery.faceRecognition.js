/*
 * jQuery face Recognition Plugin v1.0.0
 * 
 * Copyright 2013 facecore.cn
 * Released under the LGPL license
 * author wangya
 */
(function ($) {

    //使用选项初始化插件
    $.fn.faceRecognition = function (options) {
        var opts = $.extend({}, this.defaults, options);
        return opts;
    };

    //默认选项
    $.fn.faceRecognition.defaults = {
        
        //人脸识别接口主机
        server: 'http://api.facecore.cn',

        //自定义默认阈值
        threshold: 0.875,

        //人脸比对
        faceCompare: '/api/facecompare/',

        //获取人脸数
        faceDetectCount: '/api/facedetectcount/',

        //获取人脸特征
        faceDetect: '/api/facedetect/',
        
        //server hello
        hello: '/api/hello/',
        
        //授权应用appkey，默认演示key.
        appkey:'8c1be718fa976083a6940009f36c056e'
    };

    //获取人脸相似度
    $.fn.faceRecognition.faceCompare = function (originFace, targetFace, param, callback, errorCallback) {
        $.ajax({
            url: this.defaults.server + this.defaults.faceCompare + '?appkey=' + this.defaults.appkey,
            crossDomain: true,
            cache: false,
            type: 'post',
            async: true,
            dataType: 'json',
            data: { face1: originFace, face2: targetFace },
            success: function (data, textStatus) {
                (callback && typeof (callback) === "function") && callback(param, data, textStatus);
            },
            error: function (textStatus) {
                (errorCallback && typeof (errorCallback) === "function") && errorCallback(textStatus);
            }
        });
    };

    //获取人脸数
    $.fn.faceRecognition.faceDetectCount = function (imageBase64, callback, errorCallback) {
        $.ajax({
            url: this.defaults.server + this.defaults.faceDetectCount + '?appkey=' + this.defaults.appkey,
            crossDomain: true,
            cache: false,
            type: 'post',
            async: true,
            dataType: 'json',
            data: { faceImage: imageBase64 },
            success: function (data, textStatus) {
                (callback && typeof (callback) === "function") && callback(data, textStatus);
            },
            error: function (textStatus) {
                (errorCallback && typeof (errorCallback) === "function") && errorCallback(textStatus);
            }
        });
    };

    //获取人脸特征
    $.fn.faceRecognition.faceDetect = function (imageBase64, callback, errorCallback) {
        $.ajax({
            url: this.defaults.server + this.defaults.faceDetect + '?appkey=' + this.defaults.appkey,
            crossDomain: true,
            cache: false,
            type: 'post',
            async: true,
            dataType: 'json',
            data: { faceImage: imageBase64 },
            success: function (data, textStatus) {
                (callback && typeof (callback) === "function") && callback(data, textStatus);
            },
            error: function (textStatus) {
                (errorCallback && typeof (errorCallback) === "function") && errorCallback(textStatus);
            }
        });
    };

    //服务器hello接口
    $.fn.faceRecognition.hello = function(callback, errorCallback) {
        $.ajax({
            url: this.defaults.server + this.defaults.hello + '?appkey=' + this.defaults.appkey,
            crossDomain: true,
            cache: false,
            type: 'post',
            async: true,
            success: function(data, textStatus) {
                (callback && typeof(callback) === "function") && callback(data, textStatus);
            },
            error: function (textStatus) {
                (errorCallback && typeof (errorCallback) === "function") && errorCallback(textStatus);
            }
        });
    };
    
})(jQuery);