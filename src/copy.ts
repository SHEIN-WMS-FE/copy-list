const copy = function (value: string): Boolean {
    try {
        const textEle = document.createElement('textarea');
        textEle.value = value;
        textEle.setAttribute('readonly', 'readonly');
        document.body.append(textEle);
        textEle.select();
        document.execCommand('copy');
        document.body.removeChild(textEle);
        return true;
    } catch (e) {
        return false
    }
}

export default copy;
