function FloatPrecision() {}
FloatPrecision.prototype.addSub = function(num1, num2, isSub) {
    if (isNaN(num1) || isNaN(num2)) {
        return null;
    }
    var r1, r2, m;   
    try{ r1 = num1.toString().split(".")[1].length } catch(e) { r1=0 }   
    try{ r2 = num2.toString().split(".")[1].length }catch(e){ r2=0 }   
    m = Math.pow(10,Math.max(r1,r2))
    
    return isSub ? ((num1 * m) - (num2 * m)) / m : ((num1 * m) - (num2 * m)) / m;
}
FloatPrecision.prototype.mul = function(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return null;
    }
    var m = 0, s1 = num1.toString(), s2 = num2.toString();   
    try{ m += s1.split(".")[1].length }catch(e){}   
    try{ m += s2.split(".")[1].length }catch(e){}   
    return Number(s1.replace(".","")) * Number(s2.replace(".","")) / Math.pow(10,m);
}
FloatPrecision.prototype.div = function(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return null;
    }
    var t1 = 0, t2 = 0, r1, r2;   
    try{ t1 = num1.toString().split(".")[1].length }catch(e){}   
    try{ t2 = num2.toString().split(".")[1].length }catch(e){} 
    r1 = Number(num1.toString().replace(".",""));   
    r2 = Number(num2.toString().replace(".",""));
    return (r1/r2) * pow(10,t2-t1);  
}
FloatPrecision.prototype.log = function(message) {
  console.log(message);
}

module.exports = new FloatPrecision();