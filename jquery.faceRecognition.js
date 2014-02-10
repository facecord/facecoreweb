/*
 * jQuery face Recognition Plugin v1.0.1
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

        //授权应用appkey，默认演示key.
        appkey: '34275f908ab1846684ef0dcbc37661db',

        //自定义默认阈值
        threshold: 0.875,

        //server hello
        hello: '/api/hello/',

        //人脸比对
        faceCompare: '/api/facecompare/',

        //获取人脸数
        faceDetectCount: '/api/facedetectcount/',

        //获取人脸特征
        faceDetect: '/api/facedetect/',

        //获取URL图像人脸特征
        urlFaceDetect: '/api/urlfacedetect/',

        //获取相似脸
        personFaceSimilar: '/api/personface/similar/',

        //获取全部人脸
        personFaceGetAll: '/api/personface/getall/',

        //获取指定id人脸
        personFaceGet: '/api/personface/',

        //添加一个人脸
        personFaceAdd: '/api/personface/',

        //修改一个人脸
        personFaceUpdate: '/api/personface/',

        //删除一个人脸
        personFaceDelete: '/api/personface/',
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
    $.fn.faceRecognition.hello = function (callback, errorCallback) {
        
        $.ajax({
            url: this.defaults.server + this.defaults.hello + '?appkey=' + this.defaults.appkey,
            crossDomain: true,
            cache: false,
            type: 'post',
            async: true,
            success: function (data, textStatus) {
                (callback && typeof (callback) === "function") && callback(data, textStatus);
            },
            error: function (textStatus) {
                (errorCallback && typeof (errorCallback) === "function") && errorCallback(textStatus);
            }
        });
        
    };

    //获取URL图像人脸特征
    $.fn.faceRecognition.urlFaceDetect = function (imageUrl, callback, errorCallback) {
        
        $.ajax({
            url: this.defaults.server + this.defaults.urlFaceDetect + '?appkey=' + this.defaults.appkey,
            crossDomain: true,
            cache: false,
            type: 'post',
            async: true,
            data: { url: imageUrl },
            success: function (data, textStatus) {
                (callback && typeof (callback) === "function") && callback(data, textStatus);
            },
            error: function (textStatus) {
                (errorCallback && typeof (errorCallback) === "function") && errorCallback(textStatus);
            }
        });
        
    };

    //获取相似脸
    $.fn.faceRecognition.personFaceSimilar = function (feature, threshold, maxResult, callback, errorCallback) {

        $.ajax({
            url: this.defaults.server + this.defaults.personFaceSimilar + '?appkey=' + this.defaults.appkey,
            crossDomain: true,
            cache: false,
            type: 'post',
            async: true,
            data: { Base64Feature: feature, threshold: threshold, maxResult: maxResult },
            success: function (data, textStatus) {
                (callback && typeof (callback) === "function") && callback(data, textStatus);
            },
            error: function (textStatus) {
                (errorCallback && typeof (errorCallback) === "function") && errorCallback(textStatus);
            }
        });

    };

    //获取全部人脸
    $.fn.faceRecognition.personFaceGetAll = function (callback, errorCallback) {

        $.ajax({
            url: this.defaults.server + this.defaults.personFaceGetAll + '?appkey=' + this.defaults.appkey,
            crossDomain: true,
            cache: false,
            type: 'get',
            async: true,
            success: function (data, textStatus) {
                (callback && typeof (callback) === "function") && callback(data, textStatus);
            },
            error: function (textStatus) {
                (errorCallback && typeof (errorCallback) === "function") && errorCallback(textStatus);
            }
        });

    };

    //获取指定id人脸
    $.fn.faceRecognition.personFaceGet = function (id, callback, errorCallback) {

        $.ajax({
            url: this.defaults.server + this.defaults.personFaceGet + '?appkey=' + this.defaults.appkey,
            crossDomain: true,
            cache: false,
            type: 'get',
            async: true,
            data: { id: id },
            success: function (data, textStatus) {
                (callback && typeof (callback) === "function") && callback(data, textStatus);
            },
            error: function (textStatus) {
                (errorCallback && typeof (errorCallback) === "function") && errorCallback(textStatus);
            }
        });

    };

    //添加一个人脸
    $.fn.faceRecognition.personFaceAdd = function (nick, feature, faceimage, callback, errorCallback) {

        $.ajax({
            url: this.defaults.server + this.defaults.personFaceAdd + '?appkey=' + this.defaults.appkey,
            crossDomain: true,
            cache: false,
            type: 'post',
            async: true,
            data: { Nick: nick, Base64Feature: feature, Base64FaceImage: faceimage },
            success: function (data, textStatus) {
                (callback && typeof (callback) === "function") && callback(data, textStatus);
            },
            error: function (textStatus) {
                (errorCallback && typeof (errorCallback) === "function") && errorCallback(textStatus);
            }
        });

    };

    //修改一个人脸
    $.fn.faceRecognition.personFaceUpdate = function (faceid, nick, feature, faceimage, callback, errorCallback) {

        $.ajax({
            url: this.defaults.server + this.defaults.personFaceUpdate + '?appkey=' + this.defaults.appkey,
            crossDomain: true,
            cache: false,
            type: 'put',
            async: true,
            data: { FaceID: faceid, Nick: nick, Base64Feature: feature, Base64FaceImage: faceimage },
            success: function (data, textStatus) {
                (callback && typeof (callback) === "function") && callback(data, textStatus);
            },
            error: function (textStatus) {
                (errorCallback && typeof (errorCallback) === "function") && errorCallback(textStatus);
            }
        });

    };

    //删除一个人脸
    $.fn.faceRecognition.personFaceDelete = function (id, callback, errorCallback) {

        $.ajax({
            url: this.defaults.server + this.defaults.personFaceDelete + '?appkey=' + this.defaults.appkey,
            crossDomain: true,
            cache: false,
            type: 'delete',
            async: true,
            data: { id: id },
            success: function (data, textStatus) {
                (callback && typeof (callback) === "function") && callback(data, textStatus);
            },
            error: function (textStatus) {
                (errorCallback && typeof (errorCallback) === "function") && errorCallback(textStatus);
            }
        });

    };

})(jQuery);