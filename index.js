/**
 * Bài tập 1 : Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất 3 số theo thứ tự tăng dần
 * input: nhập 3 số nguyên
 * process:lấy input
 *         xét điều kiện 
 * output : in kết quả
 */
var num1 = 3;
var num2 = 9;
var num3 = 3;

var numberSort;

if (num1 > num2 && num1 > num3) {
    numberSort = num3 + '<' + num2 + '<' + num1

} else if (num1 > num2 && num3 > num2) {
    numberSort = num2 + '<' + num3 + '<' + num1

} else if (num1 > num2 && num3 > num1) {
    numberSort = num2 + '<' + num1 + '<' + num3

} else if (num2 > num1 && num2 > num3) {
    numberSort = num3 + '<' + num1 + '<' + num2

} else if (num2 > num3 && num3 > num1) {
    numberSort = num1 + '<' + num3 + '<' + num2

} else {
    numberSort = num1 + '< ' + num2 + '<' + num3
}

console.log(numberSort)

/**
 * bài tập 2 : Viết chương trình “Chào hỏi” các thành viên trong gia đình với các đặc điểm. Đầu tiên máy sẽ
hỏi ai sử dụng máy. Sau đó dựa vào câu trả lời và đưa ra lời chào phù hợp. Giả sử trong gia
đình có 4 thành viên: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E)
    input : nhập các thành viên 
    process : lấy input
              xét điều kiện
    output :   in kết quả
 */
var who = 'd';
switch (who) {
    case "B":
        console.log(
            "Xin chào Bố"
        );
        break;
    case "M":
        console.log(
            "Xin chào Mẹ"
        );
        break;

    case "A":
        console.log(
            "Xin chào Anh trai"
        );
        break;
    case "E":
        console.log(
            "Xin chào Em gái"
        );
        break;
    default:
        console.log(
            "Xin chào người lạ"
        );
        break;
}


/**
 * bài tập 3 :Cho 3 số nguyên. Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn.
 * 
 * input : nhập 3 số nguyen
 * process : lấy input , 
 *           tìm số lẻ , số chẵn
 *            đếm số lẻ , chẵn
 * output : in kết quả
 */

var num1 = 5
var num2 = 4
var num3 = 5


var total = 0;

if (num1 % 2 == 0) {
    total += 1
}

if (num2 % 2 == 0) {
    total += 1

}
if (num3 % 2 == 0) {
    total += 1
}




console.log("tổng các số chẵn là", total, "tổng các số lẻ là", 3 - total)


/**
 * bài tập 4 :Viết chương trình cho nhập 3 cạnh của tam giác. Hãy cho biết đó là tam giác gì?
 * input : nhập 3 cạnh của tam giac
 * process : lấy input
 *            
 *           xét điều kiện 
 * 
 * output : in kết quả
 */
var canh1 = 6
var canh2 = 5
var canh3 = 5

var dudoan;
if (canh1 == canh2 && canh2 == canh3) {
    dudoan = 'tam giác đều'
} else if (canh1 == canh2 || canh2 == canh3 || canh3 == canh1) {
    dudoan = 'tam giác cân'
} else if (canh1 * canh1 == canh2 * canh2 + canh3 * canh3 || canh2 * canh2 == canh3 * canh3 + canh1 * canh1 || canh3 * canh3 == canh2 * canh2 + canh1 * canh1) {
    dudoan = "tam giác vuông"
}
console.log(dudoan)


/**
 * bài tập 5 :Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, không cần kiểm tra hợp lệ).
Tìm ngày, tháng, năm của ngày tiếp theo. Tương tự tìm ngày tháng năm của ngày trước đó.
 * input : nhập ngày , tháng, năm
 * process : lấy input
 *           xét 1 tháng có bao nhiêu ngày
 *           xét điều kiện
 * 
 * output : in kết quả
 */
var day = 1
var month = 1
var year = 2022

var DayInMonth
var theMonthOfTheYear
var yesterday
var tomorrow

switch (theMonthOfTheYear) {
    case 4:
    case 6:
    case 9:
    case 11:
        DayInMonth = 30

        break;
    case 2:
        DayInMonth = 28
        break;
    default:
        DayInMonth = 31
        break;
}
if (year > 0 && month > 0 && month < 13 && day > 0 && day <= DayInMonth) {
    tomorrow = day + 1
    if (month != 12 && day == DayInMonth) {
        tomorrow = 1
        month += 1
    } else if (month == 12 && day == DayInMonth) {
        tomorrow = 1
        month = 1
        year += 1
    }
}

