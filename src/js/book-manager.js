var data = {
    "bookList": [
        {
            "bookId": 1,
            "bookName": "马克思列宁主义",
            "author": "马克思",
            "publishingHouse": "新华",
            "type": "小说",
            "num": 10,
            "canLend": 0
        },
        {
            "bookId": 1,
            "bookName": "马克思列宁主义",
            "author": "马克思",
            "publishingHouse": "新华",
            "type": "小说",
            "num": 10,
            "canLend": 0
        }, {
            "bookId": 1,
            "bookName": "马克思列宁主义",
            "author": "马克思",
            "publishingHouse": "新华",
            "type": "小说",
            "num": 10,
            "canLend": 1
        }, {
            "bookId": 1,
            "bookName": "马克思列宁主义",
            "author": "马克思",
            "publishingHouse": "新华",
            "type": "小说",
            "num": 10,
            "canLend": 0
        }, {
            "bookId": 1,
            "bookName": "马克思列宁主义",
            "author": "马克思",
            "publishingHouse": "新华",
            "type": "小说",
            "num": 10,
            "canLend": 0
        }, {
            "bookId": 1,
            "bookName": "马克思列宁主义",
            "author": "马克思",
            "publishingHouse": "新华",
            "type": "小说",
            "num": 10,
            "canLend": 1
        }, {
            "bookId": 1,
            "bookName": "马克思列宁主义",
            "author": "马克思",
            "publishingHouse": "新华",
            "type": "小说",
            "num": 10,
            "canLend": 1
        }, {
            "bookId": 1,
            "bookName": "马克思列宁主义",
            "author": "马克思",
            "publishingHouse": "新华",
            "type": "小说",
            "num": 10,
            "canLend": 1
        }, {
            "bookId": 1,
            "bookName": "马克思列宁主义",
            "author": "马克思",
            "publishingHouse": "新华",
            "type": "小说",
            "num": 10,
            "canLend": 1
        }, {
            "bookId": 1,
            "bookName": "马克思列宁主义",
            "author": "马克思",
            "publishingHouse": "新华",
            "type": "小说",
            "num": 10,
            "canLend": 1
        }, {
            "bookId": 1,
            "bookName": "马克思列宁主义",
            "author": "马克思",
            "publishingHouse": "新华",
            "type": "小说",
            "num": 10,
            "canLend": 1
        }, {
            "bookId": 1,
            "bookName": "马克思列宁主义",
            "author": "马克思",
            "publishingHouse": "新华",
            "type": "小说",
            "num": 10,
            "canLend": 0
        }, {
            "bookId": 1,
            "bookName": "马克思列宁主义",
            "author": "马克思",
            "publishingHouse": "新华",
            "type": "小说",
            "num": 10,
            "canLend": 0
        }, {
            "bookId": 1,
            "bookName": "马克思列宁主义",
            "author": "马克思",
            "publishingHouse": "新华",
            "type": "小说",
            "num": 10,
            "canLend": 0
        }, {
            "bookId": 1,
            "bookName": "马克思列宁主义",
            "author": "马克思",
            "publishingHouse": "新华",
            "type": "小说",
            "num": 10,
            "canLend": 0
        }, {
            "bookId": 1,
            "bookName": "马克思列宁主义",
            "author": "马克思",
            "publishingHouse": "新华",
            "type": "小说",
            "num": 10,
            "canLend": 1
        }
    ],
    "student": {
        "studentId": "123456789",
        "name": "吴楠1",
        "sex": "女",
        "libraryCardNo": "12345678",
        "classId": "123",
        "studyState": 0,
        "telephone": "123456789",
        "email": "1030****@qq.com",
        "books": "世界简史,编年史"
    },
    "bookInfo": {
        "bookId": 1,
        "bookName": "马克思列宁主义",
        "author": "马克思",
        "publishingHouse": "新华",
        "type": "小说",
        "num": 10,
        "canLend": 0,
        "bookBriefIntroduction": "hahahahaha",
        "pages": 500,
        "version": "第四版"
    }
}
$(function () {
    //
    var BookManager = {
        getBookInfoData: function (tp, pageSize, finalData) {
            var dataSpace = '<div class="data-render"><table class="table table-hover" id="Pui">';
            dataSpace += '<thead><tr>';
            dataSpace += '<td><p>书籍编号</p></td>';
            dataSpace += '<td><p>书籍名称</p></td>';
            dataSpace += '<td><p>书籍作者</p></td>';
            dataSpace += '<td><p>出版社</p></td>';
            dataSpace += '<td><p>书籍类型</p></td>';
            dataSpace += '<td><p>是否可借</p></td>';
            dataSpace += '</tr></thead>';
            for (var i = 0; i < pageSize; i++) {
                var dataId = pageSize * (tp - 1) + i;
                if (dataId + 1 > finalData.length) {
                    break;
                } else {
                    dataSpace += '<tr class="show-detail-info" data-toggle="modal" data-target="#book-detail-info">';
                    dataSpace += '<td><p>' + finalData[dataId].bookId + '</p></td>';
                    dataSpace += '<td><p>' + finalData[dataId].bookName + '</p></td>';
                    dataSpace += '<td><p>' + finalData[dataId].author + '</p></td>';
                    dataSpace += '<td><p>' + finalData[dataId].publishingHouse + '</p></td>';
                    dataSpace += '<td><p>' + finalData[dataId].type + '</p></td>';
                    dataSpace +=
                        finalData[dataId].canLend == 0 ? '<td>' +
                        '<button class="btn btn-large btn-primary" type="button" ' +
                        'style="width: 74px">借阅</button>' : '<td><p class="text-success">已经借出去</p></td>';
                    dataSpace += '</tr>';
                }
            }
            dataSpace += '</table></div>'
            $("#book-info-pager-div").html(dataSpace);
        },
        checkBookCondition: function (tp, pageSize, finalData) {
            var dataSpace = '<div class="data-render"><table class="table table-hover" id="Pui">';
            dataSpace += '<thead><tr>';
            dataSpace += '<td><p>书籍编号</p></td>';
            dataSpace += '<td><p>书籍名称</p></td>';
            dataSpace += '<td><p>书籍作者</p></td>';
            dataSpace += '<td><p>出版社</p></td>';
            dataSpace += '<td><p>书籍类型</p></td>';
            dataSpace += '<td><p>书籍剩余数量</p></td>';
            dataSpace += '</tr></thead>';
            for (var i = 0; i < pageSize; i++) {
                var dataId = pageSize * (tp - 1) + i;
                if (dataId + 1 > finalData.length) {
                    break;
                } else {
                    dataSpace += '<tr>';
                    dataSpace += '<td><p>' + finalData[dataId].bookId + '</p></td>';
                    dataSpace += '<td><p>' + finalData[dataId].bookName + '</p></td>';
                    dataSpace += '<td><p>' + finalData[dataId].author + '</p></td>';
                    dataSpace += '<td><p>' + finalData[dataId].publishingHouse + '</p></td>';
                    dataSpace += '<td><p>' + finalData[dataId].type + '</p></td>';
                    dataSpace +=
                        finalData[dataId].canLend == 0 ? '<td>' +
                        '<button class="btn btn-large btn-primary" type="button" ' +
                        'style="width: 74px">借阅</button>' : '<td><p class="text-success">已经借出去</p></td>';
                    dataSpace += '<td><button class="btn btn-primary" ' +
                        'data-toggle="modal"data-target="#lendModal">借书</button></td>';
                    dataSpace += '<td><button class="btn btn-primary" ' +
                        'data-toggle="modal"data-target="#returnModal">还书</button></td>';
                    dataSpace += '</tr>';
                }
            }
            dataSpace += '</table></div>'
            $("#book-read-info-pager-div").html(dataSpace);
        },
        setSelfInfo: function (student) {
            var userInfo = '<table class="table table-bordered"><caption></caption><thead></thead><tbody><tr>' +
                '<td class="first-col">姓名</td> <td class="second-col">' + student.name +
                '</td><td class="first-col">性别</td><td class="second-col">' + student.sex +
                '</td></tr><tr></tr><tr><td>借书证</td><td>' + student.libraryCardNo +
                '</td><td>学号</td><td>' + student.studentId +
                '123456789</td></tr><tr><td>班级号</td><td>' + student.classId +
                '</td><td>状态</td><td>' + student.studyState +
                '</td></tr><tr><td colspan="4">联系方式（如联系方式有变动请及时修改，以便能及时联系到你。谢谢！）</td></tr>' +
                '<tr><td>手机号码:</td><td>' + student.telephone +
                '</td><td>第二联系号码:</td><td>' + student.telephone +
                '</td></tr><tr><td>QQ:</td><td></td><td>电子邮箱:</td><td>' + student.email +
                '</td></tr><tr><td colspan="5">所借阅的书籍:' + student.books +
                '</td></tr><tr><td colspan="5"> <div align="center">' +
                '<button type="button" class="btn">联系方式修改</button>' +
                '</div></td></tr></tbody></table>';
            $("#userInfo").html(userInfo);
        },
        showBookDetailInfo: function (bookRow) {
            $($(bookRow).find("td")[0]).text();
            var bookDetailInfo = '<table class="table"><tbody><tr><td class="book-info-width">书籍名称:</td> ' +
                '<td class="book-info-width">' + data.bookInfo.bookName +
                '</td> <td class="book-info-width">作者:</td> <td class="book-info-width">' + data.bookInfo.author +
                '</td> </tr> <tr> <td>页数:</td> <td>' + data.bookInfo.pages +
                '</td> <td>版本:</td> <td>' + data.bookInfo.version +
                '</td> </tr> <tr> <td>出版社:</td> <td>' + data.bookInfo.publishingHouse +
                '</td> <td>类型:</td> <td>' + data.bookInfo.type +
                '</td> </tr> <tr> <td rowspan="2"  class="info-brief">图书简介:</td> ' +
                '<td rowspan="2" colspan="3">' + data.bookInfo.bookBriefIntroduction +
                '</td> </tr> </tbody> </table>';
            $("#book-detail-info").find(".modal-body").html(bookDetailInfo);

        }
    }
    $(window).load(function () {
        var bookInfo = data.bookList;
        var bookInfoPage = new PAGER();
        pageObjArr.push(bookInfoPage);
        bookInfoPage.initPager(1, bookInfo.length, 10, 7, 'book-info-pager', 'book-info-pager-div',
            bookInfo, BookManager.getBookInfoData, 0);
        var readInfo = new PAGER();
        pageObjArr.push(readInfo);
        readInfo.initPager(1, bookInfo.length, 10, 7, 'book-read-info-pager', 'book-read-info-pager-div',
            bookInfo, BookManager.checkBookCondition, 1);
        BookManager.setSelfInfo(data.student);
    });

    $("#book-info-pager").on("click", ".show-detail-info", function () {
        BookManager.showBookDetailInfo($(this));
    });
});