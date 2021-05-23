    var a = document.getElementById('disp')

    function getNum(num){
        a.value += num
    }
    function cal(){
        a.value = eval(a.value)
    }
    function boo(){
        a.value = eval(a.value)
    }
    function remove(){
    a.value = '';
}