if (year > 0 && month > 0 && month < 13 && day > 0 && day <= DayInMonth) {
    yesterday = day - 1
    theMonthOfTheYear = month
    var oldYear = year
    if (day == 1 && month == 1) {

        yesterday = DayInMonth
        theMonthOfTheYear = 12
        oldYear = year - 1
    } else if (day == 1 && month != 12) {
        yesterday = DayInMonth
        theMonthOfTheYear = month - 1
    }
}
console.log('Ngày Mai : ', tomorrow, month, year)
console.log('Ngày Hôm Qua : ', yesterday, theMonthOfTheYear, oldYear)

/**
 * bài tập 6 :Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày. (bao gồm tháng
của năm nhuận).
 * input : nhập  tháng, năm
 * process : lấy input
 *            xét số ngày trong tháng 
 *            xét năm nhuận
 *           xét điều kiện
 * 
 * output : in kết quả
 */

var month = 2
var year = 2024

var dayInMonth

switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
        dayInMonth = 30

        break;
    case 2:

        if (year % 4 == 0) {
            dayInMonth = 29
        } else {
            dayInMonth = 28
        }
        break;
    default:
        dayInMonth = 31
        break;
}
console.log('Tháng', month + ' Năm ', year + ' có ', dayInMonth + ' Ngày')

/**
 * bài tập 7 :Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó
 * input : nhập  3 số nguyên
 * process : lấy input
 *            lấy số hàng trăm , hàng chục , hàng đơn vị
 *           xét điều kiện
 * 
 * output : in kết quả
 */

var num = 646
var hundreds = Math.floor(num / 100) % 10
var dozens = Math.floor(num / 10) % 10
var units = num % 10

switch (hundreds) {
    case 1:
        hundreds = 'Một trăm'
        break
    case 2:
        hundreds = 'Hai trăm'
        break
    case 3:
        hundreds = 'Ba trăm'
        break
    case 4:
        hundreds = 'Bốn trăm'
        break
    case 5:
        hundreds = 'Năm trăm'
        break
    case 6:
        hundreds = 'Sáu trăm'
        break
    case 7:
        hundreds = 'Bảy trăm'
        break
    case 8:
        hundreds = 'Tám trăm'
        break
    case 9:
        hundreds = 'Chín trăm'
        break
}

switch (dozens) {
    case 0:
        dozens = 'linh'
    case 1:
        dozens = 'mười'
        break
    case 2:
        dozens = 'Hai mươi'
        break
    case 3:
        dozens = 'Ba mươi'
        break
    case 4:
        dozens = 'Bốn mươi'
        break
    case 5:
        dozens = 'Năm mươi'
        break
    case 6:
        dozens = 'Sáu mươi'
        break
    case 7:
        dozens = 'Bảy mươi'
        break
    case 8:
        dozens = 'Tám mươi'
        break
    case 9:
        dozens = 'Chín mươi'
        break
}
switch (units) {
    case 0:
        units = 'không'
    case 1:
        units = 'một'
        break
    case 2:
        units = 'Hai '
        break
    case 3:
        units = 'Ba '
        break
    case 4:
        units = 'Bốn '
        break
    case 5:
        units = 'Năm '
        break
    case 6:
        units = 'Sáu '
        break
    case 7:
        units = 'Bảy '
        break
    case 8:
        units = 'Tám '
        break
    case 9:
        units = "Chín"
        break
}
console.log(hundreds, dozens, units)

/**
 * bài tập 8 :Cho biết tên và tọa độ nhà của 3 sinh viên. Cho biết tọa độ của trường đại học. Viết chương
trình in tên sinh viên xa trường nhất
 * input : nhập tên và tọa độ nhà của 3 sinh viên , tọa độ trường đại học
 * process : lấy input
 *            tính tọa độ
 *           xét điều kiện
 * 
 * output : in kết quả
 */
var name1 = ' Lò A Sảng'
var x1 = 1
var y1 = 3
var name2 = ' Lào A Lý'
var x2 = 3
var y2 = 4
var name3 = ' Lừng A Líu'
var x3 = 2
var y3 = 5
var xschool = 5
var yschool = 6

var toado1 = Math.sqrt((xschool - x1) * (xschool - x1) + (yschool - y1) * (yschool - y1))
var toado2 = Math.sqrt((xschool - x2) * (xschool - x2) + (yschool - y2) * (yschool - y2))
var toado3 = Math.sqrt((xschool - x3) * (xschool - x3) + (yschool - y3) * (yschool - y3))

var furthest = ''
if (toado1 > toado2 && toado1 > toado3) {
    furthest = name1
} else if (toado2 > toado1 && toado2 > toado3) {
    furthest = name2
} else if (toado3 > toado1 && toado3 > toado2) {
    furthest = name3
}

console.log('Sinh viên xa trường nhất là : ' + furthest)



















