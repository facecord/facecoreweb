/*!
 * jQuery face Recognition Plugin v1.0.0
 *
 * Copyright 2013 facecore
 * Released under the GPL license
 */
(function ($) {

    //使用选项初始化插件
    $.fn.faceRecognition = function (options) {
        var opts = $.extend({}, this.defaults, options);
        return opts;
    };

    //默认选项
    $.fn.faceRecognition.defaults = {
        hello: 'Welcome use face recognition API.',

        //人脸识别正式环境接口
        server: 'http://v1.facecore',

        //阈值
        threshold: 0.6,

        //人脸比对
        faceCompare: '/api/facecompare/',

        //获取人脸数
        faceDetectCount: '/api/facedetectcount/',

        //获取人脸特征
        faceDetect: '/api/facedetect/'
    };

    //获取人脸相似度
    $.fn.faceRecognition.faceCompare = function (originFace, targetFace, param, callback) {
        $.ajax({
            url: this.defaults.server + this.defaults.faceCompare,
            crossDomain: true,
            cache: false,
            type: 'post',
            async: true,
            dataType: 'json',
            data: { face1: originFace, face2: targetFace },
            success: function (data, textStatus) {
                (callback && typeof (callback) === "function") && callback(param, data, textStatus);
            }
        });
    };

    //获取人脸数
    $.fn.faceRecognition.faceDetectCount = function (imageBase64, callback) {
        $.ajax({
            url: this.defaults.server + this.defaults.faceDetectCount,
            crossDomain: true,
            cache: false,
            type: 'post',
            async: true,
            dataType: 'json',
            data: { faceImage: imageBase64 },
            success: function (data, textStatus) {
                (callback && typeof (callback) === "function") && callback(data, textStatus);
            }
        });
    };

    //获取人脸特征
    $.fn.faceRecognition.faceDetect = function (imageBase64, callback) {
        $.ajax({
            url: this.defaults.server + this.defaults.faceDetect,
            crossDomain: true,
            cache: false,
            type: 'post',
            async: true,
            dataType: 'json',
            data: { faceImage: imageBase64 },
            success: function (data, textStatus) {
                (callback && typeof (callback) === "function") && callback(data, textStatus);
            }
        });
    };

    //hello
    $.fn.faceRecognition.test = function (callback) {
        (callback && typeof (callback) === "function") && callback(this.defaults.hello);
    };

})(jQuery);
